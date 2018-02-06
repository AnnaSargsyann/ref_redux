import React, { Component } from 'react';
import Newsitem from './newsitem';
import './news.css';

class News extends Component{
  constructor(props){
    super(props);
    this.state={
      data:this.props.data
    }
  }

  render(){

let items = this.state.data.map((d)=>{
  return (<Newsitem author={d.author} text={d.text}  />)
})
    return(
<div className="area-news">
  {items}
</div>
    )
  }
}
export default News;
