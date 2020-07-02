import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { Card, CardContent} from "@material-ui/core";
import red from '@material-ui/core/colors/red';

import {DataTable} from "../DataTable/DataTable";
import Add from "../Add/Add";
import {Welcome} from "../Welcome/Welcome";
import {TopBar} from "./TopBar"

import FirebaseService from '../../services/FirebaseService';
import {Route, withRouter} from "react-router-dom";
import {urls, privateUrls} from "../../util/urlUtils";

import {StyleSheet } from 'react-native';
import Moment from "moment"; 

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
}); 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //timeNow: this.timeNow(),
      data: [
        {
          key: '',
          nome: '',
          dob : '',
          raca: '',
          peso: 0,
          status: 'OK',
        }
      ]
    };
  }

  render(){
    return (
    <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <TopBar />
          
          <Card style={{margin: '50px'}}>
            <CardContent>
              <Route exact
                path={urls.home.path}
                render={ (props) => <Welcome {...props} data={this.state.data}/>}
              />
              <Route exact 
                path={urls.data.path}
                render={(props) => <DataTable {...props} data={this.state.data} /> }
              />
              <Route exact
                path={urls.add.path}
                render={ (props) => <Add {...props}/>}
              />
              <Route exact
                path={privateUrls.edit.path}
                render={(props) => <Add {...props} />}
              />
            
            </CardContent> 
          </Card>
        </React.Fragment>
      </MuiThemeProvider>
      /*<View
        style={styles.container}
      >
        <Text style={styles.title}>Hello World!</Text>
        <Text>{this.state.timeNow}</Text>
      </View>
      
       
      */
     
    );
  }
  
  componentDidMount(){
    /*setInterval(() => {
      this.setState({
        timeNow: this.timeNow(),
      });
    }, 30);*/
    FirebaseService.getDataList('pets', (dataReceived) => this.setState({data: dataReceived}));
  }

 /* timeNow(){
    return Moment().format('H:mm:ss');
  }*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize:28,
    color: '#1f4e06',
  }
})

export default App;
