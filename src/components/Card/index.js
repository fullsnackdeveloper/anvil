import classNames from "classnames";
import React, {Component} from "react";
import "./Card.sass";

class Card extends Component {
  render() {
    const {
      title,
      image,
      flat,
      children,
      center,
      avatar
    } = this.props;
    const classes = classNames("Card", {
      flat
    }, {
      center,
      withAvatar: avatar
        ? true
        : false,
      withTitle: title
        ? true
        : false
    });
    return (
      <div className={classes}>
        {title && <div className="Card-title">
          <h2>{title}</h2>
        </div>}
        {image && <div
          className="Card-image"
          style={{
          backgroundImage: `url(${image})`
        }}/>}

        <div className="Card-content">
          {avatar && <div className="Card-avatar">
            {avatar}
          </div>}
          {children}
        </div>
      </div>
    );
  }
}

export default Card;
