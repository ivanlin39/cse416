package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.model.Area;
import com.repository.AreaRepository;

@Service
public class AreaService {
    @Autowired
    private AreaRepository areaRepo;
    
    @Cacheable(value = "myCache", key = "#root.method.name + '-' + #area")
    public Area getAreaById(String area){
        return areaRepo.findById(area).orElse(null);
    }
}
