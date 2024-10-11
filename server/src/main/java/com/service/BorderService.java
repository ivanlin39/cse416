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

    public JsonNode getUSBorder() throws IOException{
        String jsonString = readJsonFile("USBorder.json");
        return objectMapper.readTree(jsonString);
    }

    public JsonNode getMarylandBorder() throws IOException{
        String jsonString = readJsonFile("MarylandBorder.json");
        return objectMapper.readTree(jsonString);
    }

    private String readJsonFile(String filename) throws IOException {
        ClassPathResource resource = new ClassPathResource(filename);
        return StreamUtils.copyToString(resource.getInputStream(), StandardCharsets.UTF_8);
    }
}
