CREATE TABLE psx_client_details (
    slno number(5) NOT NULL UNIQUE AUTO_INCREMENT UNIQUE,
    name VARCHAR(1000),
	dob date,
	pan varchar(100),
	city varchar(100),
	pincode number(10),
	address varchar(1000)
);
