package com.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.dto.DistrictsBoxAndWhiskerData;

@Document(collection="boxandwhiskers")
public class BoxAndWhisker{
    public enum Category {EXTREME_REP, EXTREME_DEM}
    
    @Id
    private String id;
    @Field("category")
    private Category category;
    @Field("planType")
    private String planType;
    @Field("districtsBoxAndWhiskerData")
    private List<DistrictsBoxAndWhiskerData> districtsBoxAndWhiskerData;

    public Category getCategory(){return this.category;}
    public String getPlanType(){return this.planType;}
    public List<DistrictsBoxAndWhiskerData> getDistrictBoxAndWhiskerData(){return this.districtsBoxAndWhiskerData;}
}