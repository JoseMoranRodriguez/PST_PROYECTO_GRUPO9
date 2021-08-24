import React, { Component } from 'react'
import mapa from "./Cart/mapa.jpeg";
export default class Mapa extends Component {
    render() {
        return (
            <div>
                <h6 className>
                <img src={mapa} alt="mapa"className="center" />
                </h6>
            </div>
        )
    }
}
