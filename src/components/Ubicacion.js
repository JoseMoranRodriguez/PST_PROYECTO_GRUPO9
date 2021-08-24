import React, { Component } from 'react'
import ventana from "./Cart/ventana.jpeg";
export default class Ubicacion extends Component {
    render() {
        return (
            <div>
                <h6 className>
                <img src={ventana} alt="ventana"className="center" />
                </h6>
            </div>
        )
    }
}
