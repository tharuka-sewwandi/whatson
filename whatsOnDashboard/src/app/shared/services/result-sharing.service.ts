import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ResultSharingService {
  
result:any

  constructor() { }
  public setResult(res:any){
    this.result=res;
  }
  public setSample(){

  }
  public getSample(){}

  public getResult(){
    return this.result;
  }
}
