/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';
import {ApiService} from './api.service';
import {ApiMockService} from './api-mock.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

});
