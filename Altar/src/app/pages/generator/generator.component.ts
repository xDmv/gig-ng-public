import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { GeneratedataService } from 'src/app/services/generatedata.service';

@Component({
	selector: 'app-generator',
	templateUrl: './generator.component.html',
	styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
	charter_max: number = 20;
	coltb = [0,1,2,3,4,5,6,7,8,9];

	character : string;
	valide: boolean = true;
	dark = true;
	fixed = false;

	constructor(
	public generator: GeneratedataService
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
		console.log(this.character);
		let stop: number = 20;
		let coint: number = 0;
		this.fixed = true;
		setTimeout(() => { this.fixed = false; }, 4000); 
		this.generator.onAddCharacter(this.character);
		// this.generate_arr.map(
		// 	(val, index) => {
		// 		val.map(
		// 			(value, indx) => {
		// 				coint = coint + 1;
		// 				if (coint > 20) {
		// 					this.generate_arr[index][indx - 1] = this.onGenerateCharacter();
		// 					return
		// 				}
		// 				this.generate_arr[index][indx - 1] = this.character;
		// 			}
		// 		)
		// 	}
		// );
		// let count_first_character: number = 0;
		// let count_second_character: number = 0;
		// let time = moment().format('ss');
		// let first_character : string = this.generate_arr[time[0]][time[1]];
		// let second_character : string = this.generate_arr[time[1]][time[0]];
		// console.log(`time: "${time}" first_character: ${first_character} second_character: ${second_character}`);
		// this.generate_arr.map(
		// 	(val, index) => {
		// 		val.map(
		// 		(value, indx) => {
		// 			if (first_character === this.generate_arr[index][indx]) {
		// 			count_first_character = count_first_character + 1;
		// 			}
		// 			if (second_character === this.generate_arr[index][indx]) {
		// 			count_second_character = count_second_character + 1;
		// 			}
		// 		}
		// 		)
		// 	}
		// );
		// console.log(`time: "${time}" count_first_character: ${count_first_character} count_second_character: ${count_second_character}`);
		// this.onGenerateCode(count_first_character, count_second_character);
	}
}
