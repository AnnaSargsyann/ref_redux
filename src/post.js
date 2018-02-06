import React, { Component } from 'react';
import EventEmitter from 'event-emitter';
import {NEWS_ADD} from './const';


import './post.css';
 class  Post extends Component{
post(){
  window.ee.emit(NEWS_ADD, {name:this.refs.post_text.value});
  this.refs.post_text.value = ""
};

shouldComponentUpdate(nextProps, nextState){
let bool = true;
if(this.bool && document.getElementById('a').checked) {
  return true;
}

return false;
}
ch(){
  console.log(document.getElementById('a').checked)
}
  render(){
    //const value = target.type === 'checkbox' ? target.checked : target.value;

    let forInput=(
      <div> <input className="input" type="text" ref="post_text" />
        <button  onClick={(a)=>{this.post()}}>post</button>
      </div>
    )

var check=<input id='a'
    name="check"
    type="checkbox"
     />
    return(
      <div className="post-area">
        {forInput}
        {check}
      </div>
    )
  }
}
export default Post;
export const aan = "aan";
