import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth';
import { useCart } from '../context/cart' ;
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const [auth,setAuth] = useAuth() ;
    const [cart,setCart] = useCart() ;
    const navigate = useNavigate() ;
  return(
    <Layout><div className="container"></div>
        <div className="row">
            <div className="col-md-12">
                <h1 className="text-center bg-light p-2 mb-1">
                    {`Hello ${auth?.token && auth?.user?.name}`}
                </h1>
                <h4 className="text-center">
                    {cart?.length > 1 
                    ? `You have ${cart.length} items in your cart ${auth.token ? "" : "Please login to checkout"}`
                    : "Your Cart is Empty"}
                </h4>
            </div>
        </div>
    </Layout>
   )

}

export default CartPage