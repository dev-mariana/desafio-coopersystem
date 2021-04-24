import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepositoryService } from '../services/repository.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  repository: Repository[] = [];
  panelOpenState = false;
  myControl = new FormControl();
  value: string;

  constructor(private repositoryService: RepositoryService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getRepositorys('dev-mariana');
  }

  onKey(event: any) { 
    this.value = event.target.value;
    // console.log(this.value);
  }

  getRepositorys(username: string) {
    this.repositoryService.getUserRepositories(username).subscribe((repository: Repository[]) => {
      this.repository = repository;
      console.log(repository);
    })
  }

  openDialog(dialog) {
    const dialogRef = this.dialog.open(dialog);
    dialogRef.afterClosed();
  }
}
