import { Component, OnInit } from '@angular/core';
import 'materialize-css/dist/js/materialize.min.js';
declare const M;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-quickstart';

  ngOnInit() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }

}
