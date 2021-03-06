package com.spt.tsa.service.Impl;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Date;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spt.tsa.dao.TravelHeader01Dao;
import com.spt.tsa.domain.SCF003Domain01;
import com.spt.tsa.entity.*;
import com.spt.tsa.service.TravelHeader01Service;



@Service
public class Travelheader01ServiceImpl implements TravelHeader01Service{

    private TravelHeader01Dao travelHeader01Dao;
    @Autowired
    public void setTravelHeader01Dao(TravelHeader01Dao travelHeader01Dao) {
   	 this.travelHeader01Dao = travelHeader01Dao;
    }
    
    public List<TravelHeader> findTravelHeader(){
   	 // TODO Auto-generated method stub
   	 return travelHeader01Dao.findTravelHeader();
    }

	public List<TravelHeader> findByDocNo(String docNo) {
		return this.travelHeader01Dao.findByDocNo(docNo);
	}
	public Employee findEmployeeWhereId(String domain){
    	return travelHeader01Dao.findEmployeeWhereId(domain);
    }
	public Company findCompanyWhereId(String domain){
		return travelHeader01Dao.findCompanyWhereId(domain);
	}
	public void save(SCF003Domain01 domain){
		this.travelHeader01Dao.save(domain);
	}
	public List<TravelHeader> findTravelHanderGetLastNoDoc(){
		return this.travelHeader01Dao.findTravelHanderGetLastNoDoc();
	}
	public void updateStatusSubmit(SCF003Domain01 domain){
		this.travelHeader01Dao.updateStatusSubmit(domain);
	}
	public void saveHeaderCreateFrom(TravelHeader travelHeader) {
		this.travelHeader01Dao.saveHeaderCreateFrom(travelHeader);
	}

	public List<TravelHeader> findByDocNoForSaveOrUpdate(String docNo) {
		return this.travelHeader01Dao.findByDocNoForSaveOrUpdate(docNo);
	}
	
	 public List<TravelHeader> findNameDeptSelect(Employee employee,String param){
		 return this.travelHeader01Dao.findNameDeptSelect(employee, param);
	 }
	
	
	public List<BigDecimal> findTravelTotal(String domain){
		 List<BigDecimal> send = travelHeader01Dao.findTravelTotal(domain);
	    	return send;
	    }
	 public List<String> findDateMinMaxFromTravelHeader(String domain){
		 List<String> send = travelHeader01Dao.findDateMinMaxFromTravelHeader(domain);
		 return send;
	 }
	
	 public List<TravelDetail> findDateMinMax(String domain) {
		 return this.travelHeader01Dao.findDateMinMax(domain);
	 }
	 public List<String> findNameCustomer(String domain){
		 List<String> send = travelHeader01Dao.findNameCustomer(domain);
		 return send;
	 }
	 public List<TravelDetail> findByCustomer(String domain){
		 return this.travelHeader01Dao.findByCustomer(domain);
	 }

	public List<TravelHeader> findByEmpIdInTravelHeader(Employee employee) {
		return this.travelHeader01Dao.findByEmpIdInTravelHeader(employee);
	}

	public void deleteTravelHeader(TravelHeader travelHeader) {
		this.travelHeader01Dao.deleteTravelHeader(travelHeader);
	}
	public List<TravelHeader> findSelectYearNotSave(){
		return this.travelHeader01Dao.findSelectYearNotSave();
	}
	public List<TravelHeader> findDataGroupByNo(){
		return this.travelHeader01Dao.findDataGroupByNo();
	}
	public List<TravelHeader> findSelectSearchStatus(String domain){
		return this.travelHeader01Dao.findSelectSearchStatus(domain);
	}
	
	public List<TravelHeader> findYearSelect(String domain){
		return this.travelHeader01Dao.findYearSelect(domain);
	}
	
	public List<TravelHeader> findMonthSelect(String domain){
		return this.travelHeader01Dao.findMonthSelect(domain);
	}
	public List<TravelHeader> findYearAndMonthSelect(String domain){
		return this.travelHeader01Dao.findYearAndMonthSelect(domain);
	}
	
	public List<TravelHeader> findMountAndStatus(String domain,String status){
		return this.travelHeader01Dao.findMountAndStatus(domain, status);
	}
	public List<TravelHeader> findYearAndStatus(String domain,String status){
		return this.travelHeader01Dao.findYearAndStatus(domain, status);
	}
	
	public List<TravelHeader> findAllCase(String yearAndMount,String status){
		return this.travelHeader01Dao.findAllCase(yearAndMount, status);
	}
	public List<TravelHeader> findTravelHeaderWhereIdtravelDetail(String travelDetail){
		return this.travelHeader01Dao.findTravelHeaderWhereIdtravelDetail(travelDetail);
	}
	public List<TravelHeader> findLikeYearAndStatus(Employee employee,String year, String status) { //Required Thai Year
		List<TravelHeader> listTravelHeaders = null;
		

		
		String yearConCat = year;
		
		String from ="01/01/".concat(yearConCat);
		String to = "31/12/".concat(yearConCat);		
		SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy", new Locale("th", "th"));//Required Thai Year output English Year
		Date yearStart = null;
		Date yearEnd = null;
		try{
			yearStart = (Date) format.parse(from);//output English Year
			yearEnd = (Date) format.parse(to);//output English Year
		}catch (Exception ex){
			
		}

		if(year.equals("%")&&status.equals("%")){
			listTravelHeaders =  this.travelHeader01Dao.findByEmpIdInTravelHeader(employee);
		}else if(!(year.equals("%"))&&status.equals("%")){
			listTravelHeaders =  this.travelHeader01Dao.findLikeYearAndStatus(employee,yearStart,yearEnd,status);
		}else if(year.equals("%")&&!(status.equals("%"))){
			listTravelHeaders = this.travelHeader01Dao.findLikeStatusAllYear(employee, status);			
		}else {
			listTravelHeaders = this.travelHeader01Dao.findLikeYearAndStatus(employee, yearStart, yearEnd, status);
		}
		return listTravelHeaders;
	}

	public TravelHeader findByTHeadId(String tHeadId) {
		return this.travelHeader01Dao.findByTHeadId(tHeadId);
	}
	
	 public List<TravelHeader> findTravelHeaderOrderbyModifyDate(){
		 return this.travelHeader01Dao.findTravelHeaderOrderbyModifyDate();
	 }
	

}
	
