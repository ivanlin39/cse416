package com.service;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.model.DistrictPlan;

@Service
public class DistrictPlanService {
    private DistrictPlan districtPlan;

    @Cacheable(value = "myCache", key = "#planType + '-' + #planNumber")
    public DistrictPlan getDistrictPlan(String planType, int planNumber){
        districtPlan = new DistrictPlan(planType, planNumber);
        return districtPlan;
    }
}
