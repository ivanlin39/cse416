package com.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="areas")
public class Area {
    @Id
    private String name;
    private double lat;
    private double lng;
    private int zoom;
    private double[][] maxBounds;
    
    public String getName(){return this.name;}
    public double getLat(){return this.lat;}
    public double getLng(){return this.lng;}
    public double getZoom(){return this.zoom;}
    public double[][] getMaxBounds(){return this.maxBounds;}
    public void setName(String name){this.name = name;}
    public void setLat(double lat){this.lat = lat;}
    public void setLng(double lng){this.lng = lng;}
    public void setZoom(int zoom){this.zoom = zoom;}
    public void setMaxBounds(double[][] maxBounds){this.maxBounds = maxBounds;}
}
