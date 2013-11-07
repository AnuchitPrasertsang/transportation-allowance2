package com.spt.tsa.domain;

public class SVD006Domain01 extends SCF003Domain01 {
	private Long totalPayExpresses;
	private Long totalPayMotorWay;
	private Long totalPayAll;
	
	private String payType;
	private String reson;
	
	private String totalPayCharector;
	
	public SVD006Domain01() {
		// TODO Auto-generated constructor stub
	}

	public Long getTotalPayExpresses() {
		return totalPayExpresses;
	}

	public void setTotalPayExpresses(Long totalPayExpresses) {
		this.totalPayExpresses = totalPayExpresses;
	}

	public Long getTotalPayMotorWay() {
		return totalPayMotorWay;
	}

	public void setTotalPayMotorWay(Long totalPayMotorWay) {
		this.totalPayMotorWay = totalPayMotorWay;
	}

	public Long getTotalPayAll() {
		return totalPayAll;
	}

	public void setTotalPayAll(Long totalPayAll) {
		this.totalPayAll = totalPayAll;
	}

	public String getTotalPayCharector() {
		return totalPayCharector;
	}

	public void setTotalPayCharector(String totalPayCharector) {
		this.totalPayCharector = totalPayCharector;
	}

	public String getPayType() {
		return payType;
	}

	public void setPayType(String payType) {
		this.payType = payType;
	}

	public String getReson() {
		return reson;
	}

	public void setReson(String reson) {
		this.reson = reson;
	}

	
}