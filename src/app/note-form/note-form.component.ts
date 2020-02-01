import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {Router} from '@angular/router';
import {NoteService} from 'src/app/shared_service/note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  private note:Note;

  constructor(private _noteService:NoteService, private _router:Router) { }

  ngOnInit() {
    this.note=this._noteService.getter();
  }

  processForm(){
    if(this.note.id==undefined){
      this._noteService.createNote(this.note).subscribe((note)=>{
        console.log(note);
        this._router.navigate(['/']);
      },(error)=>{
        console.log(error);
     })
    }else{
      this._noteService.updateNote(this.note).subscribe((note)=>{
        console.log(note);
        this._router.navigate(['/']);
      },(error)=>{
        console.log(error);
     })
    }
  }

}
