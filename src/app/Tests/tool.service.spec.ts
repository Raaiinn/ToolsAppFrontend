import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ToolService } from './tool.service';

describe('ToolService', () => {
  let service: ToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(ToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});