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


    //interval: NodeJS.Timer;



    // api/SampleData/WeatherForecasts     @Inject('BASE_URL') baseUrl: string

    constructor(http: HttpClient) {

        var url1 = 'http://localhost:49802/api/cotizacion/dolar';     // https://taecel.com/app/api/getBalance;



        http.get(url1).subscribe(data => {
            this.forecasts = data;
            this.foreValue = JSON.stringify(this.forecasts);

            this.myParamUI_USD = JSON.parse(this.foreValue).result;

        });





    }






}





export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
