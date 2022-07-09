import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Episode } from 'src/app/models/espisode.interface';
import { CharactersListComponent } from '../locations/characters-list/characters-list.component';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  @Input() episode!: Episode;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  characters(){
    const dialogRef = this.dialog.open(CharactersListComponent, {
      data: {charactersList: this.episode.characters, typeName: 'episode ' + this.episode.name},
    });
  }

}
