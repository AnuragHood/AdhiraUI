import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  httpdata;
  object: Object = {};
  constructor(private http: HttpClient) { }
  addUser(user: any) {
    console.log('inside service'+ user.email);
    return this.http.post('http://localhost:8080/adhira/registration', user, { responseType: 'text' });
  }
  login(login: any) {
    console.log('inside service' + login.email);
    return this.http.post('http://localhost:8080/adhira/login', login, { responseType: 'text' });
  }
  verify(inputValue: any, otp: any) {
    let params = new HttpParams();
    params = params.append('otp', otp);
    params = params.append('inputValue', inputValue);
    return this.http.get('http://localhost:8080/adhira/confirm-otp', {params, responseType: 'text'});
  }
  inquire(inquire: any) {
    let params = new HttpParams();
    params = params.append('inquire', inquire);
    return this.http.get('http://localhost:8080/adhira/inquire', {params, responseType: 'text'});
  }


}
