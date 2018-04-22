import { Component, OnInit } from '@angular/core';
import {SharedBookService} from '../../../services/shared-book.service';
import {SharedService} from '../../../services/shared.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shared-book-list',
  templateUrl: './shared-book-list.component.html',
  styleUrls: ['./shared-book-list.component.css']
})
export class SharedBookListComponent implements OnInit {

  sharedBooks: any[];

  constructor(private sharedBookService: SharedBookService, private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    console.log('???????????');
    this.sharedBookService.findAllSharedBook().subscribe(
      (data: any[]) => {
        this.sharedBooks = data;
      }
    );
  }


  clickSharedBook(sharedBookId){

    const user = this.sharedService.user;
    if (user === undefined) {
      alert('please login first');
    } else if(user.role !== 'WRITER'){
      alert('you are not a writer');
    } else{
      this.router.navigate([ 'user', user._id, 'sharedBook', sharedBookId ]);
    }
    // if (user.role !== 'WRITER' ) {
    //   alert('you are not a writer');
    // } else{
    //   this.router.navigate([ 'user', user._id, 'sharedBook', sharedBookId ]);
    // }
  }
}
