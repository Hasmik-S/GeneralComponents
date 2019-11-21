import React, { Component } from 'react';


class Button extends Component {

    state = {
        style: {
            button: {
                backgroundColor: '#ffffff',
                height: '40px',
                width: '99px',
                backgroundSize: 'cover',
                border: '1px solid #000000'
                },
            buttonItem: {
                height: '20px',
                width: '35px',
                fontfamily: 'Montserrat',
                fontSize: '14px',
                textDecoration: 'none solid rgb(0, 0, 0)',
                lineheight: '20px',
                textTransform: 'uppercase',
                textAlign: 'center',
                color: '#000000'
            },
            buttonHover: {
                '.button': {
                    '&:hover': {
                        backgroundColor: '#000000'
                    }
                }
            },
            buttonItemHover: {
                '.buttonItem': {
                    '&:hover': {
                        color: '#ffffff'
                    }
                }
            }
        }
    }

    

    render() {

        return (
            <button style={ this.state.style.button }  >
                <span style={ this.state.style.buttonItem } > Text </span>
            </button>
        );
    }
}



export default Button;