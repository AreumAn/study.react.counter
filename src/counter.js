import React, { Component } from 'react';



class Counter extends Component {

    render() {
        const {index, onIncrement, onDecrement, onSetColor, number, color} = this.props;
        return (
            <div className="Counter" style={{backgroundColor: color}} 
            onClick={() => onIncrement(index)}
            onContextMenu={(event) => {
                event.preventDefault();
                onDecrement();
            }}
            onDoubleClick={() => onSetColor(index)}>
                {number}
            </div>
        )

    }
}

export default Counter;