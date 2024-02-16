import {Component, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import { MessageService } from 'primeng/api';
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
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss',
  providers: [MessageService]
})
export class ComingSoonComponent {
  constructor(private modalService: BsModalService,private messageService: MessageService) {
  }
  modalRef?: BsModalRef;
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Submitted Successfully', detail: 'We Will Reach Out to You' });
  }

  banner: SwiperOptions = {
    slidesPerView: 1,
    effect:'cube',
    spaceBetween: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl:'.next-el',
      prevEl:'.prev-el'
    },
    pagination: { clickable: true, dynamicBullets: true },
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
