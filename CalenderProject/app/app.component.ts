import { Component, View } from "angular2/core";
import { Months } from "./months.component";

@Component({
    selector: "app",
})

@View({
        template: `<div id="box"><h1 id="title"> Calender </h1>
                    <months></months></div>`,
        directives: [Months]
})

export class AppComponent {
    
}