import React from 'react';
import './store';
import List from './list.js'

class Card extends React.Component {
    render() {
        return (
            <div className="Card">
                <h3>
                    Hi there!
                </h3>
                <p>
                    This is some text.
                </p>
            </div>
        )
    }
}

export default Card;