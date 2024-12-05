package com.service;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;
import java.nio.charset.StandardCharsets;
import java.io.IOException;

@Service
public class BorderService {
    private final ObjectMapper objectMapper = new ObjectMapper();
    
    public JsonNode getBorderData(String plan) {
        String borderData = null;
        try{
            if(plan.equals("USA")){
                borderData = readJsonFile("USBorder.json"); 
            }else{
                borderData = readJsonFile("CurrentDistrictPlan.json"); 
            }
            return objectMapper.readTree(borderData);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public JsonNode getCurrentDistrictPlanBorder() throws IOException{
        String jsonString = readJsonFile("CurrentDistrictPlanBorder.json");
        return objectMapper.readTree(jsonString);
    }

    private String readJsonFile(String filename) throws IOException {
        ClassPathResource resource = new ClassPathResource(filename);
        return StreamUtils.copyToString(resource.getInputStream(), StandardCharsets.UTF_8);
    }
}
