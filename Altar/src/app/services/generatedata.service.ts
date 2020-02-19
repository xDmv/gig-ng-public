import { Injectable } from '@angular/core';

import * as moment from 'moment';
import * as lodash  from 'lodash';

@Injectable({
	providedIn: 'root'
})
export class GeneratedataService {

	public generate_arr = [
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

	public newtime: string;
	public code: string;
	public payment = new Map();

	constructor() { 
		setInterval(() => { this.newtime = moment().format('H:mm:ss'); }, 1000); 
		setInterval(() => { this.onGenerateGrid(); }, 2000); 
	}
	
	onGenerateCharacter() {
		let letters = 'abcdefghijklmnopqrstuvwxyz';
		let item: string;
		item = letters[Math.floor(Math.random()*letters.length)];
		return item;
	}

	onGenerateArr() {
		this.generate_arr.map(
			(val, index) => {
				val.map(
				(value, indx) => {
					this.generate_arr[index][indx] = this.onGenerateCharacter();
				}
				)
			}
		);
	}

	onGenerateGrid() {
		this.onGenerateArr();
		let count_first_character: number = 0;
		let count_second_character: number = 0;
		let time = moment().format('ss');
		let first_character : string = this.generate_arr[time[0]][time[1]];
		let second_character : string = this.generate_arr[time[1]][time[0]];

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

	onAddCharacter(character: string){
		let getSymbolArray = function(symbol, symbolProbability,size = [10,10]){
			let iMax=size[0];
			let jMax=size[1];
			let maxSymbolCount = Math.floor(iMax*jMax*symbolProbability);
			let result = [];
			let symbolCount = 0;
			for(let i=0;i<iMax;i++){
				let row = [];
				for(let j=0;j<jMax;j++){
					if(Math.random()<=symbolProbability && symbolCount<maxSymbolCount){
						row.push(symbol);
						symbolCount++;
					}
					else{
						row.push(randSymbol(symbol));
					}
				}
				result.push(row);
				}
				return result;
			};
			
			let randSymbol = function(symbol,length=1) {
				let result = '';
				let characters = 'abcdefghijklmnopqrstuvwxyz';
				characters.replace(symbol,'');
				let charactersLength = characters.length;
				for ( let i = 0; i < length; i++ ) {
					result += characters.charAt(Math.floor(Math.random() * charactersLength));
				}
				return result;
			}
		let new_array = getSymbolArray(character,0.2);
		this.generate_arr = new_array;
		let count_first_character: number = 0;
		let count_second_character: number = 0;
		let time = moment().format('ss');
		let first_character : string = this.generate_arr[time[0]][time[1]];
		let second_character : string = this.generate_arr[time[1]][time[0]];
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

		this.onGenerateCode(count_first_character, count_second_character);

	}

	addPayment(itm: any){
		let index : number = this.payment.size
		this.payment.set(index, itm);
	}

}
