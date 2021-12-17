import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class HouseItem extends Component {


    constructor(){
     super();
     
     this.RemoveHome = this.RemoveHome.bind(this);
 }

  RemoveHome(e){
      e.preventDefault();
      console.log("Delete" + this.props.house._id);

      axios.delete("http://localhost:3000/api/houses/" +this.props.house._id)
     .then(()=>{
         this.props.RefreshData();
     })
      .catch();
  }




    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.house.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src="https://tse1.mm.bing.net/th?id=OIP.nDASmBaTw3tIKeFiBGiGRAHaE8&pid=Api&rs=1&c=1&qlt=95&w=152&h=101"></img>
                            <footer>
                                <h5>{this.props.house._id}</h5>
                               <h5>{this.props.house.date}</h5>
                               <h3>{this.props.house.ownedOrLeased}</h3>
                               <h4> Parking Spaces : {this.props.house.parkingSpaces}</h4>
                               <h4> Status : {this.props.house.status}</h4>
                               <h4>Type : {this.props.house.type}</h4>
                               <h5> Disabilities : {this.props.house.adaAccessible}</h5>
                               <h5> Ansi usable : {this.props.house.ansiUsable}</h5>
                                <h4>Contact Agency if interested</h4>
                                
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="success"> Contact Home Owner</Button>
                    <Button variant="warning" onClick={this.RemoveHome}>Remove Listing</Button>
                    <Link variant="success" to={"/relist/"+ this.props.house._id} className="btn btn-primary"> Relist </Link>
                    
                </Card>
            </div>
        );
    }
}
export default HouseItem;