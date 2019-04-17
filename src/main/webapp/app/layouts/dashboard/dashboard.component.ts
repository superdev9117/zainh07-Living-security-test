import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { DashboardFacts } from './dashboard.facts.model';
import { JhiEventManager } from 'ng-jhipster';

@Component({
  selector: 'jhi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.css']
})
export class DashboardComponent implements OnInit {
  public dashboardFacts: DashboardFacts;
  public allFacts: Array<DashboardFacts> =[];
  constructor(private dashboardService: DashboardService, private eventManager: JhiEventManager) { }

  	ngOnInit() {
  		this.getAllDashboardFacts();
    }
    
	getAllFacts(){
		this.dashboardService.getAllFacts().subscribe(data => {
            console.log('data====>>', data);
            this.allFacts.filter(function(obj) {
			    return !data.some(function(obj2) {
			        if(obj.id == obj2.factKey && obj2.favourite){
			        	obj.favourite = true;
			        }
			    });
			});
        });
	}

	getAllDashboardFacts(){
		this.dashboardService.getDashboardFacts().then(dashboardFacts => {
            this.allFacts = Object.assign([], dashboardFacts.result);
            this.getAllFacts();
        });
	}

	addRemoveFavourite(fact) {
        this.dashboardService.addRemoveFavouriteFact(fact.id).subscribe(response => {
            if(fact.favourite){
				fact.favourite = false;
            }else{
            	fact.favourite = true;
            }
            this.eventManager.broadcast({
                name: 'factUpdated',
                content: 'Added Successfully.'
            });
        });
    }
}
