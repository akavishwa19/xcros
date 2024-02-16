
import { Component, HostListener } from '@angular/core';
import {
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor(private offcanvasService: NgbOffcanvas) {}
  closeResult!: string;
  open(content: any) {
    console.log('opens?');
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
        (result) => {
          console.log('hiii');
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          console.log('hello');
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  open2(content: any) {
    console.log('hi')
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  open3(content: any) {
    console.log('hi')
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  open4(content: any) {
    console.log('hi')
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  dismissible = true;
  defaultAlerts: any = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`,
    },
  ];
  alerts = this.defaultAlerts;

  allocateSpace(){
    console.log('worked');
    const firstSection:HTMLElement=document.querySelector('.firstSection');
    firstSection.style.padding='80px 0';
  }
  isHidden = false;
  lastScrollTop = 0;
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      // Scroll down
      this.isHidden = true;
    } else {
      // Scroll up
      this.isHidden = false;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }

}
