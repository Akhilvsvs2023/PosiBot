package com.psx.utils;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CleanerUtils {

	public static Integer cleanInteger(String value) {
		String result = value.replaceAll("\\s+", "").trim();
		return Integer.parseInt(result);
	}

	public static Float cleanFloat(String value) {
		String result = value.replaceAll("\\s+", "").trim();
		return Float.parseFloat(result);
	}

	public static Double cleanDouble(String value) {
		String result = value.replaceAll("\\s+", "").trim();
		return Double.parseDouble(result);
	}

	public static Long cleanLong(String value) {
		String result = value.replaceAll("\\s+", "").trim();
		return Long.parseLong(result);
	}

	public static String cleanString(String value) {
		String[] words = value.trim().split("\\s+");
		StringBuilder result = new StringBuilder();
		for (String word : words) {
			if (word.length() > 1) {
				result.append(Character.toUpperCase(word.charAt(0))).append(word.substring(1).toLowerCase())
						.append(" ");
			} else {
				result.append(Character.toUpperCase(word.charAt(0))).append(" ");
			}
		}
		return result.toString().trim();
	}

	public static Date cleanDate(String value) throws Exception {
		value = value.replaceAll("hyphen", "-");
		value = value.replaceAll("dash", "-");
		value = value.replaceAll("slash", "/");
		value = value.replaceAll("bar", "/");
		value = value.replaceAll("\\s+", "").trim();
		String[] arr = new String[3];
		Map<Integer, String> map = generateMonthMap();
		String result = "";
		if (Pattern.matches("^(0[1-9]|[12][0-9]|3[01])(-|/)(0[1-9]|1[012])(-|/)((19|2[0-9])[0-9]{2})$", value)) {
			arr = (value.contains("-")) ? value.split("-") : value.split("/");
			result = arr[0] + " " + map.get(Integer.parseInt(arr[1])) + " " + arr[2];
		} else if (Pattern.matches("^((19|2[0-9])[0-9]{2})(-|/)(0[1-9]|1[012])(-|/)(0[1-9]|[12][0-9]|3[01])$", value)) {
			arr = (value.contains("-")) ? value.split("-") : value.split("/");
			result = arr[2] + " " + map.get(Integer.parseInt(arr[1])) + " " + arr[0];
		} else if (Pattern.matches("^\\d{2}[A-Za-z]+\\d{4}$", value)) {
			result = value.substring(0, 2) + " " + value.substring(2, value.length() - 4) + " "
					+ value.substring(value.length() - 4);
		} else if (Pattern.matches("^\\d{4}[A-Za-z]+\\d{2}$", value)) {
			result = value.substring(value.length() - 2) + " " + value.substring(4, value.length() - 2) + " "
					+ value.substring(0, 4);
		} else {
			throw new Exception("Unregistered format :: " + value);
		}
		SimpleDateFormat formatter = new SimpleDateFormat("dd MMMM yyyy");
		try {
			java.util.Date utilDate = formatter.parse(result.toLowerCase());
			return new Date(utilDate.getTime());
		} catch (ParseException e) {
			throw e;
		}
	}

	public static Map<Integer, String> generateMonthMap() {
		Map<Integer, String> monthMap = new LinkedHashMap<>();
		monthMap.put(1, "January");
		monthMap.put(2, "February");
		monthMap.put(3, "March");
		monthMap.put(4, "April");
		monthMap.put(5, "May");
		monthMap.put(6, "June");
		monthMap.put(7, "July");
		monthMap.put(8, "August");
		monthMap.put(9, "September");
		monthMap.put(10, "October");
		monthMap.put(11, "November");
		monthMap.put(12, "December");
		return monthMap;
	}

	public static String initialDataClean(String input) {
		StringBuilder retVal = new StringBuilder();
		input = input.replace(" my ", "\nmy ");
		input = input.replace(".my ", "\nmy ");
		Arrays.asList(input.split("\n")).forEach(x -> {
			retVal.append("my ");
			retVal.append(CleanerUtils.extractFieldName(x).replaceAll("\\s+", "").trim().toLowerCase() + " is ");
			retVal.append(x.substring(("my " + CleanerUtils.extractFieldName(x) + " is ").length()) + "\n");
		});
		return retVal.toString().trim();
	}

	public static String extractFieldName(String input) {
		String regex = "^my (.*?) is ";
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(input);

		if (matcher.find()) {
			return matcher.group(1);
		} else {
			return null;
		}
	}
}
