package com.psx;

import java.util.regex.Pattern;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PosibotApplication {

//	public static void main(String[] args) {
//		SpringApplication.run(PosibotApplication.class, args);
//	}
	public static void main(String[] args) {
		String a = "18abc1999";
		System.out.println(Pattern.matches("^\\d{2}[A-Za-z]+\\d{4}$", a));
		a = "abc";
		System.out.println(Pattern.matches("^[A-Za-z]+$", a));
		
	}
}
