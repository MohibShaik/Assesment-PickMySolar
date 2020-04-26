import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public open: boolean;
  public user: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.open = true;
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  public signOut(): void {
    this.router.navigate(['']).then((res) => {
      window.location.reload(true);
    });
  }
}
