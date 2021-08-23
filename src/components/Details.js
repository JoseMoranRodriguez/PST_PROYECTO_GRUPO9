import React,  { Component } from 'react'
import{ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import{ButtonContainer} from './Button';
export default class Details extends Component{
    render(){
        return(
           <ProductConsumer>
               {(value)=>{
                 const{id,company,img,info,price,title,inCart}=
                  value.detailProduct;
                  return(
                    <div className="container py">
                        {/* titulo */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center
                            text-slanted text-blue my-5">
                               <h1>{title}</h1> 
                            </div>
                        </div>
                        {/* termina titulo */}
                        {/* informacion del producto */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                            <img src={img} className="img-fluid" alt="product"/>
                            </div>
                            {/* texto del producto */}
                            <div className="col-10 mx-auto col-md-6 my-3 
                            text-capitalize">
                               <h2>producto:{title}</h2>
                               <h4 className="text-title text-uppercase 
                               text-muted mt-3 mb-2">
                                 Proveido por: <span className="text-uppercase">
                                     {company} </span>  
                               </h4>
                               <h4 className="text-blue">
                                   <strong>
                                       precio: <span>$</span>
                                       {price}
                                   </strong>
                               </h4>
                               <p className="text-capitalize font-weight-bold 
                               mt-3 mb-0">
                                   informacion sobre el producto:
                               </p>
                               <p className="text-muted lead">{info}</p>
                               {/* botones */}
                               <div>
                                <Link to='/'>
                                    <ButtonContainer>
                                        Regreso al Producto
                                    </ButtonContainer>
                                </Link>   
                                <ButtonContainer 
                                    cart
                                    disabled={inCart ? true: false}
                                        onClick={()=> {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                    >
                                        {inCart ? "En el carro" : "Agregar al carro"}
                                    </ButtonContainer>
                               </div>
                            </div>
                        </div>
                    </div>  
                  )
               }}
           </ProductConsumer>
        )
    }

}