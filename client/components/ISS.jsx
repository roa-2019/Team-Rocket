import React, { Component, Fragment } from 'react'
import { getSatellite } from '../apiClient/iss'

const IssId = 25544

class ISS extends Component{
    constructor(props){
        super(props)
        this.state={
            satellite: {}
        }
    }
    componentDidMount(){
        this.getISSLoc()
    }

    getISSLoc = () => {
        getSatellite(IssId)
        .then(satellite => {
            this.setState({
                satellite: satellite
                //will need (JSON.parse(JSON.parse(result.text).text))
            })
        })
    }

    render (){
        return (
            <Fragment>
                <p>The International Space Station</p>
                <p>Latitude: {this.state.satellite.latitude} </p>
                <p>Longitude: {this.state.satellite.longitude} </p>
                <p>Altitude: {this.state.satellite.altitude}</p>
                <p>Speed: {this.state.satellite.velocity} {this.state.satellite.unit} per Hour</p>
                
            </Fragment>
        )
    }
}