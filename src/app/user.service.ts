import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {
 role: string = 'ADMIN'
  constructor() { }

  getRole(){
    return this.role
  }
  login(): Observable<boolean> {
    return of(false).pipe(delay(3000));
  }
}
