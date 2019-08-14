import {storiesOf} from "@storybook/react";
import React from "react";
import Avatar from '../Avatar';
import Button from '../Button';
import Card from "./";

const avatar = <Avatar
  raised
  shape="circle"
  image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>;

storiesOf("Card", module).add("default", () => (
  <div style={{
    display: 'flex'
  }}>

    <div className="story-spacer">
      <Card
        flat={false}
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80">
        <h5>Card content here</h5>
        <p>Add whatever you want in this area</p>
        <Button
          icon={{
          symbol: 'chevron-right',
          position: 'right'
        }}>Read more</Button>
      </Card>
    </div>
    <div className="story-spacer">
      <Card
        flat={false}
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80">
        <h5>Card content here</h5>
        <p>Add whatever you want in this area</p>
        <Button
          icon={{
          symbol: 'chevron-right',
          position: 'right'
        }}>Read more</Button>
      </Card>
    </div>
  </div>
)).add("with title", () => (
  <div className="story-spacer">
    <Card
      title="Card Title"
      flat={false}
      image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80">
      <h5>Card content here</h5>
      <p>Add whatever you want in this area</p>
      <Button
        icon={{
        symbol: 'chevron-right',
        position: 'right'
      }}>Read more</Button>
    </Card>
  </div>
)).add("with title", () => (
  <div className="story-spacer">
    <Card
      title="Card Title"
      flat={false}
      image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80">
      <h5>Card content here</h5>
      <p>Add whatever you want in this area</p>
      <Button
        icon={{
        symbol: 'chevron-right',
        position: 'right'
      }}>Read more</Button>
    </Card>
  </div>
)).add("center", () => (
  <div style={{
    display: 'flex'
  }}>
    <div className="story-spacer">
      <Card
        center
        title="Card Title"
        flat={false}
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80">
        <h5>Card content here</h5>
        <p>Add whatever you want in this area</p>
        <Button
          icon={{
          symbol: 'chevron-right',
          position: 'right'
        }}>Read more</Button>
      </Card>
    </div>
    <div className="story-spacer">
      <Card
        center
        avatar={avatar}
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80">
        <h5>Card content here</h5>
        <p>Add whatever you want in this area</p>
        <Button
          block
          icon={{
          symbol: 'chevron-right',
          position: 'right'
        }}>Read more</Button>
      </Card>
    </div>
  </div>
)).add("with avatar", () => (
  <div className="story-spacer">
    <Card
      avatar={avatar}
      image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80">
      <h5>Card content here</h5>
      <p>Add whatever you want in this area</p>
      <Button
        icon={{
        symbol: 'chevron-right',
        position: 'right'
      }}>Read more</Button>
    </Card>
  </div>
)).add("with no image", () => (
  <div>
    <div className="story-spacer">
      <Card >
        <h5>Card content here</h5>
        <p>Add whatever you want in this area</p>
        <Button
          icon={{
          symbol: 'chevron-right',
          position: 'right'
        }}>Read more</Button>
      </Card>
    </div>
    <div className="story-spacer">
      <Card avatar={avatar}>
        <h5>Card content here</h5>
        <p>Add whatever you want in this area</p>
        <Button
          icon={{
          symbol: 'chevron-right',
          position: 'right'
        }}>Read more</Button>
      </Card>
    </div>
  </div>
))