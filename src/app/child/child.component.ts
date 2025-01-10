import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() ParentRequest: string = ''
  @Output() ChildResponse = new EventEmitter<string>();

  sendResponsetoParent() {
    console.log('check')
    this.ChildResponse.emit('Hello From Your CHILD.')
  }


}
