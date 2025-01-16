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
	@Column(name = "sl")
	private Integer sl;
	@Column(name = "name")
	private String name;
	@Column(name = "dob")
	private Date dob;

	public Integer getSl() {
		return sl;
	}

	public void setSl(Integer sl) {
		this.sl = sl;
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

	public ClientDetails(String name, Date dob) {
		super();
		this.name = name;
		this.dob = dob;
	}

	public ClientDetails() {
	}

	@Override
	public String toString() {
		return "Client [sl=" + sl + ", name=" + name + ", dob=" + dob + "]";
	}

}
