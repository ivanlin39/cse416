package com.dto;

import java.util.HashMap;

public class Feature {
    private String type;
    private HashMap<String, Double> properties;
    private Geometry geometry;

    public String getType(){return this.type;}
    public HashMap<String, Double> getProperties(){return this.properties;}
    public Geometry getGeometry(){return this.geometry;}    
}
