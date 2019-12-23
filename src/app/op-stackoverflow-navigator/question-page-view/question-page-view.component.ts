import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../entities/question';

@Component({
  selector: 'question-page-view',
  templateUrl: './question-page-view.component.html',
  styleUrls: ['./question-page-view.component.css']
})
export class QuestionPageViewComponent implements OnInit {

  @Input()
  question:Question;

  constructor() { }

  ngOnInit() {
  }

}
