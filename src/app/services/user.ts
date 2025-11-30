import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/user.data';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})

export class UserService {
constructor() { }

  getUserDetails(): User {
    return USER_DATA;
  }

}
