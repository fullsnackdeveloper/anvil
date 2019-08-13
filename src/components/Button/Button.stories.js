import {storiesOf} from "@storybook/react";
import React from "react";
import Button from "./";

storiesOf("Button", module).add("default", () => (
  <div style={{
    margin: 50
  }}>
    <Button>Click this</Button>
  </div>
)).add("with icon", () => (
  <div style={{
    margin: 50
  }}>
    <Button icon={{
      symbol: 'account'
    }}>Click this</Button>
  </div>
));
