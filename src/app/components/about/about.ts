import { Component } from '@angular/core';
import { UserService } from '../../services/user';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About {
  user!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUserDetails();
  }
}
