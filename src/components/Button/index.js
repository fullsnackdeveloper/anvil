import '@mdi/font/css/materialdesignicons.css';
import classNames from "classnames";
import React, {Component} from "react";
import "./Button.sass";

class Button extends Component {
  render() {
    const {children, icon, size} = this.props;
    const classes = classNames("Button", size);
    const iconSymbol = icon
      ? `mdi-${icon.symbol}`
      : '';
    const iconPosition = icon
      ? icon.position
      : 'left';
    const iconClasses = classNames("mdi", iconSymbol, iconPosition);

    return <button className={classes}>
      {icon && <i className={iconClasses}/>}
      <span>{children}</span>
    </button>;
  }
}

export default Button;
