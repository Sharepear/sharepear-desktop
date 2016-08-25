import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
const { dialog } = require('electron').remote
import {Button, Icon} from 'react-materialize';
const {app} = require('electron')
import fs from 'fs'
import sizeOf from 'image-size'



export default class Home extends Component {
  selectDirectory() {
    dialog.showOpenDialog({
      properties: ['openDirectory']
    }, function (dirname) {
      console.log(dirname);
      fs.readdir(dirname[0], function(err, dir) {
        for(let filePath of dir) {
          console.log(filePath);
          var dimensions = sizeOf(dirname[0] + '/' + filePath);
          console.log(dimensions.width, dimensions.height);
        }
      })
    })
  }
  render() {
    return (
      <div>
        <div className={styles.container}>
          <Button onClick={this.selectDirectory} floating large className='red' waves='light' icon='add' />
        </div>
      </div>
    );
  }
}
