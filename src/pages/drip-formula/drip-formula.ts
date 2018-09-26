import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'page-drip-formula',
  templateUrl: 'drip-formula.html'
})
export class DripFormula {

  dripForm : FormGroup;
  private volume: number;
  private tempo: number;
  utilizaMacrogota: boolean;
  public qtdGotasPorMinuto: number;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit(){
    this.dripForm  = new FormGroup({
      'volume': new FormControl(this.volume),
      'tempo': new FormControl(this.tempo),
      'utilizaMacrogota': new FormControl(this.utilizaMacrogota)
    })
  }

  onSubmit(){
    this.getDripFormula();
  }

  getDripFormula(){
    let lbUtilizaMacrogota = this.dripForm.get("utilizaMacrogota").value
    
    let volume = this.dripForm.get("volume").value
    let tempo = this.dripForm.get("tempo").value
    let lMicrogot = ( volume / (tempo * 3));
    
    if (lbUtilizaMacrogota){
      lMicrogot = lMicrogot * 3;
    }

    this.qtdGotasPorMinuto = Math.round(lMicrogot);
  }
}
