import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.scss']
})
export class PrivatePageComponent {
  constructor(private apicall: ApicallService) { }
  data: any
  ngOnInit() {
    this.apicall.getData().subscribe(
      (next: any) => { this.data = next },
      (error: any) => { console.log(error) }
    )
  }
}
