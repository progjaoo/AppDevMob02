import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  ngOnInit() {
  }

  constructor(public actionSheetController: ActionSheetController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Agosto',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Setembro',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Outubro',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Novembro',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Dezembro',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Sair',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
