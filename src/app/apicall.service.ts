import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httlpclient: HttpClient) {
    console.log('api service created');
  }

  getData() {
    return this.httlpclient.get('https://jsonplaceholder.typicode.com/posts')
  }
}
