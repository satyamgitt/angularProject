import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  
  
  public Bsubject = new BehaviorSubject<any>('')
}
