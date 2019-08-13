import '@mdi/font/css/materialdesignicons.css';
import classNames from "classnames";
import React, {Component} from "react";
import "./Button.sass";

class Button extends Component {
  render() {
    const {children, icon} = this.props;
    const {symbol} = icon;
    const classes = classNames("Button");
    const iconClasses = classNames("mdi", `mdi-${symbol}`);
    console.log(icon)
    return <button className={classes}><i className={iconClasses}/>{children}</button>;
  }
}

export default Button;
