import { Component,EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{
  @Output()
  showSetting: false;

  ngOnInit() {
  }

  display(show) {
    this.showSetting = show;
}


}
