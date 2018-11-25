import React, { Component } from 'react';
import axios from 'axios';

class Light extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async turnLightOn(id) {
        await axios.get(`http://localhost:420/lights/${id}/on/0`);
    }
    async turnLightOff(id) {
        await axios.get(`http://localhost:420/lights/${id}/off/0`);
    }

    render() {
        const light = this.props.light
        return <div className="light">
            <div className="title">
                {this.props.light.area} - {this.props.light.name}
            </div>
            <div className="details">
                <div>
                    <div>IP:</div>
                    <div>Zone:</div>
                    <div>Type:</div>
                </div>
                <div>
                    <div>{light.ip}</div>
                    <div>{light.zone}</div>
                    <div>{light.type}</div>
                </div>
                <div>
                    <button onClick={this.turnLightOn.bind(this, light.id)}>On</button>
                    <button onClick={this.turnLightOff.bind(this, light.id)}>Off</button>
                </div>
            </div>
        </div>
    }
}

export default Light;