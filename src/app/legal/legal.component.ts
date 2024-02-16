import {Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent implements OnInit{
  constructor(private fb:FormBuilder,private http:HttpClient) {

  }
  ngOnInit() {
    this.items = [
      {
        label: 'WEBSITE T’S & C’S ',
        icon: 'pi pi-fw pi-globe',
        expanded:true,
        items: [
          {
            label: 'Terms of Use',
            icon: 'pi pi-fw pi-plus',
            expanded:true,
            items: [
              {
                label: 'Notices ',
                icon: 'pi pi-chevron-right',
                routerLink:'/legal/notices',
              },
              {
                label: 'Terms  ',
                icon: 'pi pi-chevron-right',
                routerLink:'/legal/terms'
              },
              {
                label: 'Privacy ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Cookies ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Copyright ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'User Info  ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Accessibility ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Disclaimer ',
                icon: 'pi pi-chevron-right',
              },
            ]
          },
        ]
      },
      {
        label: 'USER T’S & C’S ',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'General T’s & C’s     ',
            icon: 'pi pi-plus',
            items: [
              {
                label: 'User ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Business ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Buying & Selling  ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'More ',
                icon: 'pi pi-fw pi-plus',
                items: [
                  {
                    label: 'Conduct ',
                    icon: 'pi pi-chevron-right',
                  },
                ]
              },
            ]
          },
        ]
      },
      {
        label: 'ADVERTISING T’S & C’S',
        icon: 'pi pi-fw pi-wallet',
        items: [
          {
            label: 'Banner ADs',
            icon: 'pi pi-plus',
            items: [
              {
                label: 'AD Policies ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'AD Creative Specs',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Self-Service Ads ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'AD Payment ',
                icon: 'pi pi-chevron-right',
              },
            ]
          },

        ]
      },
      {
        label: 'SERVICES T’S & C’S ',
        icon: 'pi pi-fw pi-server',
        items: [
          {
            label: 'Directory ',
            icon: 'pi pi-chevron-right',
          },
          {
            label: 'Marketplace  ',
            icon: 'pi pi-chevron-right',
          },
          {
            label: 'Community  ',
            icon: 'pi pi-plus',
            items: [
              {
                label: 'Respect ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Discrimination ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Discussion ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Identity ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Activity',
                icon: 'pi pi-chevron-right',
              }
            ]
          },
          {
            label: 'Others  ',
            icon: 'pi pi-plus',
            items: [
              {
                label: 'Deals & Coupons   ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Delivery  ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Jobs  ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Events  ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Webinar  ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Forum  ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'E-learning  ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Rfq  ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Contribute  ',
                icon: 'pi pi-chevron-right',
              },
            ]
          },
          {
            label: 'Human Resources   ',
            icon: 'pi pi-plus',
            items: [
              {
                label: 'Delivery Agents  ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Marketing Agents  ',
                icon: 'pi pi-chevron-right',
              },
              {
                label: 'Customer Care Agents  ',
                icon: 'pi pi-chevron-right',
              },
            ]
          },
          {
            label: 'Xzibit ',
            icon: 'pi pi-chevron-right',
          },
          {
            label: 'Government    ',
            icon: 'pi pi-chevron-right',
          },
          {
            label: 'X-Club ',
            icon: 'pi pi-chevron-right',
          },
        ]
      }
    ];
  }
  apiUrl=environment.apiUrl
  searchResult:any;
  items:any=[];
  searchForm:FormGroup=this.fb.group({
    searchTerm:['']
  })
  scrollToTop(){
    window.scrollTo(0,0);
  }
  convertToFalse(){
    if(this.searchForm.controls['searchTerm'].value==''){
      this.showSearchResult=false;
    }
  }
  showSearchResult=false

  submitSearchForm(){
    this.showSearchResult=true;
    console.log(this.searchForm.value);
    this.http.post(this.apiUrl+'/legal/search',this.searchForm.value).subscribe((res:any)=>{
      this.searchResult=res;
      console.log(this.searchResult);

    })
  }
}

