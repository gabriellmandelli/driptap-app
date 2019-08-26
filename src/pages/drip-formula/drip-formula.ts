import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'page-drip-formula',
  templateUrl: 'drip-formula.html'
})
export class DripFormula {

  dripForm : FormGroup;
  public qtdGotasPorMinuto : number;
  
  constructor(public navCtrl: NavController) {
  }

  ngOnInit(){
    this.dripForm  = new FormGroup({
      'volume': new FormControl(),
      'tempo': new FormControl(),
      'utilizaMicrogota': new FormControl(true)
    })
    this.qtdGotasPorMinuto = 0;
  }

  onSubmit(){
    this.getDripFormula();
  }

  getDripFormula(){

    let lbUtilizaMicrogota : Boolean = this.dripForm.get("utilizaMicrogota").value
    let volume : number = this.dripForm.get("volume").value
    let tempo : number = this.dripForm.get("tempo").value

    let lMicrogot = ( volume / (tempo * 3));
    
    if (lbUtilizaMicrogota){
      lMicrogot = (lMicrogot * 3);
    }

    this.qtdGotasPorMinuto = Math.round(lMicrogot);
    
  }
}
