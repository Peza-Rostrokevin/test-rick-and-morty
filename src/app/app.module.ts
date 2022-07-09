import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { CharacteresComponent } from './components/characteres/characteres.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { DetailComponent } from './components/characteres/detail/detail.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CharactersListComponent } from './components/locations/characters-list/characters-list.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.store';

@NgModule({
  declarations: [
    AppComponent,
    CharacteresComponent,
    LocationsComponent,
    EpisodesComponent,
    DetailComponent,
    CharactersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatDialogModule,
    StoreModule.forRoot(ROOT_REDUCERS)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
