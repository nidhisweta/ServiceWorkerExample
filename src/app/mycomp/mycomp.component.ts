import { R3TargetBinder } from '@angular/compiler';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, getModuleFactory, OnInit } from '@angular/core';
import {rgb} from 'd3';
@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {
  result:number=0;
  a:Array<any>=[[1,2],[3,4],[5,6]];
  aflat:Array<any>=[];
  color:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  funcA(){
    this.result =this.sum(7)(8)(10);
    this.getflat();

  }
  sum(a:number){

	  return (b:number)=>{
                      return (c:number)=>{
                                      return a+b+c;
                                    }
                      
                      }         
          
}
getflat(){



}
getcolour(n:number){
return rgb(255,n,0);
}
}
