import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss'
})
export class TermsComponent {
  constructor(private http:HttpClient) {
  }
  ngOnInit() {
    this.items = [{ label: 'Legal' }, { label: 'Terms' }];
    this.home = { icon: 'pi pi-home', routerLink: '/legal' };
    this.getData()
  }
  currentPage='Terms'

  getData(){
    this.http.get(this.apiUrl+'/legal/filter-by-category?category='+this.currentPage).subscribe((res:any)=>{
        this.legalBlocks=res;
        console.log(this.legalBlocks)
      },
      (error)=>{
        console.log(error)
      })
  }
  apiUrl=environment.apiUrl;
  legalBlocks=[];
  items:any =[];
  home: any =[];
}
