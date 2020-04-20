import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
 
   messageArray = [];

   add(message:string){
     debugger;
     if(this.messageArray.indexOf(message) == -1){
      this.messageArray.push(message);
     }
    
   }
   clear(){
     debugger;
    this.messageArray = [];
   }

}
