import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

import * as moment from 'moment';


@Injectable({
	providedIn: 'root'
})
export class GeneratedataService {

	public generate_arr = [];
	public newtime : string;
	public code    : string;
	letters        : string = 'abcdefghijklmnopqrstuvwxyz';
	public payment = new Map();

	constructor(
		protected localStorage : LocalStorage
	) {
		this.localStorage.getItem('payment').subscribe((data) => {
				if (data) {
					let maps: any = data;
					for (let entry of maps.keys()) {
						this.payment.set(entry, maps.get(entry));
					}
				}
			},
			(error) => {
				console.error(error);
			}
		);
		this.onGenerateArr();
		setInterval(() => { this.newtime = moment().format('H:mm:ss'); }, 1000);
		setInterval(() => { this.onGenerateGrid(); }, 2000); 
	}
	
	onGenerateCharacter() {
		let item: string;
		item = this.letters[Math.floor(Math.random() * this.letters.length)];
		return item;
	}

	onGenerateArr() {
		let iMax = 10;
		let jMax = 10;
		let result = [];
		for (let i = 0; i < iMax; i++) {
			let row = [];
			for (let j = 0; j < jMax; j++) {
				row.push(this.onGenerateCharacter());
			}
			result.push(row);
		}
		this.generate_arr = result;
	}

	onGenerateGrid() {
		this.onGenerateArr();
		let iMax = 10;
		let jMax = 10;
		let count_first_character: number = 0;
		let count_second_character: number = 0;
		let time = moment().format('ss');
		let first_character: string = this.generate_arr[time[0]][time[1]];
		let second_character: string = this.generate_arr[time[1]][time[0]];

		for (let i = 0; i < iMax; i++) {
			for (let j = 0; j < jMax; j++) {
				if (first_character === this.generate_arr[i][j]) {
					count_first_character = count_first_character + 1;
				}
				if (second_character === this.generate_arr[i][j]) {
					count_second_character = count_second_character + 1;
				}
			}
		}
		

		this.onGenerateCode(count_first_character, count_second_character);
	}

	onGenerateCode(first: number, scond: number) {
		if (first > 9) {
			let n = Math.ceil(first / 9)
			this.code = Math.ceil(first / n).toString();
		} else {
			this.code = first.toString();
		}
		if (scond > 9) {
			let n = Math.ceil(scond / 9)
			this.code += Math.ceil(scond / n).toString();
		} else {
			this.code += scond.toString();
		}
	}

	onRandSymbol(characters, length = 1 ) {
		let result = '';
		let charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	onAddCharacter(character: string) {
		let iMax = 10;
		let jMax = 10;
		let count_first_character: number = 0;
		let count_second_character: number = 0;
		let time = moment().format('ss');
		let result = [];
		let characters: string = this.letters.replace(character, '');
		for (let i = 0; i < iMax; i++) {
			let row = [];
			for (let j = 0; j < jMax; j++) {
				row.push(this.onRandSymbol(characters));
			}
			let x = Math.floor(Math.random() * 10);
			if (x === 0) { x = 1 };
			row = row.fill(character, x - 1, x + 1);
			result.push(row);
		}

		this.generate_arr = result;
		let first_character: string = this.generate_arr[time[0]][time[1]];
		let second_character: string = this.generate_arr[time[1]][time[0]];
		for (let i = 0; i < iMax; i++) {
			for (let j = 0; j < jMax; j++) {
				if (first_character === this.generate_arr[i][j]) {
					count_first_character = count_first_character + 1;
				}
				if (second_character === this.generate_arr[i][j]) {
					count_second_character = count_second_character + 1;
				}
			}
		}
		this.onGenerateCode(count_first_character, count_second_character);
	}

	addPayment(itm: any) {
		let index: number = this.payment.size
		this.payment.set(index, itm);
		this.localStorage.setItem('payment', this.payment).subscribe(() => {}, () => {});
	}

}