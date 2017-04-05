import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ButtonFactory, ButtonModel, ButtonProperties } from './button-factory';

@Component({
  selector: 'page-button',
  templateUrl: 'button.html'
})

export class ButtonPage {
  buttons: ButtonModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.buttons = [];

    const buttonFactory = new ButtonFactory();
    for (let type of ButtonProperties.buttonType) {
      for (let shape of ButtonProperties.buttonShape ) {
        for (let color of ButtonProperties.buttonColor) {
          this.buttons.push(buttonFactory.createButton(type, shape, color));
        }
      }
    }
  }
}
