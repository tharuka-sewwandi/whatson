import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { DashboardServiceService } from '../../../shared/services/dashboard-service.service'


@Component({
  selector: 'app-dashboard-whats-on',
  templateUrl: './dashboard-whats-on.component.html',
  styleUrls: ['./dashboard-whats-on.component.scss']
})
export class DashboardWhatsOnComponent implements OnInit {

  //public formDashboard: FormGroup
  possitiveWors: String;
  negativeWords: String;
  authors: String;
  labelOne: String;
  labelTwo: String;
  labelThree: String;
  startDate: any;
  endDate: any
  data: any;


  constructor(
    private dashboarService: DashboardServiceService
  ) { }

  ngOnInit(): void {
    // this.formDashboard = this.formBuilder.group({
    //   possitiveWords: ['kay'],
    //   negativeWords: [''],
    //   authors: [''],
    //   labelOne: [''],
    //   labelTwo: [''],
    //   labelThree: [''],
    //   startDate: [''],
    //   endDate: [''],
    // });
  }

  public apiSearch() {
    console.log(this.possitiveWors);
    console.log(this.endDate);
    this.data = {
      "pos_words": this.possitiveWors,
      "neg_words": this.negativeWords,
      "author": this.authors,
      "labels": [this.labelOne, this.labelTwo, this.labelThree],
      "dates": [this.startDate, this.endDate]
    };
    console.log(this.data);
    // this.dashboarService.searchService(this.data).subscribe((res) => {
    //   console.log(res);
    // });
  }


}
