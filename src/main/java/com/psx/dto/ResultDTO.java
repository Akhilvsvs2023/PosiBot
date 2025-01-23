package com.psx.dto;

import java.util.List;

import com.psx.entity.ClientDetails;

public class ResultDTO {

	private List<ClientDetails> results;
	private String resultAsText;

	public List<ClientDetails> getResults() {
		return results;
	}

	public void setResults(List<ClientDetails> results) {
		this.results = results;
	}

	public String getResultAsText() {
		return resultAsText;
	}

	public void setResultAsText(String resultAsText) {
		this.resultAsText = resultAsText;
	}

	public ResultDTO(List<ClientDetails> results, String resultAsText) {
		super();
		this.results = results;
		this.resultAsText = resultAsText;
	}

	public ResultDTO() {
	}

	@Override
	public String toString() {
		return "ResultDTO [results=" + results + ", resultAsText=" + resultAsText + "]";
	}

}
