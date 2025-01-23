package com.psx.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.psx.entity.ClientDetails;
import com.psx.service.ClientService;

@RestController
@RequestMapping("/client")
public class ClientController {

	@Autowired
	ClientService service;
	
	@PostMapping("/saveClientDetails")
	public String saveClientDetails(@RequestBody String clientInfo) {
		try {
			return service.saveClientDetails(clientInfo);
		}catch(Exception e) {
			return e.getMessage();
		}
	}
	
	@PostMapping("/fetchClientDetails")
	public List<ClientDetails> fetchClientDetails(@RequestBody String clientInfo) throws Exception{
		try {
			return service.fetchClientDetails(clientInfo);
		}catch(Exception e) {
			throw e;
		}
	}
	
	@GetMapping("/getClientDetails")
	public List<ClientDetails> getClientDetails() throws Exception{
		try {
			return service.getClientDetails();
		}catch(Exception e) {
			throw e;
		}
	} 
}
