import {Component, OnInit , HostListener} from '@angular/core';
import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination, SwiperOptions,
} from 'swiper';

SwiperCore.use([
  Navigation,
  Pagination,
  Autoplay
]);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{
  ngOnInit() {

  }
  showDiv = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.pageYOffset > 0) {
      this.showDiv = true;
    } else {
      this.showDiv = false;
    }
  }

   scrollToTop(){
     window.scrollTo(0,0);
    this.showDiv=false;
    this.showStripValue=false
  }
  showStripValue=false

  showStrip(){
    this.showStripValue=!this.showStripValue;
  }

  mainBannerSwiper: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl:'.next-element',
      prevEl:'.prev-element'
    },
    pagination: { clickable: true, dynamicBullets: true,type:'progressbar' },
    mousewheel: true,
    breakpoints: {
      400: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  };

  mainBannerSwiperLower: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 1,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    navigation:true,
    pagination: { clickable: true, dynamicBullets: true,type:'progressbar' },
    mousewheel: true,
    breakpoints: {
      400: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  };
}
