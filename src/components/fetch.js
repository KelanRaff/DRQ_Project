import React, { Component } from 'react';
import Houses from './houses';
import axios from 'axios';

class Fetch extends Component
{

    constructor(){
        super();

        this.RefreshData = this.RefreshData.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:3000/api/houses')
        .then((response)=>{
            this.setState({myhouses: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    RefreshData(){
        axios.get('http://localhost:3000/api/houses')
        .then((response)=>{
            this.setState({myhouses: response.data})
        })


        .catch((error)=>{
            console.log(error);
        });

        console.log("Home listings refreshed");
    }

    state = {
        myhouses: []            
    };

    render(){
        return(
            <div>
                <h1>Housing Information!</h1>
                <Houses homes={this.state.myhouses} RefreshData= {this.RefreshData}></Houses>

            </div>
        );
    }
}
export default Fetch;