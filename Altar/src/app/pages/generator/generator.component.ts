import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
	selector: 'app-generator',
	templateUrl: './generator.component.html',
	styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
	charter_max: number = 20;
	coltb = [0,1,2,3,4,5,6,7,8,9];
	mytime    : any;
	character : string;
	valide: boolean = true;
	code: string = "11";
	finish_generate = false;
	dark = true;
	fixed = false;
	generate_arr = [
		['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'y', 's', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
	];

	constructor() { }

	ngOnInit(): void {
		setInterval(() => { this.mytime = moment().format('H:mm:ss'); }, 1000); 
		this.finish_generate = true;
		this.onGenerateGrid();
	}

	onClassGrid() {
		if (this.dark !== true) {
		this.dark = true;
		return this.dark
		}
		this.dark = false;
		return this.dark
	}

	onGenerateCharacter(){
		let letters = 'abcdefghijklmnopqrstuvwxyz';
		let item = Math.floor(Math.random()*letters.length);
		return letters[item];
	}

	onGenerateArr() {
		this.generate_arr.map(
			(val, index) => {
				val.map(
				(value, indx) => {
					this.generate_arr[index][indx-1] = this.onGenerateCharacter();
				}
				)
			}
		);
	}

	onGenerateGrid() {
		this.generate_arr.map(
			(val, index) => {
				val.map(
				(value, indx) => {
					this.generate_arr[index][indx-1] = this.onGenerateCharacter();
				}
				)
			}
		);
		let count_first_character: number = 0;
		let count_second_character: number = 0;
		let time = moment().format('ss');
		let first_character : string = this.generate_arr[time[0]][time[1]];
		let second_character : string = this.generate_arr[time[1]][time[0]];
		console.log(`time: "${time}" first_character: ${first_character} second_character: ${second_character}`);
		this.generate_arr.map(
			(val, index) => {
				val.map(
				(value, indx) => {
					if (first_character === this.generate_arr[index][indx]) {
					count_first_character = count_first_character + 1;
					}
					if (second_character === this.generate_arr[index][indx]) {
					count_second_character = count_second_character + 1;
					}
				}
				)
			}
		);
		console.log(`time: "${time}" count_first_character: ${count_first_character} count_second_character: ${count_second_character}`);
		this.onGenerateCode(count_first_character, count_second_character);
	}

	onGenerateCode(first: number, scond: number) {
		if (first > 9) {
			let n = Math.ceil(first/9)
			this.code = Math.ceil(first / n).toString();
		} else {
			this.code = first.toString();
		}
		if (scond > 9) {
			let n = Math.ceil(scond/9)
			this.code += Math.ceil(scond / n).toString();
		} else {
			this.code += scond.toString();
		}
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
		this.generate_arr.map(
			(val, index) => {
				val.map(
					(value, indx) => {
						coint = coint + 1;
						if (coint > 20) {
							this.generate_arr[index][indx - 1] = this.onGenerateCharacter();
							return
						}
						this.generate_arr[index][indx - 1] = this.character;
					}
				)
			}
		);
		let count_first_character: number = 0;
		let count_second_character: number = 0;
		let time = moment().format('ss');
		let first_character : string = this.generate_arr[time[0]][time[1]];
		let second_character : string = this.generate_arr[time[1]][time[0]];
		console.log(`time: "${time}" first_character: ${first_character} second_character: ${second_character}`);
		this.generate_arr.map(
			(val, index) => {
				val.map(
				(value, indx) => {
					if (first_character === this.generate_arr[index][indx]) {
					count_first_character = count_first_character + 1;
					}
					if (second_character === this.generate_arr[index][indx]) {
					count_second_character = count_second_character + 1;
					}
				}
				)
			}
		);
		console.log(`time: "${time}" count_first_character: ${count_first_character} count_second_character: ${count_second_character}`);
		this.onGenerateCode(count_first_character, count_second_character);
	}
}
