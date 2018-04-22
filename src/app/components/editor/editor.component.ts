import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SharedBookService} from '../../services/shared-book.service';
import {CollaborationService} from '../../services/collaboration.service';

declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: any;
  sessionId: string;
  sharedBook: any;

  constructor(private socket: CollaborationService, private route: ActivatedRoute, private sharedBookService: SharedBookService) { }

  ngOnInit() {
    // this.editor = ace.editor('editor');
    // this.editor.setTheme('ace/theme/eclipse');
    // this.editor.getSession().setMode('ace/mode/java');

    this.route.params
      .subscribe(params => {
        this.sessionId = params['bid'];
        this.sharedBookService.findOneSharedBook(this.sessionId)
          .subscribe(
            (data: any) => {
              this.sharedBook = data;
              this.initEditor();
            }
          );
      });

    // this.editor = ace.edit('editor');
    // this.editor.setTheme('ace/theme/eclipse');
    // this.editor.session.setMode('ace/mode/java');
    // this.editor.$blockScrolling = Infinity;
    // this.socket.init(this.editor);
    //
    // this.editor.on('change', (e) => {
    //   console.log('editor changes: ' + JSON.stringify(e));
    //   if (this.editor.lastAppliedChange != e) {
    //     this.socket.change(JSON.stringify(e));
    //   }
    // });
    //
    // this.editor.getSession().getSelection().on("changeCursor", () => {
    //   let cursor = this.editor.getSession().getSelection().getCursor();
    //   console.log('cursor moves: ' + JSON.stringify(cursor));
    //   this.socket.cursorMove(JSON.stringify(cursor));
    // });

  }

  initEditor() {

    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/eclipse');
    this.editor.session.setMode('ace/mode/java');
    this.editor.$blockScrolling = Infinity;
    this.socket.init(this.editor, this.sessionId);

    // console.log("first shar:" +this.sharedBook);le.log("?????????????????????????????????");
    this.editor.setValue(this.sharedBook.content,1);

    this.editor.on('change', (e) => {

      console.log('editor changes: ' + JSON.stringify(e));
      if (this.editor.lastAppliedChange != e) {
        // var doc = this.editor.getSession().getDocument();

        var doc = this.editor.getValue();
        console.log('document: '+ doc);
        //save document into database
        //mongodb.~~~~~~
        console.log(this.sharedBook);
        console.log(this.sharedBook._id);
        console.log(this.sharedBook.name);
        var newBook = {_id: this.sharedBook._id, name: this.sharedBook.name, content: doc};
        console.log('client:');
        console.log(newBook);
        console.log('-------------');
//
        this.sharedBookService.updateSharedBook(this.sessionId, newBook)
          .subscribe(
            (data: any) => {
              console.log('here');
              this.socket.change(JSON.stringify(e));
            }
          );
        // this.socket.change(JSON.stringify(e));
//
      }

    });

    this.editor.getSession().getSelection().on('changeCursor', () => {
      let cursor = this.editor.getSession().getSelection().getCursor();
      console.log('cursor moves: ' + JSON.stringify(cursor));
      this.socket.cursorMove(JSON.stringify(cursor));
    });


  }

}
