import { Component, OnInit } from '@angular/core';
import {StackOverFlowService} from './stack-over-flow.service';
import {TagRespones} from './entities/tagRespones';
import {Question} from './entities/question';

@Component({
  selector: 'op-stackoverflow-navigator',
  templateUrl: './op-stackoverflow-navigator.component.html',
  styleUrls: ['./op-stackoverflow-navigator.component.css']
})
export class OpStackOverFlowNavigatorComponent implements OnInit {

  title = 'OP Stackoverflow navigator';
  questions:Question[]
  selectedQuestion: Question;

  constructor(private stackOverFlowService:StackOverFlowService) { }

  ngOnInit() {
  }

  onTagChanged(tag:string){
    this.selectedQuestion = null;
    this.stackOverFlowService.getTag(tag) .subscribe((tagResponse: TagRespones) => {
      this.questions = tagResponse.items;
    });

  }

  onQuestionSelected(question:Question){
    this.selectedQuestion = question;
  }

}
