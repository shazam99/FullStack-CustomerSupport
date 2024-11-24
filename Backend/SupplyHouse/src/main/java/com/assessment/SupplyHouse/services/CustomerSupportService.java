package com.assessment.SupplyHouse.services;

import com.assessment.SupplyHouse.entity.RegularHours;
import com.assessment.SupplyHouse.entity.SpecialHours;

import java.util.List;

public interface CustomerSupportService {

    List<RegularHours> getRegularHoursData();

    List<SpecialHours> getSpecialHoursData();

    SpecialHours createSpecialHour(SpecialHours specialHours);
}
