import {storiesOf} from "@storybook/react";
import React from "react";
import Button from '../Button';
import Card from "./";

storiesOf("Card", module).add("default", () => (
  <div style={{
    margin: 50
  }}>
    <Card
      title="Card Title"
      flat={false}
      image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80">
      <h5>Card content here</h5>
      <p>Add whatever you want in this area</p>
      <Button>Read more</Button>
    </Card>
  </div>
));
