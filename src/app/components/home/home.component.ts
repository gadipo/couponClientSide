import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import * as angular from "angular";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoPlaying:number;

  constructor(private router:Router, private dialog:MatDialog) {
      this.router = router;
      this.dialog = dialog;
      this.videoPlaying = 1;
  }
  ngOnInit() {
  }
  goToLogin() {
      this.router.navigate(['login']);
  }
  openLoginDialog() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.maxHeight = '800px';
      dialogConfig.maxWidth = '600px';
      dialogConfig.restoreFocus = true;
      dialogConfig.autoFocus = true;
      const dialogRef = this.dialog.open(LoginComponent, dialogConfig);
  }
  nextVideo() {
      if (this.videoPlaying < 3)
          this.videoPlaying++;
      else
          this.videoPlaying = 1;
  }
}


