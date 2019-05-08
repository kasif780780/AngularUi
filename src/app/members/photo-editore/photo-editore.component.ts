import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/_models/photo';

@Component({
  selector: 'app-photo-editore',
  templateUrl: './photo-editore.component.html',
  styleUrls: ['./photo-editore.component.css']
})
export class PhotoEditoreComponent implements OnInit {
  
 @Input() photos: Photo[];
  constructor() { }

  ngOnInit() {
  }

}
