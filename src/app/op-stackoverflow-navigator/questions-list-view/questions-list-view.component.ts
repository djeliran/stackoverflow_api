import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../entities/question';

@Component({
  selector: 'questions-list-view',
  templateUrl: './questions-list-view.component.html',
  styleUrls: ['./questions-list-view.component.css']
})
export class QuestionsListViewComponent implements OnInit {

  @Input()
  questions:Question[];

  @Output()
  onQuestionSelected = new EventEmitter<Question>();

  constructor() { }

  ngOnInit() {
  }

}
