import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatService} from "./shared/services/chat.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'client';
  receivedMessage$!:Observable<string>



  constructor(private chatService:ChatService) {

  }

  ngOnInit() {
    this.chatService.setUpSocketConnection();
  }

  ngOnDestroy() {
    this.chatService.disconnect();
  }


}
