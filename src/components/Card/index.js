import classNames from "classnames";
import React, {Component} from "react";
import "./Card.sass";

class Card extends Component {
  render() {
    const {title, image, flat, children, center} = this.props;
    const classes = classNames("Card", {
      flat
    }, {center});
    return (
      <div className={classes}>
        {title && <div className="Card-title">
          <h2>{title}</h2>
        </div>}
        <div
          className="Card-image"
          style={{
          backgroundImage: `url(${image})`
        }}/>
        <div className="Card-content">{children}</div>
      </div>
    );
  }
}

export default Card;
