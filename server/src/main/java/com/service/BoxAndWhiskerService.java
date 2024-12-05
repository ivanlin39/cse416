package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.BoxAndWhisker;
import com.model.BoxAndWhisker.Category;
import com.repository.BoxAndWhiskerRepository;

@Service
public class BoxAndWhiskerService {
    @Autowired
    private BoxAndWhiskerRepository boxAndWhiskerRepo;

    public BoxAndWhisker getBoxAndWhiskerByPlanTypeAndCategory(String planType, Category category){
        System.out.println("181818");
        return boxAndWhiskerRepo.findByPlanTypeAndCategory(planType, category).get(0);
    }
}
