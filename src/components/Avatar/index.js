import classNames from "classnames";
import React, {Component} from "react";
import "./Avatar.sass";

class Avatar extends Component {
    render() {
        const {shape, image, bordered, size, raised} = this.props;
        const classes = classNames("Avatar", shape, size, {bordered, raised});
        return (<div
            className={classes}
            style={{
            backgroundImage: `url('${image}')`
        }}/>);
    }
}

export default Avatar;