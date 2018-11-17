import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'page-frequency-setting',
  templateUrl: 'frequency-setting.html'
})

export class FrequencySetting {

  frequencySetting : FormGroup;
  public qtdGotasPorMinuto : number;

  timeFirstTap = 0 ;
  timeSecondTap = 0;

  timeInterval = 0;

  public intervalVar;
  public timer = 0;

  constructor(public navCtrl: NavController) {
    
  }

  ngOnInit(){
    this.frequencySetting  = new FormGroup({
      'gotasPorMinuto': new FormControl()
    })
    this.qtdGotasPorMinuto = 0;
  }
  
  onSubmit(){
    
    if ((this.timeFirstTap == 0) || (this.timeSecondTap == 0)){
      this.startTimer();
    }

    this.timeSecondTap = this.timeFirstTap
    this.timeFirstTap = this.timer

    console.log(this.timeSecondTap +"   "+ this.timeFirstTap)

    if (this.timeFirstTap > this.timeSecondTap){
      this.timeInterval = this.timeFirstTap - this.timeSecondTap;
      this.qtdGotasPorMinuto = Math.round((this.timeInterval / 60));
      console.log(this.timeInterval);
    }
  }

  startTimer(){
    this.intervalVar = setInterval(function(){
      this.timer++;
    }.bind(this), 1)
  }
}
