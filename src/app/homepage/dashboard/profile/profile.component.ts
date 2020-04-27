import { Component, OnInit } from '@angular/core';
import { ProfileinfoService } from 'src/app/shared/services/profileinfo.service';
import { profileInfo } from 'src/app/shared/models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public data: profileInfo;
  constructor(private profileInfoService: ProfileinfoService) {}

  ngOnInit(): void {
    this.getProfileInfo();
  }

  public getProfileInfo(): void {
    this.profileInfoService.getProfileInfo().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
