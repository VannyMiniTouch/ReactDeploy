/* import React, { Component } from "react";

import * as PIXI from "pixi.js";
import { Application, Sprite, Assets } from "pixi.js";

import testimg from "./contents/images/author.png";

const app = new Application();
document.body.appendChild(app.view);

// const texture = await Assets.load("bunny.png");
// const bunny = new Sprite(texture);

class Scence extends Component {
  constructor(props) {
    super(props);
    this.gameRef = React.createRef();
  }
  componentDidMount() {
    if (this.gameRef) {
      this.gameRef.current.replaceChildren(app.view);
    }
    app.start();
  }

  render() {
    return <div className="main-game" ref={this.gameRef}></div>;
  }
}

// export default Scence;
 */