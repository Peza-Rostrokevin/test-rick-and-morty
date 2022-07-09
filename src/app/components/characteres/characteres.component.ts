import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Character } from 'src/app/models/character.interface';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.component.html',
  styleUrls: ['./characteres.component.scss']
})
export class CharacteresComponent implements OnInit {
  @Input() character!: Character;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  detail(){
    const dialogRef = this.dialog.open(DetailComponent, {
      data: {character: this.character},
    });
  }

}

