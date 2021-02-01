import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {


  @Output()
  hideSetting: EventEmitter<any> = new EventEmitter<any>();


  cameras = [];         // array of cameras
  microphones = [];     // array of microphones
  speakers = [];        // array of speakers
  selectedCameraId;     // selected cameras id
  selectedMicrophoneId; // selected microphone id
  selectedSpeakerId;    // selected speaker id

  constructor() {}

  ngOnInit() {
  }

  closeSetting = () => {
    this.hideSetting.emit(false);
  }

  

}
