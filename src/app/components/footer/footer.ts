import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})

export class Footer {

  user!: User

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUserDetails();
  }

}
