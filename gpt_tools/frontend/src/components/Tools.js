import React, { Component } from 'react';
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class PainEscaleToolPage extends Component {
    defaultWho = "";
    defaultProd = "";
    defaultDesc = "";
    defaultDiff = "";
    defaultTarg = "";
    defaultChan = "";
    defaultFdB = ""; 

    constructor(props) {
        super(props);
        this.state = {
            whoareyou: this.defaultWho,
            product: this.defaultProd,
            descript: this.defaultDesc,
            trouble: this.defaultDiff,
            target: this.defaultTarg,
            channel: this.defaultChan,
            feedback: this.defaultFdB
        }

        this.handleButtonPressed = this.handleButtonPressed.bind(this);
        this.handleChangeWho = this.handleChangeWho.bind(this);
        this.handleChangeProd = this.handleChangeProd.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangeDiff = this.handleChangeDiff.bind(this);
        this.handleChangeTarg = this.handleChangeTarg.bind(this);
        this.handleChangeChan = this.handleChangeChan.bind(this);
        this.handleChangeFdB = this.handleChangeFdB.bind(this);
    }

    handleChangeWho(e) {
        this.setState({
            whoareyou: e.target.value
        });
    }

    handleChangeProd(e) {
        this.setState({
            product: e.target.value
        });
    }

    handleChangeDiff(e) {
        this.setState({
            trouble: e.target.value
        });
    }

    handleChangeDesc(e) {
        this.setState({
            descript: e.target.value
        });
    }

    handleChangeTarg(e) {
        this.setState({
            target: e.target.value
        });
    }

    handleChangeChan(e) {
        this.setState({
            channel: e.target.value
        });
    }

    handleChangeFdB(e) {
        this.setState({
            feedback: e.target.value
        });
    }

    handleButtonPressed() {
        const requestOptions = {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                whoareyou: this.state.whoareyou,
                product: this.state.product,
                descript: this.state.descript,
                target: this.state.target,
                trouble: this.state.trouble,
                channel: this.state.channel,
                feedback: this.state.feedback
            })
        };
        fetch('/api/create-session', requestOptions).then((response) =>
            response.json()
        ).then((data) => console.log(data));
    }

    render() {
        return (
            <Grid container spacing={5}>
                <Grid item xs={12} align='center'>
                     <Typography component='h2' variant='h2'>
                        Pain Escale Tool
                     </Typography>
                </Grid>
                <Grid item xs={12} align='center'>
                     <FormControl component='fieldset'>
                        <FormHelperText>
                            <h2 align='center'>
                               User Context Input
                            </h2>
                        </FormHelperText>
                        <FormHelperText>
                            <div align='center'>
                                Who are you?
                            </div>
                        </FormHelperText>
                        <TextField required={true} 
                                    type='text'
                                    onChange={this.handleChangeWho} 
                                    defaultValue={this.defaultWho}
                                    inputProps={{
                                        min: 1,
                                        style: {textAlign:'center'}
                                    }}/>
                        <FormHelperText>
                            <div align='center'>
                                What's your product?
                            </div>
                        </FormHelperText>
                        <TextField required={true} 
                                    type='text' 
                                    onChange={this.handleChangeProd}
                                    defaultValue={this.defaultProd}
                                    inputProps={{
                                        min: 1,
                                        style: {textAlign:'center'}
                                    }}/>
                        <FormHelperText>
                            <div align='center'>
                                Describe the product
                            </div>
                        </FormHelperText>
                        <TextField required={true} 
                                    type='text'
                                    onChange={this.handleChangeDesc}
                                    defaultValue={this.defaultDesc} 
                                    inputProps={{
                                        min: 1,
                                        style: {textAlign:'center'}
                                    }}/>
                        <FormHelperText>
                            <div align='center'>
                                What's the biggest difficult that you have?
                            </div>
                        </FormHelperText>
                        <TextField required={true} 
                                    type='text' 
                                    onChange={this.handleChangeDiff}
                                    defaultValue={this.defaultDiff}
                                    inputProps={{
                                        min: 1,
                                        style: {textAlign:'center'}
                                    }}/>
                        <FormHelperText>
                            <div align='center'>
                                Who's your main target?
                            </div>
                        </FormHelperText>
                        <TextField required={true} 
                                    type='text'
                                    onChange={this.handleChangeTarg}
                                    defaultValue={this.defaultTarg} 
                                    inputProps={{
                                        min: 1,
                                        style: {textAlign:'center'}
                                    }}/>
                        <FormHelperText>
                            <div align='center'>
                                What's your sell channel?
                            </div>
                        </FormHelperText>
                        <TextField required={true} 
                                    type='text' 
                                    onChange={this.handleChangeChan}
                                    defaultValue={this.defaultChan}
                                    inputProps={{
                                        min: 1,
                                        style: {textAlign:'center'}
                                    }}/>
                        <FormHelperText>
                            <div align='center'>
                                What's the feedback that you mostly receive from your clients?
                            </div>
                        </FormHelperText>
                        <TextField required={true} 
                                    type='text' 
                                    onChange={this.handleChangeFdB}
                                    defaultValue={this.defaultFdB}
                                    inputProps={{
                                        min: 1,
                                        style: {textAlign:'center'}
                                    }}/>
                     </FormControl>
                </Grid>
                <Grid item xs={12} align='center'>
                    <Button color='primary' 
                            variant='contained'
                            onClick={this.handleButtonPressed}>
                        Create a Session
                    </Button>
                </Grid>
                <Grid item xs={12} align='center'>
                    <Button color='secondary' 
                            variant='contained' 
                            to='/' 
                            component={Link}>
                        Home
                    </Button>
                </Grid>
            </Grid>
            
        );    
    }
}