import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    ResultsComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WhatsOnModule { }
