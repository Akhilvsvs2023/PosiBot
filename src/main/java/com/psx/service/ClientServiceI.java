package com.psx.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.psx.dto.ResultDTO;
import com.psx.entity.ClientDetails;

@Service
public interface ClientServiceI {
	public String saveClientDetails(String clientInfo) throws Exception;
	public List<ClientDetails> fetchClientDetails(String clientInfo) throws Exception;
	public List<ClientDetails> getClientDetails() throws Exception;
}
