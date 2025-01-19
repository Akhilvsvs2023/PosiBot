package com.psx;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.psx.utils.CleanerUtils;

@SpringBootTest
class PosibotApplicationTests {

	@Test
	void cleanerTestCase1() {
		String a = "Akhil Chinnu  V   S v S";
		if (CleanerUtils.cleanString(a).equals("Akhil Chinnu V S V S")) {
			System.out.println("TestCase1 Passed");
		} else {
			System.out.println("TestCase1 Failed");
		}
	}

	@Test
	void cleanerTestCase2() {
		String a = "VudaTha SRI      VenkaTA SAI Akhil              ";
		if (CleanerUtils.cleanString(a).equals("Vudatha Sri Venkata Sai Akhil")) {
			System.out.println("TestCase2 Passed");
		} else {
			System.out.println("TestCase2 Failed");
		}
	}

	@Test
	void cleanerTestCase3() {
		String a = "123  45 6 7 89";
		if (CleanerUtils.cleanInteger(a) == 123456789) {
			System.out.println("TestCase3 Passed");
		} else {
			System.out.println("TestCase3 Failed");
		}
	}

	@Test
	void cleanerTestCase4() {
		String a = "123 45.  7";
		if (CleanerUtils.cleanFloat(a) == 12345.7f) {
			System.out.println("TestCase4 Passed");
		} else {
			System.out.println("TestCase4 Failed");
		}
	}
	
	@Test
	void cleanerTestCase5() {
		String a = "123  45 6 7  0  123456 789";
		if (CleanerUtils.cleanLong(a) == 12345670123456789l) {
			System.out.println("TestCase5 Passed");
		} else {
			System.out.println("TestCase5 Failed");
		}
	}
	
	@Test
	void cleanerTestCase6() {
		String a = "123  4567 . 8908";
		if (CleanerUtils.cleanDouble(a) == 1234567.8908) {
			System.out.println("TestCase6 Passed");
		} else {
			System.out.println("TestCase6 Failed");
		}
	}
	
	@Test
	void cleanerTestCase7() throws Exception {
		String a = "199 9  - 1 2 -   18  ";
		if (CleanerUtils.cleanDate(a).toString() .equals("1999-12-18")) {
			System.out.println("TestCase7 Passed");
		} else {
			System.out.println("TestCase7 Failed");
		}
	}
	
	@Test
	void cleanerTestCase8() throws Exception {
		String a = "18 - 1 2  - 1999";
		if (CleanerUtils.cleanDate(a).toString() .equals("1999-12-18")) {
			System.out.println("TestCase8 Passed");
		} else {
			System.out.println("TestCase8 Failed");
		}
	}
	
	@Test
	void cleanerTestCase9() throws Exception {
		String a = "18 dece m b e r 1999";
		if (CleanerUtils.cleanDate(a).toString() .equals("1999-12-18")) {
			System.out.println("TestCase9 Passed");
		} else {
			System.out.println("TestCase9 Failed");
		}
	}
	
	@Test
	void cleanerTestCase10() throws Exception {
		String a = "199 9 dece m b e r 18  ";
		if (CleanerUtils.cleanDate(a).toString() .equals("1999-12-18")) {
			System.out.println("TestCase10 Passed");
		} else {
			System.out.println("TestCase10 Failed");
		}
	}
	
	@Test
	void cleanerTestCase11() throws Exception {
		String a = "my name is akhil my D O B is 18 december 1999.my R T O is ABCD E\nmy fathername is Akhil";
		if (CleanerUtils.initialDataClean(a).equals("my name is akhil\nmy dob is 18 december 1999\nmy rto is ABCD E\nmy fathername is Akhil")) {
			System.out.println("TestCase11 Passed");
		} else {
			System.out.println("TestCase11 Failed");
		}
	}
}
