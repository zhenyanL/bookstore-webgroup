import { Injectable } from '@angular/core';
import {COLORS} from '../../assets/colors';
import {environment} from '../../environments/environment';

declare var io: any;
declare var ace: any;

@Injectable()
export class CollaborationService {


  socket: any;
  clientsInfo: Object = {};
  clientNum: number = 0;

  constructor() { }

  init(editor: any, sessionId: any): void {
    // this.socket = io('http://localhost:5000',{query: 'sessionId='+ sessionId});
    //https://testgrouppro.herokuapp.com/
    // this.socket = io(window.location.hostname,{query: 'sessionId='+ sessionId});
    // this.socket = io('https://testgrouppro.herokuapp.com', {query: 'sessionId=' + sessionId});
    this.socket = io(environment.baseUrl, {query: 'sessionId=' + sessionId});
    this.socket.on('message', (message) => {
      console.log('second handshake from server');
    });

    this.socket.on('change', (delta: string) => {
      console.log('collaboration: editor changes by ' + delta);
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    });

    this.socket.on('cursorMove', (cursor) => {
      console.log('cursor move: ' + cursor);
      let session = editor.getSession();
      cursor = JSON.parse(cursor);
      let x = cursor['row'];
      let y = cursor['column'];
      let changeClientId = cursor['socketId'];
      console.log(x + ' ' + y + ' ' + changeClientId);

      if (changeClientId in this.clientsInfo) {
        session.removeMarker(this.clientsInfo[changeClientId]['marker']);
      } else {
        this.clientsInfo[changeClientId] = {};

        let css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = '.editor_cursor_' + changeClientId
          + ' { position:absolute; background:' + COLORS[this.clientNum] + ';'
          + ' z-index: 100; width:3px !important; }';

        document.body.appendChild(css);
        this.clientNum++;
      }

      let Range = ace.require('ace/range').Range;
      let newMarker = session.addMarker(new Range(x, y, x, y + 1), 'editor_cursor_' + changeClientId, true);
      this.clientsInfo[changeClientId]['marker'] = newMarker;
    });

  }

  change(delta: string): void {
    this.socket.emit('change', delta);
  }

  cursorMove(cursor : string): void {
    this.socket.emit('cursorMove', cursor);
  }

}
