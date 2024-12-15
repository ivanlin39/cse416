package com.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dto.DistrictPlan;
import com.service.DistrictPlanService;

@RestController
@CrossOrigin
@RequestMapping("/api/districtPlan")
public class DistrictPlanController {
    private DistrictPlanService districtPlanService = new DistrictPlanService();

    @GetMapping("/{planType}/{planNumber}")
    public ResponseEntity<DistrictPlan> getDistrictPlanData(@PathVariable("planType") String planType, @PathVariable("planNumber") int planNumber){
        DistrictPlan d = districtPlanService.getDistrictPlan(planType, planNumber);
        return ResponseEntity.ok(d);
    }
}
