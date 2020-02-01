import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListnotesComponent } from './listnotes/listnotes.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteService } from 'src/app/shared_service/note.service';
import {HttpModule} from '@angular/http';
import { Note } from './note';
import {FormsModule} from '@angular/forms';

//ovdje sam dodao konstantu koaj predstavlja rute od apija
const appRoutes:Routes=[
  {path: '', component:ListnotesComponent},
  {path: 'op', component:NoteFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListnotesComponent,
    NoteFormComponent
  ],
  //ovdje se importa constanta ruta od apija
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
