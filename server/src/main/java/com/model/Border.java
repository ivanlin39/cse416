package com.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import com.dto.Feature;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
@Document(collection = "borders")
public class Border {
    private List<Feature> features;

    public List<Feature> getFeatures(){return this.features;}    
}
