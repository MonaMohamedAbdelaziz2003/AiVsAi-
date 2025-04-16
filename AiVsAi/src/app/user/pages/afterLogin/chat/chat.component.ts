import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  messages = [
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ];
  newMessage = '';
num=3;
  sendMessage() {
    if (this.newMessage.trim()) {
      // Add user's message
      this.messages.push({ sender: 'user', text: this.newMessage });

      // Clear input
      this.newMessage = '';

      // Simulate bot response after a delay
      setTimeout(() => {
        this.messages.push({ sender: 'bot', text: `You said: ${this.messages[this.messages.length - 2].text}` });
      }, 1000);
    }
  }

  change3() {
this.num=3
  }
  change2() {
this.num=2
  }
  change1() {
    this.num=1

  }
}
