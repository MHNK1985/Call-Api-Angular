import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Call-Api-Angular';\
  appName = "Get Btc Price and Convert";

  rialValue: number = 0;
  rialValueSep: string = "";
  usdValue: number = 0;
  usdValueInput: string = "";

  chartName: string = "";
  updated:string = "";
  RequestResult:string = "";

 
  fetchPrice() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        this.RequestResult = data;
        console.log(this.RequestResult);
        try {
          this.updated = data.time.updated;
          this.chartName = data.chartName;
          let usdItem = data.bpi.USD;
          this.usdValue = usdItem.rate;          
          this.rialValue = (parseInt(this.usdValueInput) | 0) * parseInt(this.usdValue.toString().replace(",", ""));
          this.rialValueSep = this.rialValue.toLocaleString("en-US");

          
        } catch (err) {
          //this.RequestResult = err;
          console.log(err);
        }
      })
      .catch((err) => {
        console.log("ssss");
        console.log(err);
      });
  }


}