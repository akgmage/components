import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private el: ElementRef) { 
    console.log(this.el.nativeElement);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    // remove is method that is built into all html elements, 
    // which cause the element to delete itself and nmo longer be displayed inside the dom
    this.el.nativeElement.remove(); // Remove it from dom
  }

}
