import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/clike/clike";
import 'codemirror/keymap/sublime'

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
      <div style={{width:'75%'}}>
        <CodeMirror
          value={this.state.value}
          options={{...this.state.options}}
          onBeforeChange={this.onBeforeChange}
          onChange={this.onChange}
        />
        <p></p>
        <button onClick={() => this.onSubmit()}>Submit</button>
      </div>
    );
  }
}

export default Editor;
