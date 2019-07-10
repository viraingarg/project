import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  sliderValue = "20";

  public myClickFunction = event => {
    this.sliderValue = "10";
    console.log(this.sliderValue);
  };
}
