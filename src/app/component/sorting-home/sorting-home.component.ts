import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-sorting-home',
  templateUrl: './sorting-home.component.html',
  styleUrls: ['./sorting-home.component.css']
})
export class SortingHomeComponent implements OnInit {

  inputValue : string ;
  sortedInteger:string;
   intArray = ["117498","4734","9782","53196"];
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }



  sortIntegerValue(){
    console.log(this.inputValue)
    this.httpClient.post('http://localhost:8084/list/sort', this.intArray.map(Number)).subscribe(res =>
    {
      console.log(res);
      this.sortedInteger = res as string;

    },err =>{

    });

  }

}
