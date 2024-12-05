package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import com.model.Area;
import com.service.AreaService;

@RestController
@CrossOrigin
@RequestMapping("/api/area")
public class AreaController {
    @Autowired
    private AreaService areaService;

    @GetMapping("/{area}")
    public ResponseEntity<Area> getAreaData(@PathVariable("area") String area){
        return ResponseEntity.ok(areaService.getAreaById(area));
    }
}
