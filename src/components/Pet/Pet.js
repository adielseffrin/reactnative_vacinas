import {Button, TextField, Typography} from '@material-ui/core';
import React, {Component} from "react";
import FirebaseService from "../../services/FirebaseService";
import {urls} from "../../util/urlUtils";
import {withRouter} from "react-router-dom";

class Pet extends Component{
    //atributo para armazenamento do objeto recebido
    state = {id : null, nome : '', nascimento: '', raca: '', peso: 0};

    componentWillMount = () => {
        const {id} = this.props.match.params;

        if(!(id === undefined || !id)){
            this.setState({id});
            FirebaseService.getUniqueDataBy('pets', id, (data) => this.setState({...data}, () => console.log(this.state)));
        }
    };

    render = () => {
        return <React.Fragment>
            <Typography variant="headline" component="h2"> {this.state.nome} </Typography>
        </React.Fragment>
        }
}

export default withRouter(Pet); 