import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data = {};
  userEmail:string;
  slideOpts = {
    slidesPerView: 2,
    initialSlide: 1,
  }
  constructor(private storage: Storage,) { }

  ngOnInit() {
    this.storage.get('inf').then( res => {
      this.data = res;
      this.storage.get('userToken').then( res => {
        if (this.data['user'].token.token === res ) {
          this.userEmail = this.data['user'].email;
        } else {
           console.error("The token isn't correct");
        }
      }) 
      console.log(this.data['user'].email);
      console.log(res);
    })
    
  }

}
