import { Component } from '@angular/core';

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.scss'],
})
export class HelpsComponent {
  docs_link = 'https://docs.n8n.io/';
  course_link = 'https://www.youtube.com/watch?v=1MwSoB0gnM4';

  openDocs() {
    window.open(this.docs_link, '_blank');
  }

  openCourse() {
    window.open(this.course_link, '_blank');
  }
}
