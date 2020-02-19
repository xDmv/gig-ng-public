import { Component, OnInit } from '@angular/core';
import { GeneratedataService } from 'src/app/services/generatedata.service';

@Component({
	selector: 'app-payments',
	templateUrl: './payments.component.html',
	styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

	name: string;
	amount: number;
	code: string;

	constructor(
		public generator: GeneratedataService
	) {

	}

	ngOnInit(): void {

	}

	onAddPayment(){
		console.log(`name: ${this.name} amount: ${this.amount} code: ${this.generator.code} grid: 64`)
		let data = {
			name: this.name,
			amount: this.amount,
			code: this.generator.code,
			grid: 64
		}
		this.generator.addPayment(data);
	}

	onSendToApi(){
		console.log(this.generator.payment);
		let rezult = {}
		this.generator.payment.forEach(function(value, key){
			rezult[key] = value
		});
		console.log(`Json: \n ${JSON.stringify(rezult)}`);
	}

}
