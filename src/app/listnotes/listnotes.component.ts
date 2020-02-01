import { Component, OnInit } from '@angular/core';
//import {NoteService} from '../shared_service/note.service';
//moze se i direktno ovako path napisati naprimjer za NoteService, pogledaj ispod
import {NoteService} from 'src/app/shared_service/note.service';
import {Note} from 'src/app/note';
import {Router} from '@angular/router';


@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.css']
})
export class ListnotesComponent implements OnInit {

  private notes:Note[];

  constructor(private _noteService:NoteService, private _router:Router) { }

  ngOnInit() {
    this._noteService.getNotes().subscribe((notes)=>{
      console.log(notes);
      this.notes=notes;
    },(error)=>{
      console.log(error);
    })
  }

  deleteNote(note:any){
    this._noteService.deleteNote(note.id).subscribe((data)=>{
      //ovdje micem izbrisanu biljesku iz liste biljeski
      this.notes.splice(this.notes.indexOf(note),1);
    },(error)=>{
      console.log(error);
    });

  }

  updateNote(note:any){
    this._noteService.setter(note);
    this._router.navigate(['/op']);

  }

  newNote(){
    let note = new Note();

    this._noteService.setter(note);
    this._router.navigate(['/op']);
  }

}
