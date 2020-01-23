import { Component } from '@angular/core';
@Component({
    selector : 'app-mobile',
    templateUrl : './mobile.component.html',
    styleUrls : ['./mobile.component.css']
})
export class MobileComponent{
    firstName : string = "Assimilate";
    lastName : string = "Technology";
    show : boolean = false;
    toggleSwitch() : boolean {
        console.log(this.show);
        return this.show = !this.show;
    }
    buttonClicked() {
        console.log("Button is clicked");
    }
    employees : any [];
    constructor() {
        this.employees = [
            {id:101, name:"amol", gender: "male"},
            {id:102, name:"suraj", gender: "male"},
            {id:103, name:"ajay", gender: "male"},
            {id:104, name:"amay", gender: "male"},
        ]}
    name1 : string = "Assimilate"
    name2 : string = "Technology"
    bclass : "boldClass";
    isBold : boolean = true;
    isItalic = true;
    addClasses (){
         let classes = {
             boldClass: this.isBold,
             italicClass: this.isItalic
         }
         return classes;
     }

}