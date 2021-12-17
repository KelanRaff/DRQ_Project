import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                <p>G00382023</p>
                <h1>Kelan's Housing App</h1>
                <div class="jumbotron">
                <h1>World Class home listings in Galway!</h1>
                <h3>It is {new Date().toLocaleTimeString()}.</h3>
                <p> Galway Hosuing App providing a marketplace for housing in the Galway Locality !! </p>
                <h1> Contact Details</h1>>
                <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                </div>
            </div>
            
        );
          
    }
}
export default Content;