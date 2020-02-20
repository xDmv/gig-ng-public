import { Component, OnInit } from '@angular/core';
import { GeneratedataService } from 'src/app/services/generatedata.service';

@Component({
	selector: 'app-generator',
	templateUrl: './generator.component.html',
	styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
	charter_max: number = 20;
	colum_tb = [0,1,2,3,4,5,6,7,8,9];
	character : string;
	valide    : boolean = true;
	dark  = true;
	fixed = false;

	constructor(
		public generator : GeneratedataService
	) { 

	}

	ngOnInit(): void {

	}

	onClassGrid() {
		if (this.dark !== true) {
		this.dark = true;
		return this.dark
		}
		this.dark = false;
		return this.dark
	}

	onAddCharacter(){
		this.valide = false;
		if(this.character.length !== 1){
			return
		}
		this.valide = true;
		this.fixed = true;
		setTimeout(() => { this.fixed = false; }, 4000); 
		this.generator.onAddCharacter(this.character);
	}
}
