package com.psx.service;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Logger;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.psx.entity.ClientDetails;
import com.psx.repo.ClientRepository;
import com.psx.utils.CleanerUtils;

@Service
public class ClientService implements ClientServiceI {

	@Autowired
	ClientRepository repo;
	Logger logger = Logger.getLogger(ClientService.class.getName());

	@Autowired
	BasicDataSource ds;

	@Override
	public String saveClientDetails(String clientInfo) throws Exception {
		try {
			Map<String, Class<?>> dataTypesMap = generateDataTypeMap(ClientDetails.class);
			Map<String, String> keyWordsMap = generateKeyWordMap(dataTypesMap.keySet());
			Map<String, Object> dataMap = extractClientDetails(keyWordsMap, dataTypesMap, clientInfo.toLowerCase());
			ClientDetails data = prepareDTO(dataMap, dataTypesMap);
			repo.save(data);
			return "Data saved successfully.";
		} catch (Exception e) {
			logger.info(e.getMessage());
			throw e;
		}
	}

	@Override
	public List<ClientDetails> fetchClientDetails(String clientInfo) throws Exception {
		List<ClientDetails> retValue = new ArrayList<>();
		try {
			Map<String, Class<?>> dataTypesMap = generateDataTypeMap(ClientDetails.class);
			Map<String, String> keyWordsMap = generateKeyWordMap(dataTypesMap.keySet());
			Map<String, Object> dataMap = extractClientDetails(keyWordsMap, dataTypesMap, clientInfo.toLowerCase());
			String preparedStatement = generatePrepareStatement(dataMap);
			try (Connection con = ds.getConnection();
					PreparedStatement ps = con.prepareStatement(preparedStatement.substring(0, preparedStatement.length() - 4));) {
				populatePrepareStatement(ps, dataTypesMap, dataMap);
				try (ResultSet rs = ps.executeQuery();) {
					while (rs.next()) {
						retValue.add(populateClientDetails(rs, dataTypesMap));
					}
				}
			} catch (Exception e) {
				logger.info(e.getMessage());
				throw e;
			}
			return retValue;
		} catch (Exception e) {
			logger.info(e.getMessage());
			throw e;
		}
	}

	private ClientDetails populateClientDetails(ResultSet rs, Map<String, Class<?>> dataTypesMap) throws Exception {
		ClientDetails c = new ClientDetails();
		for (Map.Entry<String, Class<?>> entry : dataTypesMap.entrySet()) {
			String field = entry.getKey();
			Class clazz = entry.getValue();
			String methodName = "set" + field.substring(0, 1).toUpperCase() + field.substring(1);
			Method method = c.getClass().getMethod(methodName, clazz);
			method.invoke(c, getValue(rs, field, clazz));
		}
		return c;
	}

	private Object getValue(ResultSet rs, String field, Class clazz) throws Exception {
		if (clazz == Integer.class) {
			return rs.getInt(field);
		} else if (clazz == String.class) {
			return rs.getString(field);
		}else if (clazz == Long.class) {
			return rs.getLong(field);
		} else if (clazz == Date.class) {
			return rs.getDate(field);
		} else if (clazz == Float.class) {
			return rs.getFloat(field);
		} else if (clazz == Double.class) {
			return rs.getDouble(field);
		} else {
			return rs.getObject(field);
		}
	}

	private void populatePrepareStatement(PreparedStatement ps, Map<String, Class<?>> dataTypesMap,
			Map<String, Object> dataMap) throws SQLException {
		int i = 1;
		for (Map.Entry<String, Object> entry : dataMap.entrySet()) {
			ps.setObject(i, entry.getValue());
			i++;
		}
	}

	private String generatePrepareStatement(Map<String, Object> dataMap) {
		StringBuilder sb = new StringBuilder();
		sb.append("select * from psx_client_details where ");
		dataMap.keySet().forEach(x -> {
			sb.append(x + "=? AND ");
		});
		return sb.toString();
	}

	private ClientDetails prepareDTO(Map<String, Object> dataMap, Map<String, Class<?>> dataTypesMap) throws Exception {
		ClientDetails dto = new ClientDetails();
		for (Map.Entry<String, Object> entry : dataMap.entrySet()) {
			String key = entry.getKey();
			Object value = entry.getValue();
			String methodName = "set" + key.substring(0, 1).toUpperCase() + key.substring(1);
			Method method = dto.getClass().getMethod(methodName, dataTypesMap.get(key));
			method.invoke(dto, value);
		}
		return dto;
	}

	private Map<String, Object> extractClientDetails(Map<String, String> keyWordsMap, Map<String, Class<?>> dataTypesMap, String clientInfo) {
		Map<String, Object> retValue = new LinkedHashMap<>();
		Arrays.asList(clientInfo.split("\n")).forEach(x -> {
			keyWordsMap.forEach((a, b) -> {
				if (x.contains(a)) {
					String value = x.substring(a.length());
					if (dataTypesMap.get(b) == String.class) {
						retValue.put(b, CleanerUtils.cleanString(value));
					}  else if(dataTypesMap.get(b) == Integer.class) {
						retValue.put(b, CleanerUtils.cleanInteger(value));
					}else if(dataTypesMap.get(b) == Long.class) {
						retValue.put(b, CleanerUtils.cleanLong(value));
					} else if(dataTypesMap.get(b) == Float.class) {
						retValue.put(b, CleanerUtils.cleanFloat(value));
					} else if(dataTypesMap.get(b) == Double.class) {
						retValue.put(b, CleanerUtils.cleanDouble(value));
					} else if (dataTypesMap.get(b) == Date.class) {
						try {
							retValue.put(b, CleanerUtils.cleanDate(value));
						} catch (Exception e) {
							throw new RuntimeException("Data is unclear, unable to parse date");
						}
					}else {
						logger.info("No specified datatype mentioned  for " + b);
					}
				}
			});
		});
		return retValue;
	}

	private Map<String, Class<?>> generateDataTypeMap(Class<?> clazz) {
		Map<String, Class<?>> dataTypesMap = new LinkedHashMap<>();
		for (Field field : clazz.getDeclaredFields()) {
			dataTypesMap.put(field.getName(), field.getType());
		}
		return dataTypesMap;
	}

	private Map<String, String> generateKeyWordMap(Set<String> fields) {
		Map<String, String> keyWordsMap = new LinkedHashMap<>();
		for (String field : fields) {
			keyWordsMap.put("my " + field + " is ", field);
		}
		return keyWordsMap;
	}

}
