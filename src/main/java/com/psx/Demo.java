package com.psx;

import java.lang.reflect.Method;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.LinkedHashMap;
import java.util.Map;

import com.psx.entity.ClientDetails;

public class Demo {
	
	public static void main(String[] args) throws Exception {
//		Map<String,Object> dataMap = new LinkedHashMap();
//		dataMap.put("name", "Akhil");dataMap.put("dob", new Date(System.currentTimeMillis()));
//		ClientDetails dto = new ClientDetails();
//		for(Map.Entry<String, Object> entry : dataMap.entrySet()) {
//            String key = entry.getKey();
//            Object value = entry.getValue();
//            String methodName = "set" + key.substring(0, 1).toUpperCase() + key.substring(1);
//            Method method = dto.getClass().getMethod(methodName, Object.class);
//            method.invoke(dto, value);
//		}
//		System.out.println(dto.toString());
//		String a = "my name is akhil";
//		System.out.println(a.substring("my name is ".length()));
		String dateString = "18 December 1999";
        SimpleDateFormat formatter = new SimpleDateFormat("dd MMMM yyyy");
        try {
            java.util.Date utilDate = formatter.parse(dateString);
            Date sqlDate = new Date(utilDate.getTime());
           System.out.println(dateString.toLowerCase());
        } catch (ParseException e) {
            throw e;
        }
	}
	
}
