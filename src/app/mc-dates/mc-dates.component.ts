import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'mc-dates',
  templateUrl: './mc-dates.component.html',
  styleUrls: ['./mc-dates.component.scss']
})

export class McDatesComponent implements OnInit {
  [x: string]: object;
  $ctrl : object = {
    date1: null,
    date2: null,
    mcChange() {
      let self = this;
      // if (self.date1 === null) alert(`Конечная дата: ${moment(self.date2).format('YYYY-MM-DD')}`);
      // else if (self.date2 === null) alert(`Начальная дата: ${moment(self.date1).format('YYYY-MM-DD')}`);
      // else alert(`Начальная дата: ${moment(self.date1).format('YYYY-MM-DD')}\nКонечная дата: ${moment(self.date2).format('YYYY-MM-DD')}`);
    }
  };
  constructor() { 
  }
  
  onSelect(event){
    console.log(event);
    this.selectedDate= event;
  }

  ngOnInit() {
  }

}
