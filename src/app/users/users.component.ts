import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  searchText;
  constructor(private userService: ProfileService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsersFromApi()
        .subscribe(users => {
           this.users = users
           console.log("users data",this.users);
        });
}

}
