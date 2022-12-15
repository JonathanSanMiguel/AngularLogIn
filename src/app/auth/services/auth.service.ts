import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuthResponse } from '../interfaces/auth-interface'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL: string = "http://localhost:4000/gymkhana/auth"

  constructor(private http: HttpClient) { }

  //Metodo para hacer post al login
  Login(email: string, password: string) {

    const url = `${this.API_URL}/login`
    const reqBody = {email, password}

    return this.http.post<AuthResponse>(url, reqBody)
  }//Login




}
