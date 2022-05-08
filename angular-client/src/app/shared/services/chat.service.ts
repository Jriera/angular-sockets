import { Injectable } from '@angular/core';
import {io} from 'socket.io-client'
import {BehaviorSubject, map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket:any;

  constructor() {
  }

  setUpSocketConnection(){
    this.socket=io(environment.base_url)
    this.socket.emit('static message','This is sent from Angular service')
  }

  disconnect(){
    if(this.socket){
      this.socket.disconnect();
    }
  }










}
