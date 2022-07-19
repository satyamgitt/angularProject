import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-see-more-page',
  templateUrl: './see-more-page.component.html',
  styleUrls: ['./see-more-page.component.sass']
})
export class SeeMorePageComponent implements OnInit {


selectedinseemore: any[]=[]

  constructor(private dataservice:DataServiceService) { }

  ngOnInit(): void {

this.dataservice.Bsubject.subscribe(selecteddata=>{
  // console.log(selecteddata)
  this.selectedinseemore = selecteddata
})

  }


 

}
