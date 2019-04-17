import { Component, OnInit } from '@angular/core';
import { MyFactsService } from './my-facts.service';
import { MyFacts } from './my-facts.model';
import { JhiEventManager } from 'ng-jhipster';

@Component({
  selector: 'jhi-my-facts',
  templateUrl: './my-facts.component.html',
  styleUrls: ['my-facts.css']
})
export class MyFactsComponent implements OnInit {
  public dashboardFacts: MyFacts;
  public allFacts: Array<MyFacts> =[];
  constructor(private factsService: MyFactsService) { }

  	ngOnInit() {
      debugger;
      this.factsService.getAllFacts().subscribe(data => {
        debugger;
           this.allFacts = Object.assign([], data); 
        });
      }
}
