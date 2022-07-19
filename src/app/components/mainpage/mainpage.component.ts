import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { PageServiceService } from 'src/app/service/page-service.service';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.sass']
})
export class MainpageComponent implements OnInit {


 seeMorearray : any[] = []

  store!: any;

  nameSearch: string = '';

  @Output() event = new EventEmitter<boolean>()

  constructor(private pageservice: PageServiceService, private dataServive: DataServiceService) { }

  ngOnInit(): void {



    let localdata = localStorage.getItem('data');      //getting data from local storage using key

    // console.log(localdata);


    if (!localdata) {
      this.pageservice.getProducts().subscribe((data) => {

        // console.log(data)
        this.store = data

        localStorage.setItem('data', JSON.stringify(data))   //putting data in local storage using key
      })
    }
    else {
      var data = JSON.parse(localdata)
      this.store = data
     
    }

  }


 

  seeMore(information:any){
// console.log(information);

    let check = true;
    this.event.emit(check)

    this.seeMorearray.push(information)

    this.dataServive.Bsubject.next(this.seeMorearray)
    }

  

}
