import React, { Component } from "react";
import CartColumns from "./CartColumns";
import Title from "../Title";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <Title name="your" title="cart" />
        <CartColumns />
      </section>
    );
  }
}
