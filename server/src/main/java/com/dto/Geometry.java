package com.dto;

import java.util.List;

public class Geometry {
    private String type;
    private List<List<List<Double>>> coordinates;

    public String getType(){return this.type;}
    public List<List<List<Double>>> getCoordinates(){return this.coordinates;}
}
