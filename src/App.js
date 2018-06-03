import React, { Component } from 'react';
import Header from './header';
import Counters from './counters';
import Button from './button';
import Footer from './footer';
import './App.css';

const colors = [ 
  "red",
  "orange",
  "yellow",
  "blue",
  "green"
];

class App extends Component {
  state = {
    counters: [{number: 0, color: 'red'}]
  };

  randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  onIncrease = (index) => {
    // this.state.counters[index].number += 1;
    // this.setState( this.state.counters );
    this.setState({
     counters : [...this.state.counters.slice(0, index),
       {...this.state.counters[index], number: this.state.counters[index].number + 1},
       ...this.state.counters.slice(index+1)
     ]
  })
  }

  onDecrease = (index) => {
    this.setState({
      counters: this.state.counters.map((item) => ({number: item.number -1, color:  item.color}))
    })
  }

  onChangeBackground = (index) => {
    this.setState({
      counters : [...this.state.counters.slice(0, index),
        {number: this.state.counters[index].number, color: this.randomColor()},
        ...this.state.counters.slice(index+1)
      ]
    })
  }

  onCreate = () => {
    console.log("Create");
    this.setState({
      counters: [
        ...this.state.counters, {number: 0, color: 'red'}
      ]
    })
  }

  onDelete = () => {
    this.setState({
      counters: [
        ...this.state.counters.slice(0, this.state.counters.length-1)
      ]
    })
  }

  render() {
    return (  //jsx
      <div>
        <Header />
        <hr />
        <Counters counters={this.state.counters} onIncrease={this.onIncrease} onDecrease={this.onDecrease} onChangeBackground={this.onChangeBackground} />
        <Button onCreate={this.onCreate} onDelete={this.onDelete} />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
