import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial';
  display = '';
  flag = 0;
  count = 0;
  disable = true;
  show = 'yes';
  color = 'pink';
  bgColor = 'purple';
  name = 'Peter';
  users = ['Peter', 'Sam', 'Bruce', 'John', 'Micheal'];
  usersDetails = [
    { name: 'Peter', email: 'peter@hotmail.com', phone: 1111, accounts: ['Facebook', 'Instagram', 'WhatsApp'] },
    { name: 'Sam', email: 'sam@hotmail.com', phone: 2222, accounts: ['Youtube', 'Instagram', 'Yahoo'] },
    { name: 'Bruce', email: 'bruce@hotmail.com', phone: 3333, accounts: ['WhatsApp', 'LinkedIn', 'Facebook'] },
    { name: 'John', email: 'john@hotmail.com', phone: 4444, accounts: ['Google', 'Teams', 'Youtube'] },
    { name: 'Micheal', email: 'micheal@hotmail.com', phone: 5555, accounts: ['Teams', 'OneDrive', 'Google'] },
    { name: 'Jack', email: 'jack@hotmail.com', phone: 6666, accounts: ['Google', 'Youtube', 'Facebook'] }
  ];
  userData: any = {};
  type: string = '';
  message: string = '';
  ALERTS: Alert[] = [
    {
      type: 'success',
      message: 'This is a success alert',
    },
    {
      type: 'info',
      message: 'This is an info alert',
    },
    {
      type: 'warning',
      message: 'This is a warning alert',
    },
    {
      type: 'danger',
      message: 'This is a danger alert',
    },
    {
      type: 'primary',
      message: 'This is a primary alert',
    },
    {
      type: 'secondary',
      message: 'This is a secondary alert',
    },
    {
      type: 'light',
      message: 'This is a light alert',
    },
    {
      type: 'dark',
      message: 'This is a dark alert',
    }
  ];
  alerts: Alert[] = [];
  tasks: any[] = [];

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  reset() {
    this.alerts = Array.from(this.ALERTS);
  }
  GetName() {
    alert("Hello world!");
  }
  PrintNumber(number: number) {
    alert("The number is " + number);
  }
  GetAny(any: any) {
    alert("The type of " + any + " is " + typeof (any));
  }
  GetData(val: string) {
    console.warn(val);
    this.display = val;
  }
  Counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
  changeColor() {
    if (this.flag == 0) {
      this.flag = 1;
      this.color = "lightblue";
      this.bgColor = "blue";
    }
    else {
      this.flag = 0;
      this.color = "pink";
      this.bgColor = "purple";
    }
  }
  GetFormData(data: NgForm) {
    console.warn(data);
    this.userData = data;
  }
  ToggleText() {
    this.disable = !this.disable;
  }
  AddTask(item: string) {
    this.tasks.push({ id: this.tasks.length, task: item });
    console.warn(this.tasks);
  }
  RemoveTask(id: number) {
    this.tasks = this.tasks.filter(item => item.id !== id);
  }
}
