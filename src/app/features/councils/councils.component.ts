import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var councils:any;
@Component({
  selector: 'app-councils',
  templateUrl: './councils.component.html',
  styleUrls: ['./councils.component.scss']
})
export class CouncilsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    new councils()
  }
  
  go_to_page(url:string){
    this. router. navigate(['/'+url]);
  }
  goToLink(url: string){
    window.open(url, "_blank");
}

}
