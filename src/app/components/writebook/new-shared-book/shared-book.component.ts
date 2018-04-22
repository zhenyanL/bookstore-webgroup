import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedBookService} from '../../../services/shared-book.service';

@Component({
  selector: 'app-shared-book',
  templateUrl: './shared-book.component.html',
  styleUrls: ['./shared-book.component.css']
})
export class SharedBookComponent implements OnInit {

  @ViewChild('newPageForm') newPageForm: NgForm;

  errFlag: boolean;
  error = 'wrong!';
  alert = 'alert!';

  constructor(private sharedBookService: SharedBookService, private router: Router) { }

  ngOnInit() {
  }


  createPage() {
    const name = this.newPageForm.value.bookName;
    if(name === '') {
      this.errFlag = true;
    } else {
      // const name = this.newPageForm.value.bookName;
      this.sharedBookService.createBook({name: name, content: ''}).subscribe(
        (page: any) => {
          this.router.navigate(['sharedBookList']);
        }
      );
    }

  }
}
