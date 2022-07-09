import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location.interface';
import {MatDialog} from '@angular/material/dialog';
import { CharactersListComponent } from './characters-list/characters-list.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  @Input() location!: Location;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  characters(){
    const dialogRef = this.dialog.open(CharactersListComponent, {
      data: {charactersList: this.location.residents, typeName: this.location.name},
    });
  }

}
