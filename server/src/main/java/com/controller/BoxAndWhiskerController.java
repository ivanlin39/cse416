package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.BoxAndWhisker;
import com.model.BoxAndWhisker.Category;
import com.service.BoxAndWhiskerService;

@RestController
@CrossOrigin
@RequestMapping("/api/boxAndWhisker")
public class BoxAndWhiskerController{
    @Autowired
    private BoxAndWhiskerService boxAndWhiskerService;

    @GetMapping("/{planType}/{category}")
    public ResponseEntity<BoxAndWhisker> getBoxAndWhiskerData(@PathVariable("planType") String planType, @PathVariable("category") Category category) {
        System.out.println(26 + " " + planType + "  "  + category);
        return ResponseEntity.ok(boxAndWhiskerService.getBoxAndWhiskerByPlanTypeAndCategory(planType, category));
    }
}