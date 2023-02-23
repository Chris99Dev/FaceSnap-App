import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Christopher',
        description: 'Mon meilleur ami depuis tout petit',
        imgUrl: 'https://www.chrisferreira.fr/img/Christopher_FerreiraSm.png',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      },
      {
        title: 'Stephane',
        description: 'Mon 2eme meilleur ami depuis tout petit',
        imgUrl: 'https://www.chrisferreira.fr/img/Christopher_FerreiraSm.png',
        createdDate: new Date(),
        snaps: 124
      }
    ]
  }
}

