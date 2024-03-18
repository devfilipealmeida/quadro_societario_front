import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../../services/messages.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {
  constructor(public messagesService: MessagesService) {}

  ngOnInit(): void {}
}
