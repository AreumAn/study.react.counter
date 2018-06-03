import React from 'react';

const Counter = (props) => {
        return (
            <div className="Counter" style={{backgroundColor: props.color}}
            onClick={() => props.onIncrease(props.index)}
            onContextMenu={(event) => {
                //console.log(event.target.className);
                event.preventDefault();
                props.onDecrease(props.index);
            }}
            onDoubleClick={(event)=> {
                props.onChangeBackground(props.index);
            }}
            >
                {props.number}
            </div>
        );
}

export default Counter;