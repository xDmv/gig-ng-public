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
  valide    : boolean = true;
  finish_generate = false;
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

  
  onGenerateCharacter(){
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let item = Math.floor(Math.random()*letters.length);
    console.log(letters[item]);
    return letters[item];
  }

  onGenerateGrid(){
    let count_first_character: number = 0;
    let count_second_character: number = 0;
    let time = moment().format('ss');
    let first_character : string = this.generate_arr[time[0]][time[1]];
    let second_character : string = this.generate_arr[time[1]][time[0]];
    console.log(`time: "${time}" first_character: ${first_character} second_character: ${second_character}`);
    this.generate_arr.map(
      (val, index) => {
        val.map(
          (value, indx) =>{
            if(first_character  === this.generate_arr[index][indx]){
              count_first_character = count_first_character + 1;
              if(count_first_character>9){
                this.generate_arr[index][indx] = this.onGenerateCharacter();
              }
              10/9
1.1111111111111112
Math.ceil(1.11)
2
10/2
5
28/Math.ceil(28/9)
7
118/Math.ceil(118/9)
8.428571428571429
89/Math.ceil(118/9)
6.357142857142857
89/7
12.714285714285714
            }
            
          }
        )
      }
    );
  }

  onAddCharacter(){
    this.valide = false;
    if(this.character.length !== 1){
      return
    }
    this.valide = true;
    console.log(this.character);

    // let coint: number = 0;
    // let arr_row = [];
    // this.generate_arr.map(
    //   (val)=>{
    //     console.log(val);
    //   }
    // )
    // // for(let i = 0; i < 10; i++){
    // //   arr_row.push(this.character);
    // // }
    // // for(let i = 0; i < 10; i++){
    // //   this.generate_arr.push(arr_row);
    // // }
    // console.log(this.generate_arr);
    // this.finish_generate = true;

    this.generate_arr = [
      ['s', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'z']
    ];
  }

}
