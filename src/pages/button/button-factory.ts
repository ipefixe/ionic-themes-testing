
// Doesn't work for now, see: https://github.com/ionic-team/ionic/issues/11155

export class ButtonProperties {
  static buttonType : [string] = ["", "outline", "clear"];
  static buttonShape: [string] = ["", "full", "block", "round"];
  static buttonColor: [string] = ["", "secondary", "danger", "light", "dark"];
}

export interface ButtonModel {
  readonly buttonType : string;
  readonly buttonShape: string;
  readonly buttonColor: string;
}

export interface AbstractButtonFactory {
  createButton(type: string, shape: string, color: string): ButtonModel;
}

export class ButtonFactory implements AbstractButtonFactory {
  createButton(type: string, shape: string, color: string): ButtonModel {
    let button: ButtonModel = {
      buttonType : type,
      buttonShape: shape,
      buttonColor: color
    }
    return button;
  }
}
