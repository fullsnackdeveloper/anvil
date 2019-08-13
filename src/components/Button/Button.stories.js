import {storiesOf} from "@storybook/react";
import React from "react";
import Button from "./";

storiesOf("Button", module).add("default", () => (
  <div>
    <div style={{
      margin: 50
    }}>
      <Button size="small">Click this</Button>
    </div>
    <div style={{
      margin: 50
    }}>
      <Button>Click this</Button>
    </div>
    <div style={{
      margin: 50
    }}>
      <Button size="large">Click this</Button>
    </div>
  </div>
)).add("with icon", () => (
  <div>
    <div style={{
      margin: 50
    }}>
      <Button
        size="small"
        icon={{
        symbol: 'chevron-right',
        position: 'right'
      }}>Click this</Button>
    </div>
    <div style={{
      margin: 50
    }}>
      <Button icon={{
        symbol: 'settings'
      }}>Click this</Button>
    </div>
    <div style={{
      margin: 50
    }}>
      <Button icon={{
        symbol: 'login'
      }} size="large">Click this</Button>
    </div>
  </div>
));
