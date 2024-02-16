import {Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.scss'
})
export class NoticesComponent implements OnInit{

  constructor(private http:HttpClient) {
  }
  ngOnInit() {
    this.items = [{ label: 'Legal' }, { label: 'Notices' }];
    this.home = { icon: 'pi pi-home', routerLink: '/legal' };
    this.getData()
  }
  currentPage='Notices'

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
