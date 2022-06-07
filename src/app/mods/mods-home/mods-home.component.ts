import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Hey how are you?', content: 'asdasd asd asd as da sd asd '},
    { title: 'Who are you?', content: 'asdasd asd asd as da sd asd '},
    { title: 'Whats up dude?', content: 'asdasd asd asd as da sd asd '},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
