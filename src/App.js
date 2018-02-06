import React, { Component } from 'react';
import Post from './post';
import EventEmitter from 'event-emitter';
import News from './news/news';
import { NEWS_ADD} from './const';
import './App.css';
class App extends Component {
  constructor(props){
  super(props);
  window.ee=new EventEmitter();
  console.log(new EventEmitter());
  this.state={
    arr:[
      {
        author:"J. K. Rowling",
        text:"Harry Potter",

      },
      {
        author:"Dyuma",
        text:" Monte Qristo",

      },
    ]
  }
}

componentWillMount(){
  let something = "hjhj";
  window.ee.on(NEWS_ADD,(d)=>{
    this.something = d.name;
    console.log('something ', this.state)
    let tmp = this.state.arr;
    tmp.push({author:d.name, text:d.name+" text"})

    this.setState({
      arr:tmp
    }
    )

  })

}
componentWillUnmount() {
  window.ee.off(NEWS_ADD);
}

  render() {

    return(
      <div>
        <Post/>
        <News data={this.state.arr}/>
      </div>
    )
  }
}

export default App;
