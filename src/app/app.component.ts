import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial';
  display = '';
  count = 0;
  disable = true;
  show = 'yes';
  color = 'yellow';
  name = 'Peter';
  GetName(){
    alert("Hello world!");
  }
  PrintNumber(number: number){
    alert("The number is "+ number);
  }
  GetAny(any: any){
    alert("The type of "+any+" is "+typeof(any));
  }
  GetData(val:string){
    console.warn(val);
    this.display = val;
  }
  Counter(type:string){
    type==='add'?this.count++:this.count--;
  }
}
