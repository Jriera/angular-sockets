import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ChatService} from "./shared/services/chat.service";



@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FormsModule

    ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
