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
  lengthFlag: boolean;
  error = 'Wrong!';
  alert = 'name cannot be empty!';
  lengthAlert = 'description cannot exceeds 20 words'

  constructor(private sharedBookService: SharedBookService, private router: Router) { }

  ngOnInit() {
  }


  createPage() {
    const name = this.newPageForm.value.bookName;
    const description = this.newPageForm.value.bookDescription;
    if(name === '') {
      this.errFlag = true;
    } else if(description.length >= 20){
      this.lengthFlag = true;
    } else {
      // const name = this.newPageForm.value.bookName;
      const description = this.newPageForm.value.bookDescription;
      const imageURL = this.newPageForm.value.imageURL;
      console.log(description);
      console.log(imageURL);
      this.sharedBookService.createBook({name: name, content: '', description: description, imageURL: imageURL}).subscribe(
        (page: any) => {
          this.router.navigate(['sharedBookList']);
        }
      );
    }

  }
}
