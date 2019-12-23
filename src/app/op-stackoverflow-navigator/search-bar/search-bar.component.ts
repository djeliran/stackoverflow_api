import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchButtonText = 'Search';

  @Output()
  onSearch =  new EventEmitter<string>();

  searchText:string = '';




  constructor() { }

  ngOnInit() {
  }


}
