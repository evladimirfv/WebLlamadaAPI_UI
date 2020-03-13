import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Observable } from 'rxjs/Rx';




@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
    public forecasts: object;
    public foreValue: string;
   // public rateValue: string;
    public myParamUI_USD: any;
    public myParamUI_EUR: any;
    public myParamUI_BRL: any;

    //interval: NodeJS.Timer;

   

    // api/SampleData/WeatherForecasts     @Inject('BASE_URL') baseUrl: string
    
    constructor(http: HttpClient) {

      

        http.get('http://localhost:49802/api/cotizacion/dolar').subscribe(data => {
            this.forecasts = data;
            this.foreValue = JSON.stringify(this.forecasts);

            this.myParamUI_USD = JSON.parse(this.foreValue).result;

        });

        http.get('http://localhost:49802/api/cotizacion/euro').subscribe(data => {
            this.forecasts = data;
            this.foreValue = JSON.stringify(this.forecasts);

            this.myParamUI_EUR = JSON.parse(this.foreValue).result;

        });

        http.get('http://localhost:49802/api/cotizacion/real').subscribe(data => {
            this.forecasts = data;
            this.foreValue = JSON.stringify(this.forecasts);

            this.myParamUI_BRL = JSON.parse(this.foreValue).result;

        });

    }




  

}

