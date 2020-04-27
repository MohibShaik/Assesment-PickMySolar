import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Pick My Solar - Assesment';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry
      .addSvgIcon(
        `loginUser`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/images/svg/user-icon.svg'
        )
      )
      .addSvgIcon(
        `password`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/images/svg/password.svg'
        )
      )
      .addSvgIcon(
        `home`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/images/svg/home-icon.svg'
        )
      );
  }
}
