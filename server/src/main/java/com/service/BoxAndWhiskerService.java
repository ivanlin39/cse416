package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.model.BoxAndWhisker;
import com.model.BoxAndWhisker.Category;
import com.repository.BoxAndWhiskerRepository;

@Service
public class BoxAndWhiskerService {
    @Autowired
    private BoxAndWhiskerRepository boxAndWhiskerRepo;

    @Cacheable(value = "myCache", key = "#planType + '-' + #category")
    public BoxAndWhisker getBoxAndWhiskerByPlanTypeAndCategory(String planType, Category category){
        return boxAndWhiskerRepo.findByPlanTypeAndCategory(planType, category);
    }
}
