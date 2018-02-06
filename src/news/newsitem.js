import React, { Component } from 'react';
import './newsitem.css';
class Newsitem extends Component {
  constructor(props){
    super(props);
    this.state={
      author:this.props.author,
      text:this.props.text,
    }
  }

  render(){

    return(
<div className="newsitem">
<p> {this.state.author}</p>
<p>{this.state.text}</p>
</div>
    );
  }
}
export default Newsitem;
