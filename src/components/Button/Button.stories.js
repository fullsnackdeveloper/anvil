import {storiesOf} from "@storybook/react";
import React from "react";
import Button from "./";

storiesOf("Button", module).add("default", () => (
  <div>
    <div className="story-spacer">
      <Button size="small">Click this</Button>
    </div>
    <div className="story-spacer">
      <Button>Click this</Button>
    </div>
    <div className="story-spacer">
      <Button size="large">Click this</Button>
    </div>
  </div>
)).add("with icon", () => (
  <div>
    <div className="story-spacer">
      <Button
        size="small"
        icon={{
        symbol: 'chevron-right',
        position: 'right'
      }}>Click this</Button>
    </div>
    <div className="story-spacer">
      <Button icon={{
        symbol: 'settings'
      }}>Click this</Button>
    </div>
    <div className="story-spacer">
      <Button icon={{
        symbol: 'login'
      }} size="large">Click this</Button>
    </div>
  </div>
)).add("block", () => (
  <div>
    <div className="story-spacer">
      <Button block>Click this</Button>
    </div>
    <div className="story-spacer">
      <Button block icon={{
        symbol: 'login'
      }}>Click this</Button>
    </div>
  </div>
))
