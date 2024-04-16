import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';

   selectedLink: string = '';

  selectLink(link: string): void {
    this.selectedLink = link;
  } 

  isShowMore = false;

  toggleShowMore() {
    this.isShowMore = !this.isShowMore;
  }

  showCreateForm: boolean = false;

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
  }

  sendForm() {
    this.formSendSuccess = true;
  }

  formSendSuccess: boolean = false;

  createNewForm() {
    this.formSendSuccess = false;
  }

  isExpanded: boolean = false;

  expandComments() {
    this.isExpanded = true;
  }

  collapseComments() {
    this.isExpanded = false;
  }
}
