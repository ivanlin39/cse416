package com.model;

import org.springframework.data.mongodb.core.mapping.Field;

public class DistrictBoxAndWhiskerData {
    @Field("min")
    private double min;
    @Field("q1")
    private double q1;
    @Field("median")
    private double median;
    @Field("q3")
    private double q3;
    @Field("max")
    private double max;

    public double getMin(){return this.min;}
    public double getQ1(){return this.q1;}
    public double getMedian(){return this.median;}
    public double getQ3(){return this.q3;}
    public double getMax(){return this.max;}   
}
