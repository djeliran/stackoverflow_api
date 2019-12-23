import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OpStackOverFlowNavigatorComponent} from './op-stackoverflow-navigator/op-stack-over-flow-navigator.component';
import { SearchBarComponent } from './op-stackoverflow-navigator/search-bar/search-bar.component';
import { QuestionsListViewComponent } from './op-stackoverflow-navigator/questions-list-view/questions-list-view.component';
import { QuestionPageViewComponent } from './op-stackoverflow-navigator/question-page-view/question-page-view.component';
import {FormsModule} from '@angular/forms';
import { QuestionViewComponent } from './op-stackoverflow-navigator/questions-list-view/question-view/question-view.component';
import {StackOverFlowService} from './op-stackoverflow-navigator/stack-over-flow.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OpStackOverFlowNavigatorComponent,
    SearchBarComponent,
    QuestionsListViewComponent,
    QuestionPageViewComponent,
    QuestionViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StackOverFlowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
