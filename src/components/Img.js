/**
 * Created by 1 on 31.01.2019.
 */
import React, { Component } from 'react';

class Img extends Component {

    state = {
        isOpened: false
    };

    render() {
        const { src } = this.props;
        const { alt } = this.props;
        const imgWidth = !this.state.isOpened ? '400' : '800';

        return (
            <a type="li" onClick={this.fullSizeImg} href="javascript:void(0);">
                <img width={imgWidth} src={src} title={alt} alt={alt} />
            </a>
        );
    }

    fullSizeImg = () => {
        this.setState({
            isOpened: !this.state.isOpened
        });
    };
}


export default Img;