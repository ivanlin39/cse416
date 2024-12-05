package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Area;
import com.repository.AreaRepository;

@Service
public class AreaService {
    @Autowired
    private AreaRepository areaRepo;
    
    public Area getAreaById(String area){
        return areaRepo.findById(area).orElse(null);
    }
}
