import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatService} from "./shared/services/chat.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'client';
  textMessage!:string;
  messages$!:Observable<string[]>



  constructor(private chatService:ChatService) {

  }

  ngOnInit() {
    this.chatService.setUpSocketConnection();
    this.messages$=of(this.chatService.messages)

  }

  sendMessage(){
    this.chatService.sendMessage(this.textMessage)
  }

  ngOnDestroy() {
    this.chatService.disconnect();
  }


}
