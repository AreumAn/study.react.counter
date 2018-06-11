import React, { Component } from 'react';
import Header from './header';
import Counters from './counters';
import Button from './button';
import Footer from './footer';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';

const colors = [ 
  "red",
  "orange",
  "yellow",
  "blue",
  "green"
];

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
}

class App extends Component {

  render() {
    return (  //jsx
      <div>
        <Header />
        <hr />
        <Counters {...this.props} />
        <Button onCreate={this.props.onCreate} onDelete={this.props.onDelete} />
        <hr />
        <Footer />
      </div>
    );
  }
}

const mapStateToPass = (state) => ({
  counters: state.counters
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (index) => dispatch(actions.increment(index)),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: (index) => {
    let color = randomColor();
    dispatch(actions.setColor(index, color))
  },
  onCreate: () => dispatch(actions.create()),
  onDelete: () => dispatch(actions.remove())
});

export default connect(mapStateToPass, mapDispatchToProps)(App);
