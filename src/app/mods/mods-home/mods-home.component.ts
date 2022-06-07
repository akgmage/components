import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Hey?', content: 'asdasd asd asd as da sd asd '},
    { title: 'Yo!', content: 'asdasd asd asd as da sd asd '},
    { title: 'Whats up?', content: 'asdasd asd asd as da sd asd '},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
