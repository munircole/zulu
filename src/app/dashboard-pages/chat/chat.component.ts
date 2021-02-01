import { Component } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import { MyAdapter } from './adapter/my-adapter';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  title = 'app';
  userId = 999;

  public adapter: ChatAdapter = new MyAdapter();
}