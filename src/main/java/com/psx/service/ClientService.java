package com.psx.service;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.psx.entity.ClientDetails;
import com.psx.repo.ClientRepository;

@Service
public class ClientService implements ClientServiceI {

	@Autowired
	ClientRepository repo;
	Logger logger = Logger.getLogger(ClientService.class.getName());

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

	private Map<String, Object> extractClientDetails(Map<String, String> keyWordsMap, Map<String, Class<?>> dataTypesMap,
			String clientInfo) {
		Map<String, Object> retValue = new LinkedHashMap<>();
		Arrays.asList(clientInfo.split("\n")).forEach(x -> {
			keyWordsMap.forEach((a, b) -> {
				if (x.contains(a)) {
					String value = x.substring(a.length());
					if (dataTypesMap.get(b) == String.class) {
						retValue.put(b, value.trim());
					} else if (dataTypesMap.get(b) == Date.class) {
						try {
							retValue.put(b, extractDate(value));
						} catch (Exception e) {
							throw new RuntimeException("Data is unclear, unable to parse date");
						}
					} else {
						logger.info("No specified datatype mentioned  for " + b);
					}
				}
			});
		});
		return retValue;
	}

	private Date extractDate(String value) throws Exception {
		SimpleDateFormat formatter = new SimpleDateFormat("dd MMMM yyyy");
		try {
			java.util.Date utilDate = formatter.parse(value.toLowerCase());
			return new Date(utilDate.getTime());
		} catch (ParseException e) {
			logger.info("Error while parsing :: "+value);
			throw e;
		}
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
