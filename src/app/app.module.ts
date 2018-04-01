import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {GitService} from './git.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
//Defining Routes
// const routes:Routes=[
// {path:"repos",component:GitComponent}
// ]


import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { GitDetailsComponent } from './git-details/git-details.component';
import { GitFormComponent } from './git-form/git-form.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { CapitalizePipe } from './capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    GitDetailsComponent,
    GitFormComponent,
    StrikethroughDirective,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
