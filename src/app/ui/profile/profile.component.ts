import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  message: any;


  constructor(private message_service: MessageService) {}

  ngOnInit() {
    this.message_service.currentMessage.subscribe(message => this.message = message);
  }

}
