import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import{ButtonContainer} from './Button';
import './Login.css';
export default class login extends Component {
    render() {
        return (
                <form action='#' method="POST">
                    <head><link rel="stylesheet" href="Login.css"/></head>
                    
                    <div id="login-box">
                        <h1>Login</h1>

                        <div class="form">
                            <div class="item">
                                <input type="text" placeholder="username" name="username" />
                            </div>

                            <div class="item">
                                <i></i>
                                <input type="password" placeholder="password" name="password" />
                            </div>
                        </div>
                        <div> <Link to='/products'>
                                    <ButtonContainer type="Submit">
                                        INICIAR SESION
                                    </ButtonContainer>
                                </Link>  </div>
                    </div>
                </form>
                )
    }
}