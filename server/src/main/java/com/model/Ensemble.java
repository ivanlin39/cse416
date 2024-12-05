package com.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ensembles")
public class Ensemble {
    @Id
    private String planType;
    private int numOfDistrictPlan;
    private double avgMinorityRepresentative;
    private double avgEqualPopulation;
    private double avgRepDemSplit;
    private int[] layout;
    private double rangeOfRepresentative;
    private double rangeOfRepDemSplit;

public String getPlanType(){return this.planType;}
public int getNumOfDistrictPlan(){return this.numOfDistrictPlan;}
public double getAvgMinorityRepresentative(){return this.avgMinorityRepresentative;}
public double getAvgEqualPopulation(){return this.avgEqualPopulation;}
public double getAvgRepDemSplit(){return this.avgRepDemSplit;}
public int[] getLayout(){return this.layout;}
public double getRangeOfRepresentative(){return this.rangeOfRepresentative;}
public double getRangeOfRepDemSplit(){return this.rangeOfRepDemSplit;}
}
