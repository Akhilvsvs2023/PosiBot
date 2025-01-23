package com.psx.service;

import org.springframework.stereotype.Service;

import com.psx.dto.ResultDTO;

@Service
public interface ClientServiceI {
	public String saveClientDetails(String clientInfo) throws Exception;
	public ResultDTO fetchClientDetails(String clientInfo) throws Exception;
	public ResultDTO getClientDetails() throws Exception;
}
