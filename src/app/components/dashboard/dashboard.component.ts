import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  carList: Car[] = [];

  constructor(private _carService: CarService) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this._carService.getAllCars()
      .subscribe(data => {
        if (data) {
          this.carList = data;
        }
        else {
          this.carList = [];
        }
      })
  }

}
