import { TestBed } from '@angular/core/testing';

import { DashboardServiceService } from './dashboard-service.service';

describe('DashboardServiceService', () => {
  let service: DashboardServiceService;

  beforeEach(() => {
  service =new DashboardServiceService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
