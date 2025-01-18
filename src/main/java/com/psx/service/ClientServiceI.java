package com.psx.service;

import org.springframework.stereotype.Service;

@Service
public interface ClientServiceI {
	public String saveClientDetails(String clientInfo) throws Exception;
}
