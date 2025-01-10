import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  SendtoChild: string = 'I am Parent'
  childResponse: any
  reciveRequest(data: any) {
    console.log('event Recieved')
    this.childResponse = data
  }

}
