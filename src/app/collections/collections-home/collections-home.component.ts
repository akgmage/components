import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'asdasd', age: 25, job: 'Noob1', employed: true },
    { name: 'asddfg', age: 24, job: 'Noob2', employed: false },
    { name: 'fghjfgh', age: 23, job: 'Noob3', employed:false },
  ];

  headers = [
    { key: 'employed', label: 'Has a job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
