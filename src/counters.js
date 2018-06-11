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


// const Counters = ({counters, onIncrement, onDecrement, onSetColor}) => {
//     return (
//         <div className="CounterList">
//             {
//                 counters.map((item, index) => (
//                     <Counter key={index} index={index} number={item.number} color={item.color} onIncrement={onIncrement} onDecrement={onDecrement} onSetColor={onSetColor}/>
//                 ))
//             }
//         </div>
//     )
// }

export default Counters;