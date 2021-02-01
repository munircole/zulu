import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false // initial value
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }


}
