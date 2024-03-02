import "tw-elements-react/dist/css/tw-elements-react.min.css";
import React, { useEffect } from 'react';
import Navbar from "../components/Layouts/Navbar";
import CardProduct from "../components/Fragments/CardProduct";
import { useState } from "react";

const products = [
    {
        id: 1,
        title: "Abibas",
        price: 1599999,
        image: "/images/shoes.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem aspernatur voluptatibus dicta, hic consectetur ullam aperiam commodi expedita neque?`
    },
    {
        id: 2,
        title: "Naiki",
        price: 1000000,
        image: "/images/shoes-2.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem aspernatur voluptatibus dicta, hic consectetur ullam aperiam commodi expedita neque?`
    },
    {
        id: 3,
        title: "Pume",
        price: 500000,
        image: "/images/shoes-3.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem aspernatur voluptatibus dicta, hic consectetur ullam aperiam commodi expedita neque?`
    }
    ,
    {
        id: 4,
        title: "Rebook",
        price: 1500000,
        image: "/images/shoes-4.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem aspernatur voluptatibus dicta, hic consectetur ullam aperiam commodi expedita neque?`
    }

];


const ProductsPage = () => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);

            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    const handleAddToCart = (id) => {

        if (cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            );
        }
        else {
            setCart([
                ...cart, { id, qty: 1 }
            ]);
        }
    }

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="flex">
                <div className="w-4/5 mt-5 flex flex-wrap border-r">

                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Image image={product.image} />
                            <CardProduct.Body title={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
                        </CardProduct>

                    ))}


                </div>
                <div className="w-1/5 mt-10 mx-5" >

                    <div className="mt-5">
                        <h1 className="text-xl text-blue-600 font-bold" >Shopping List</h1>
                        <div className="flow-root mt-5">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">

                                {
                                    cart.map((item) => {
                                        const product = products.find((product) => product.id === item.id);


                                        return (
                                            <li key={item} className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img
                                                        src={product.image}
                                                        alt={product.image}
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="text-base font-medium text-gray-900">
                                                            <h3>
                                                                <p className="font-bold">{product.title}</p>
                                                            </h3>
                                                            <p className="">

                                                                {(item.qty * product.price).toLocaleString('id-ID', {
                                                                    style: "currency",
                                                                    currency: "IDR",
                                                                })}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <p className="text-gray-500">Qty {item.qty}</p>

                                                        <div className="flex">
                                                            <button
                                                                type="button"
                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })}

                                <li>
                                    <p className="text-xl font-bold mt-10">Total price:</p>
                                    <p>Rp{" "}{(totalPrice).toLocaleString('id-ID', {
                                        styles: "currency",
                                        currency: "IDR"
                                    })}</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>



        </div>

    );
}


export default ProductsPage;


