package com.assessment.SupplyHouse.controller;


import com.assessment.SupplyHouse.entity.RegularHours;
import com.assessment.SupplyHouse.entity.SpecialHours;
import com.assessment.SupplyHouse.services.CustomerSupportService;
import com.assessment.SupplyHouse.services.CustomerSupportServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customerSupport")
public class CustomerSupportController {

    @Autowired
    private CustomerSupportService customerSupportService;


    // GET Regular hours
    @GetMapping("/hours/regularHours")
    public ResponseEntity<List<RegularHours>> getRegularHours() {
        return ResponseEntity.ok(customerSupportService.getRegularHoursData());
    }

    // GET Special hours
    @GetMapping("/hours/specialHours")
    public ResponseEntity<List<SpecialHours>> getSpecialHours() {
        return ResponseEntity.ok(customerSupportService.getSpecialHoursData());
    }


    // POST Special hour
    @PostMapping("/hours/addSpecialHours")
    public ResponseEntity<SpecialHours> addSpecialHours( @RequestBody SpecialHours specialHours) {
        SpecialHours createdSpecialHour = customerSupportService.createSpecialHour(specialHours);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSpecialHour);
    }

}
