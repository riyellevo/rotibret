import { Component } from '@angular/core';

import { TesPage } from '../tes/tes';
import { ListPage } from '../list/list';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HelloIonicPage;
  tab2Root = ListPage;
  tab3Root = TesPage;

  constructor() {

  }
}
