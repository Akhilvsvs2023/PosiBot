package com.psx;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.psx.utils.CleanerUtils;

@SpringBootTest
class PosibotApplicationTests {

	@Test
	void cleanerTestCase1() {
		String a = "Akhil Chinnu  V   S v S";
		assertEquals("Akhil Chinnu V S V S", CleanerUtils.cleanString(a));
	}

	@Test
	void cleanerTestCase2() {
		String a = "VudaTha SRI      VenkaTA SAI Akhil              ";
		assertEquals("Vudatha Sri Venkata Sai Akhil", CleanerUtils.cleanString(a));
	}

	@Test
	void cleanerTestCase3() {
		String a = "123  45 6 7 89";
		assertEquals(123456789,CleanerUtils.cleanInteger(a));
	}

	@Test
	void cleanerTestCase4() {
		String a = "123 45.  7";
		assertEquals(12345.7f,CleanerUtils.cleanFloat(a));
	}

	@Test
	void cleanerTestCase5() {
		String a = "123  45 6 7  0  123456 789";
		assertEquals(12345670123456789l,CleanerUtils.cleanLong(a));
	}

	@Test
	void cleanerTestCase6() {
		String a = "123  4567 . 8908";
		assertEquals(1234567.8908,CleanerUtils.cleanDouble(a));
	}

	@Test
	void cleanerTestCase7() throws Exception {
		String a = "199 9  - 1 2 -   18  ";
		assertEquals("1999-12-18",CleanerUtils.cleanDate(a).toString());
	}

	@Test
	void cleanerTestCase8() throws Exception {
		String a = "18 - 1 2  - 1999";
		assertEquals("1999-12-18",CleanerUtils.cleanDate(a).toString());
	}

	@Test
	void cleanerTestCase9() throws Exception {
		String a = "18 dece m b e r 1999";
		assertEquals("1999-12-18",CleanerUtils.cleanDate(a).toString());
	}

	@Test
	void cleanerTestCase10() throws Exception {
		String a = "199 9 dece m b e r 18  ";
		assertEquals("1999-12-18",CleanerUtils.cleanDate(a).toString());
	}

	@Test
	void cleanerTestCase11() throws Exception {
		String a = "1999bar12bar18";
		assertEquals("1999-12-18",CleanerUtils.cleanDate(a).toString());
	}

	@Test
	void cleanerTestCase12() throws Exception {
		String a = "1999slash12slash18";
		assertEquals("1999-12-18",CleanerUtils.cleanDate(a).toString());
	}

	@Test
	void cleanerTestCase13() throws Exception {
		String a = "1999dash12dash18";
		assertEquals("1999-12-18",CleanerUtils.cleanDate(a).toString());
	}
	
	@Test
	void cleanerTestCase14() throws Exception {
		String a = "18hyphen12hyphen1999";
		assertEquals("1999-12-18",CleanerUtils.cleanDate(a).toString());
	}

	@Test
	void cleanerTestCase15() {
		String a = "my name is akhil my D O B is 18 december 1999.my R T O is ABCD E\nmy fathername is Akhil";
		assertEquals("my name is akhil\nmy dob is 18 december 1999\nmy rto is ABCD E\nmy fathername is Akhil",CleanerUtils.initialDataClean(a));
	}
}
