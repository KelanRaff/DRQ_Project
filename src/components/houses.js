import React, { Component } from 'react';
import HouseItem from './houseitem';

class Houses extends Component
{
    render(){
        return this.props.homes.map((home)=>{
            return <HouseItem house={home} key={home._id} RefreshData={this.props.RefreshData}></HouseItem>
        })
    }
}
export default Houses;