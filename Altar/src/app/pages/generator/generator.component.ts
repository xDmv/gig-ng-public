import { Component, OnInit } from '@angular/core';
import { GeneratedataService } from 'src/app/services/generatedata.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


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
	//letter :  FormControl = new FormControl('', Validators.maxLength(1));
	character_: FormGroup;
	

	constructor(
		private formBuilder: FormBuilder,
		public generator : GeneratedataService
	) { 

	}

	ngOnInit(): void {
		this.character_ = this.formBuilder.group({
				letter :   new FormControl('', [ Validators.maxLength(1)])
		})
	}

	get f(){ return this.character_.controls }

	onClassGrid() {
		this.dark = !this.dark;
		return this.dark;
	}

	onGenerate(){
		this.generator.onGenerateGrid()
	}

	onAddCharacter(){
		if(this.f.letter.valid && (this.f.letter.value.length < 1 && this.f.letter.value !== '')){
			return
		}

		if(!this.fixed){
			console.log('+');
			this.generator.onAddCharacter(this.character);
		}
		this.fixed = true;
		setTimeout(() => { this.fixed = false; }, 4000); 

	}
}
