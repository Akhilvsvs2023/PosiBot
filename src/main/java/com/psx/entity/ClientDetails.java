package com.psx.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "psx_client_details")
public class ClientDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "slno")
	private Integer slno;
	@Column(name = "name")
	private String name;
	@Column(name = "dob")
	private Date dob;
	@Column(name = "pan")
	private String pan;
	@Column(name = "city")
	private String city;
	@Column(name = "pincode")
	private Integer pincode;
	@Column(name = "address")
	private String address;

	public Integer getSlno() {
		return slno;
	}

	public void setSlno(Integer slno) {
		this.slno = slno;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Integer getPincode() {
		return pincode;
	}

	public void setPincode(Integer pincode) {
		this.pincode = pincode;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public ClientDetails(String name, Date dob, String pan, String city, Integer pincode, String address) {
		super();
		this.name = name;
		this.dob = dob;
		this.pan = pan;
		this.city = city;
		this.pincode = pincode;
		this.address = address;
	}

	public ClientDetails() {
	}

	@Override
	public String toString() {
		return "ClientDetails [slno=" + slno + ", name=" + name + ", dob=" + dob + ", pan=" + pan + ", city=" + city
				+ ", pincode=" + pincode + ", address=" + address + "]";
	}

}
