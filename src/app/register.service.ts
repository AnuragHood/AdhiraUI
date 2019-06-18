import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  httpdata;
  constructor(private http: HttpClient) { }
  addUser(user: any) {
    console.log("inside service"+user.email)
    return this.http.post("http://localhost:8080/adhira/registration", user, { responseType: 'text' })
  }
  login(login: any) {
    console.log("inside service" + login.email)
    return this.http.post("http://localhost:8080/adhira/login", login, { responseType: 'text' })
  }
 
}
