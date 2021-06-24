import { Component, OnInit } from '@angular/core';
import {ResultSharingService} from '../../../shared/services/result-sharing.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  result:any;
  authorResult:any[];
  sourceResult:any[];
  otherResults:any[];
  authorpage = 1;
  authorpageSize = 4;
  sourcepage = 1;
  sourcepageSize = 4;
  otherpage = 1;
  otherpageSize = 2;
  authorCount:number
  sourceCount:number;
  otherCount:number;
  text: String;
  closeResult = '';
  constructor(private resultService: ResultSharingService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.result=this.resultService.getResult();
    this.authorResult=this.result.author_rank.result;
    this.sourceResult = this.result.source_rank.result;
    this.authorCount=this.authorResult.length;
    this.sourceCount=this.sourceResult.length;
    this.otherResults=this.result.result;
    this.otherCount=this.otherResults.length;
    console.log(this.result);
  }

  open(content: any, values: any) {
    this.text=values.text;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.setBookId=this.bookId;
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
