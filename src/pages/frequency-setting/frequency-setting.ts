import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'page-frequency-setting',
  templateUrl: 'frequency-setting.html'
})

export class FrequencySetting {

  frequencySetting: FormGroup;
  public countDripsPerMinute: number;



  lastTapTime = 0;
  nextTapTime = 0;
  intervalTime = 0;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.frequencySetting = new FormGroup({
      'gotasPorMinuto': new FormControl()
    })
    this.countDripsPerMinute = 0;
  }

  clickOnButton() {

    let timeNow = Date.now();

    if ((this.lastTapTime > 0)) {

      this.nextTapTime = timeNow;

      this.intervalTime = this.nextTapTime - this.lastTapTime;

      this.lastTapTime = this.nextTapTime;

      this.countDripsPerMinute = Math.round((60000 / this.intervalTime))
    }

    if ((this.nextTapTime == 0) || (this.lastTapTime == 0)) {
      this.lastTapTime = timeNow;
    }

  }

  onSubmit() {
    this.clickOnButton();
  }
}
