import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import './CodeEditor.scss'
import AceEditor from "react-ace";
import PropTypes from 'prop-types';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools"

class CodeEditor extends Component {

    constructor(){
      super();
    }

    render() {
      return (
        <div>
          <AceEditor
              className='codeEditor'
              mode="java"
              theme="xcode"
              onChange={this.props.onSourceCodeChange}
              // name="UNIQUE_ID_OF_DIV"
              value={this.props.sourceCode}
              editorProps={{ $blockScrolling: true }}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
              }}
              readOnly={this.props.loading}
          />
        </div>
      );
    }
}

CodeEditor.propTypes = {
  onSourceCodeChange: PropTypes.func.isRequired,
  sourceCode: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default CodeEditor;
