import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepositoryService } from '../services/repository.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  filteredUser: Repository[] = [];
  panelOpenState = false;
  search = new FormControl();
  show: boolean = false;

  constructor(private repositoryService: RepositoryService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getRepositories() {
    let username = this.search.value;

    if(!username) {
      this.show = false;
      return console.error("An error occurred!");
    }

    else {
      this.show = true;
      this.repositoryService.getUserRepositories(username).subscribe((user) => {
        this.filteredUser = user;
        // console.log(this.filteredUser);
      })
    }
  }

  openDialog(dialog) {
    const dialogRef = this.dialog.open(dialog);
    dialogRef.afterClosed();
  }
}
