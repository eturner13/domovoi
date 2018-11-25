import React, { Component } from 'react';
import Light from '../../components/light/light';
import axios from 'axios';

class Lights extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lightList: []
        }
    }

    async componentDidMount() {
        await this.getLightList();
    }

    async getLightList() {
        const result = await axios.get(`http://localhost:420/lights/getLights`);
        await this.setState({lightList: result.data})
    }

  	render() {
        const lightList = this.state.lightList.map((light) => {
            return <Light light={light} key={light.id}/>
        })

    	return (
      		<div className="lights">
                {lightList}
      		</div>
    	);
  	}
}

export default Lights;