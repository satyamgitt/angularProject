import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Aproject';
  toggle = false;
  seeMore = false;
  
  login(e: any) {
    if (e == true) {
      this.toggle = true;
    }
  }



  check(e:any){
    // console.log(e);
    
    if (e == true) {
      this.seeMore = true;
    }
    // console.log(this.seeMore);
    
  }

  
}



