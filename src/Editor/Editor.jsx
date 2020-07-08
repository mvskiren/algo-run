import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/clike/clike";
import 'codemirror/keymap/sublime';
import classes from './style.module.css';

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      options: {
        mode: "text/x-c++src",
        lineNumbers: true,
        smartIndent: true,
        indentUnit:4,
        keyMap:'sublime',
      },
      value: "# Write your code here",
    };
  }

  onSubmit = () => {
      console.log(`Clicked Submit`);
      
  };

  onBeforeChange = (editor, data, value) => {
      this.setState({value});
  }

  onChange = (editor, data, value) => {
      console.log(this.state.value);
  };

  render() {

    return (
      <div style={{width:'75%',margin:'4%'}}>
      <label>Select language</label>
       <select className={classes.dropdown}>
         <option value="volvo">C++</option>
         <option value="volvo">JAVA</option>
         <option value="volvo">PYTHON</option>
         <option value="volvo">JAVASCRIPT</option>
         <option value="volvo">GO</option>
        </select>
        <CodeMirror 
         className={classes.codemirror}
          value={this.state.value}
          options={{...this.state.options}}
          onBeforeChange={this.onBeforeChange}
          onChange={this.onChange}
        />
        
        <button  type="submit" className={classes.hello} onClick={() => this.onSubmit()}>Run</button>
        <label class="container">Custom Input
            <input type="checkbox" />
        </label>
          <div style={{margin:'2%',display:'flex','flex-direction': 'row',justifyContent:'center'}}>
            <div style={{margin: '5%'}}>
            <textarea value='Input....' rows="10" cols="30"/>
            </div>
            <div style={{margin: '5%'}}>
            <textarea value='Output from server...' rows="10" cols="50"/>
            </div>
          </div>
      </div>
    );
  }
}

export default Editor;
