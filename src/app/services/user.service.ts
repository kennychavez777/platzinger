import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];

  constructor() {
    let user1: User = {
      nick: 'Kenny',
      subnick: 'Chavez',
      age: 21,
      email: 'kennychaveez@gmail.com',
      friend: true,
      uid: 1
    };
    
    let user2: User = {
      nick: 'Kimberlyn',
      subnick: 'Hernandez',
      age: 21,
      email: 'kimhernandez@gmail.com',
      friend: true,
      uid: 2
    };

    let user3: User = {
      nick: 'Another',
      subnick: 'User 1',
      age: 21,
      email: 'auser1@gmail.com',
      friend: true,
      uid: 3
    };

    let user4: User = {
      nick: 'Another',
      subnick: 'User 2',
      age: 21,
      email: 'auser2@gmail.com',
      friend: false,
      uid: 4
    };

    this.friends = [user1, user2, user3, user4];
  }

  getFriends(){
    return this.friends;
  }
}
