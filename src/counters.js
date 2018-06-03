import React from 'react';
import Counter from './counter';

const Counters = (props) => {
    return (<div className="CounterList">
    {
        props.counters.map((item, index) => (
            <Counter {...props} key={index} index={index} number={item.number} color={item.color} />
        ))
    }
    </div>);
}

export default Counters;