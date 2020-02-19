import { Component, OnInit, Input } from '@angular/core';
import { GeneratedataService } from 'src/app/services/generatedata.service';

@Component({
	selector: 'app-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

	@Input() dataSource: any;
	constructor(
		public generator: GeneratedataService
	) { 
		console.log(this.dataSource);
	}
	
	ngOnInit(): void {
		
	}

	onTableClass(i: number){
		return Number.isInteger(i/2)
	}
}
