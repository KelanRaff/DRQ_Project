import React, { Component } from 'react';
import axios from 'axios';

class Relist extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeHouseDate = this.onChangeHouseDate.bind(this);
        this.onChangeHouseownedOrLeased = this.onChangeHouseownedOrLeased.bind(this);
        this.onChangeHouseparkingSpaces = this.onChangeHouseparkingSpaces.bind(this);
        this.onChangeHousestatus = this.onChangeHousestatus.bind(this);
        this.onChangeHousetype = this.onChangeHousetype.bind(this);
        this.onChangeHouseADAAccessible = this.onChangeHouseADAAccessible.bind(this);
        this.onChangeHouseansiUsable = this.onChangeHouseansiUsable.bind(this);

        this.state = {
            _id: '',
            date: '',
            ownedOrLeased: '',
            parkingSpaces: '',
            status: '',
            type: '',
            ADAAccessible: '',
            ansiUsable: ''
        }
    }

    componentDidMount() {

        axios.get('http://localhost:3000/api/houses/' + this.state._id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    date: response.data.date,
                    ownedOrLeased:response.data.ownedOrLeased,
                    parkingSpaces: response.data.parkingSpaces,
                    status:response.data.status,
                    type: response.data.type,
                    ADAAccessible:response.data.ADAAccessible,
                    ansiUsable:response.data.ansiUsable
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleSubmit(event) {
        console.log("date: " + this.state.date +
            " Owned Or Leased: " + this.state.ownedOrLeased +
            "Parking Spaces: " + this.state.parkingSpaces +
            "Status: " + this.state.status +
            "type: " + this.state.type +
            "ADA Accessible" + this.state.ADAAccessible +
            "ANSI Usable " + this.state.ansiUsable);

        const newHouse = {
            date: this.state.date,
            ownedOrLeased: this.state.ownedOrLeased,
            parkingSpaces: this.state.parkingSpaces,
            status: this.state.status,
            type: this.state.type,
            ADAAccessible: this.state.ADAAccessible,
            ansiUsable: this.state.ansiUsable,
            _id: this.state._id
        }

        axios.put('http://localhost:3000/api/houses/' + this.state._id, newHouse)
        .then(res =>{
            console.log(res.data)
        })
        .catch();

        event.preventDefault();
        this.setState({
            date: '',
            ownedOrLeased: '',
            parkingSpaces: '',
            status: '',
            type: '',
            ADAAccessible: '',
            ansiUsable: ''
        });
    }


    onChangeHouseDate(event) {
        this.setState({
            date: event.target.value
        })
    }
    onChangeHouseownedOrLeased(event) {
        this.setState({
            ownedOrLeased: event.target.value
        })
    }
    onChangeHouseparkingSpaces(event) {
        this.setState({
            parkingSpaces: event.target.value
        })
    }

    onChangeHousestatus(event) {
        this.setState({
            status: event.target.value
        })
    }

    onChangeHousetype(event) {
        this.setState({
            type: event.target.value
        })
    }

    onChangeHouseADAAccessible(event) {
        this.setState({
            ADAAccessible: event.target.value
        })
    }

    onChangeHouseansiUsable(event) {
        this.setState({
            ansiUsable: event.target.value
        })
    }






    render() {
        return (
            <div>
                <h1>House Creation Component!</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add House date: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.date}
                            onChange={this.onChangeHouseDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add House owned or leased: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.ownedOrLeased}
                            onChange={this.onChangeHouseownedOrLeased}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add House Parking Spaces: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.parkingSpaces}
                            onChange={this.onChangeHouseparkingSpaces}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add House Status: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChangeHousestatus}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add House Type: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeHousetype}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add House ADA accessible: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.ADAAccessible}
                            onChange={this.onChangeHouseADAAccessible}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add House Ansi Usable: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.ansiUsable}
                            onChange={this.onChangeHouseansiUsable}
                        />
                    </div>

                    <div>
                        <input type="submit" value="Update Home"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Relist;