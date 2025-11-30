import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  user!: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUserDetails();
  }

}
