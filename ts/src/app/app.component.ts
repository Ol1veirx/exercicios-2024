import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';

  isShowMore = false;

  toggleShowMore() {
    this.isShowMore = !this.isShowMore;
  }

  showCreateForm: boolean = false;

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
  }
}
