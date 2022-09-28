import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private _platform: any;
  public get platform(): any {
    return this._platform;
  }
  public set platform(value: any) {
    this._platform = value;
  }

  constructor(platform: Platform) {
    this.platform = platform;
  }
  exitApp() {
    this.platform.exitApp();
  }
}
