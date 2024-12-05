package com.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="boxandwhiskers")
public class BoxAndWhisker{
    public enum Category {EXTREME_REP, EXTREME_DEM}
    @Id
    private String id;
    private Category category;
    private String planType;
    private List<DistrictBoxAndWhiskerData> districtsBoxAndWhiskerData;

    public Category getCategory(){return this.category;}
    public String getPlanType(){return this.planType;}
    public List<DistrictBoxAndWhiskerData> getDistrictBoxAndWhiskerData(){return this.districtsBoxAndWhiskerData;}
}