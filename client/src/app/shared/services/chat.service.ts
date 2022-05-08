import { Injectable } from '@angular/core';
import {io} from 'socket.io-client'

import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket:any;
  messages:string[]=[]

  constructor() {
  }

  setUpSocketConnection(){
    this.socket=io(environment.base_url)
    this.socket.emit('static message','This is sent from Angular service')
    this.socket.on('broadcast',(data:string)=>{
      console.log(data)
      this.messages.push(data);
    })
  }

  sendMessage(msg:string){
    this.socket.emit('new message',msg)
  }

  disconnect(){
    if(this.socket){
      this.socket.disconnect();
    }
  }










}
