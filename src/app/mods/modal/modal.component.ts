import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter(); // Event that we are going to watch for on the parent component
  //Event that we are going to trigger

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

  onCloseClick() {
    this.close.emit(); // Reference the close event emitter and emit an event
  }

}
