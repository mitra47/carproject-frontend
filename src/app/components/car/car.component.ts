import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient}from '@angular/common/http'
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
    styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  
  
   constructor(private carService:CarService, 
    private activatedRoute:ActivatedRoute){ }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"])
        {this.getCarsByBrand(params["brandId"])}
        else if (params["colorId"])
        {this.getCarsByColor(params["colorId"])}
        else{this.getCars()}
    })


  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      console.log(response);
      
    })
    
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
      
    })
  }
  getCarsByColor(colorId:number){
  
    this.carService.getCarsByColor(colorId).subscribe(response=>
      {
        this.cars=response.data
        
      })
  }
}