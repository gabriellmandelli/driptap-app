import { Component } from '@angular/core';

import { FrequencySetting } from '../frequency-setting/frequency-setting';
import { FrequencyTimer } from '../frequency-timer/frequency-timer';
import { DripFormula } from '../drip-formula/drip-formula';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1FrequencySetting = FrequencySetting;
  tab2FrequencyTimer = FrequencyTimer;
  tab3DripFormula = DripFormula;
  tab4Contacts = ContactPage;

  constructor() {
  
  }
}
