import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit{
  constructor(private router:Router) {
  }
  @ViewChild('videoTag') videoTag: ElementRef;
  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(['/landing'])
    },10000)
  }
  routeToLanding(){
    this.router.navigate(['/landing'])
  }
}
