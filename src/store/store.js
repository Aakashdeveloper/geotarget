import React, { Component, Fragment } from 'react';
import mapboxgl from "mapbox-gl";
import StoreDisplay from './storeDisplay';
const storeUrl = "https://brewmusepk.herokuapp.com/store";
mapboxgl.accessToken = "pk.eyJ1IjoicGFua2Fqa3VtYXI5OSIsImEiOiJja3RzYjlxemQwYWY2MnBvMzBxczV6bHVyIn0.BlMzug6pTDIMl4kp_2zhqQ";
class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coords: "",
            filter: "",
            zoom: 3
        }
        this.mapContainer = React.createRef();
    }

    render() {
        console.log("filter data>>>", this.state.filter)
        return (
            <Fragment>
                <center><h2>Location App</h2></center>
                <div ref={this.mapContainer} className="map-container" />
                <hr/>
                <div id='storeContain'>
                    <center><h3>Location</h3></center>
                    <StoreDisplay storeloc={this.state.filter } />
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        fetch(storeUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data => {
                this.setState({ coords: data,filter:data});
                const map = new mapboxgl.Map({
                    container: this.mapContainer.current,
                    style: 'mapbox://styles/pankajkumar99/ckzjk5tnm00db14l9ur49pa15',
                    center: [78.96288, 20.593684],
                    zoom: this.state.zoom
                });
                data.forEach(element => {

                    let latitude = element.lat;

                    let longitude = element.lon;
                    new mapboxgl.Marker({
                        draggable: false,
                        color: "#1a9e1a"
                    })
                        .setLngLat([longitude, latitude])
                        .addTo(map)
                })
            }))
        

    }
}
export default Store;
