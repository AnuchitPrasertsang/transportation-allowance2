package com.spt.tsa.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class SEI005Controller {
	private static final Logger logger = LoggerFactory.getLogger(SEI005Controller.class);


	@RequestMapping(value = "/SEI005.html", method = RequestMethod.GET)
	public ModelAndView view(HttpServletRequest request, HttpServletResponse response) {

		Map<String,Object> model = new HashMap<String,Object>();
		
		return new ModelAndView("SEI005", model);

	}
}