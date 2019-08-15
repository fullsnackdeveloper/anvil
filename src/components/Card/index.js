import classNames from "classnames";
import React, {Component} from "react";
import "./Card.sass";

class Card extends Component {

  render() {
    const {
      title,
      fullwidthTitle,
      image,
      flat,
      children,
      center,
      avatar,
      horizontal,
      imagePosition,
      fullBackground
    } = this.props;
    const classes = classNames("Card", {
      flat,
      horizontal,
      fullwidthTitle,
      fullBackground
    }, {
      center,
      withAvatar: avatar
        ? true
        : false,
      withTitle: title
        ? true
        : false,
      withImage: image
        ? true
        : false,
      imageRight: imagePosition === 'right'
        ? true
        : false
    });
    const style = {
      backgroundImage: fullBackground
        ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`
        : null,
      color: fullBackground
        ? '#ffffff'
        : 'inherit'
    }
    return (
      <div className={classes} style={style}>
        {((title && !horizontal) || (title && fullwidthTitle)) && <div className="Card-title">
          <h2>{title}</h2>
        </div>}
        {avatar && horizontal && <div className="Card-avatar">
          {avatar}
        </div>}
        <div className="Card-container">
          {image && !fullBackground && <div
            className="Card-image"
            style={{
            backgroundImage: `${avatar
              ? 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.3)), url(' + image + ')'
              : 'url(' + image + ')'}`
          }}/>}
          <div className="Card-content-container">
            {((title && horizontal && !fullwidthTitle)) && <div className="Card-title">
              <h2>{title}</h2>
            </div>}
            <div className="Card-content">
              {avatar && !horizontal && <div className="Card-avatar">
                {avatar}
              </div>}
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Card.defaultProps = {
  fullwidthTitle: false
}

export default Card;
