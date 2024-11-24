package com.assessment.SupplyHouse.services;

import com.assessment.SupplyHouse.entity.RegularHours;
import com.assessment.SupplyHouse.entity.SpecialHours;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerSupportServiceImpl implements CustomerSupportService {
    @Override
    public List<RegularHours> getRegularHoursData() {
        return List.of();
    }

    @Override
    public List<SpecialHours> getSpecialHoursData() {
        return List.of();
    }

    @Override
    public SpecialHours createSpecialHour(SpecialHours specialHours) {
        return null;
    }
}
