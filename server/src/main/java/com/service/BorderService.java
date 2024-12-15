package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.model.Border;
import com.repository.BorderRepository;
import com.fasterxml.jackson.databind.JsonNode;
import java.nio.charset.StandardCharsets;
import java.io.IOException;
import java.io.InputStream;
import java.io.FileNotFoundException;

@Service
public class BorderService {
    @Autowired
    private BorderRepository borderRepo;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public Border getBorderData(String plan) {
        return plan.equals("USA") ? new Border(): borderRepo.findByClass("currentDistrictPlan");
    }

    public Border addBorder() {
        Border b = null;
        try {
            InputStream inputStream = getClass().getClassLoader().getResourceAsStream("districtsFinal.json");
            if (inputStream == null) {
                throw new FileNotFoundException("File 'districtsFinal.json' not found in resources.");
            }
            b = objectMapper.readValue(inputStream, Border.class);
            System.out.println(b);
            System.out.println(b.getFeatures());
            System.out.println(b.getFeatures().get(0).getType());
            System.out.println(b.getFeatures().get(0).getProperties());
            System.out.println(b.getFeatures().get(0).getGeometry());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return borderRepo.save(b);
    }

    public JsonNode getCurrentDistrictPlanBorder() throws IOException {
        String jsonString = readJsonFile("CurrentDistrictPlanBorder.json");
        return objectMapper.readTree(jsonString);
    }

    private String readJsonFile(String filename) throws IOException {
        ClassPathResource resource = new ClassPathResource(filename);
        return StreamUtils.copyToString(resource.getInputStream(), StandardCharsets.UTF_8);
    }
}
