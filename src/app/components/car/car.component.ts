import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient}from '@angular/common/http'
import { CarResponseModel } from 'src/app/models/carResponseModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  
   constructor() { }

  ngOnInit(): void {
    this.getCars();

  }
  getCars(){
     this.httpClient.get<CarResponseModel>(this.apiUrl)
     .subscribe((response)=>{
       this.cars=response.data
     });
  }
   
}
