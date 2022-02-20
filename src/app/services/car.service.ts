import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiBaseURL = 'https://private-anon-d9d1c89964-carsapi1.apiary-mock.com/cars';

  constructor(private http: HttpClient) { }

  getAllCars() {
    return this.http.get<Car[]>(`${this.apiBaseURL}`);
  }

  getCarDetails(id: number) {
    return this.http.get<Car[]>(`${this.apiBaseURL}/<car_id>`)
  }
}
