
import {Component, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private modalService: BsModalService) {}
  modalRef?: BsModalRef;
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template,{class:'modal-xl'});
  }


  selectedCar:string;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

}
