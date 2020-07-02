import {Button, TextField, Typography} from '@material-ui/core';
import React, {Component} from "react";
import FirebaseService from "../../services/FirebaseService";
import {urls} from "../../util/urlUtils";
import {withRouter} from "react-router-dom";

class Add extends Component{
    state = {id : null, nome : '', dob: '', status: ''};
    
    submit = (event) => {
        event.preventDefault();

        const {nome} = this;
        const {dob} = this;
        const {status} = this;

       let objToSubmit = {
           nome,
           dob,
           status
       };

       if(this.props.match.params.id === undefined){
           FirebaseService.pushData('pets', objToSubmit);
       }else{
           FirebaseService.updateData(this.props.match.paras.id, 'pets',objToSubmit);
       }
       
        this.props.history.push(urls.data.path);
    };

    componentWillMount = () => {
        const {id} = this.props.match.params;

        if(!(id === undefined || !id)){
            this.setState({id});
            FirebaseService.getUniqueDataBy('pets', id, (data) => this.setState({...data}, () => console.log(this.state)));
        }
    };

    handleChange = name => event => {
        this.setState({
            [name] : event.target.value,
        });
    };

    render = () => {
        return <React.Fragment>
            <Typography variant="headline" component="h2"> Adicionar Novo </Typography>
            <form onSubmit={this.submit}>
                <TextField className="input-field"
                           type="text" 
                           defaultValue={''}
                           label="Nome"
                           value = {this.state.nome}
                           required
                           onChange={this.handleChange('nome')}/>

                <TextField className="input-field"
                           type="text" 
                           defaultValue={''}
                           label="Nascimento"
                           value = {this.state.dob}
                           required
                           onChange={this.handleChange('dob')}/>

                <TextField className="input-field"
                           type="text" 
                           defaultValue={''}
                           label="Status"
                           value = {this.state.status}
                           required
                           onChange={this.handleChange('status')}/>
                <Button type="submit" style={{marginTop: '20px', display: 'inline-block'}}> Add </Button>
            </form>
        </React.Fragment>
    }
};

export default withRouter(Add); 