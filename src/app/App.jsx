import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './index.css';
import Home from './pages/home';

import { CookiesProvider } from 'react-cookie';
"use client";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navBar/navBar";
import { Shop } from "./shop/shop";
import { Contacto } from "./contacto";
import { Carrito } from "./carrito/carrito";
import { ChakraProvider } from "@chakra-ui/react";
import { ProductDetails } from "./productDetails/productDetails";
import { ShopCategoria } from "./shop/shopCategoria"
import { ShopContextProvider } from "../context/shop-context";
import { ShopSearch } from "./shop/shopSearch";
import { DetallesPedido } from "./detallesPedido/DetallesPedidoView";
import { MisPedidos } from "./misPedidos/misPedidos";
import { ToastContainer } from "react-toastify";

function App(){
  return (
    <CookiesProvider>
        <Router>
          <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '150vh' }}>
            <Navbar />

            <div style={{ flex: '1' }}>
              <Routes>
                <Route path='/' element={< Home />}></Route>
                <Route path="/mascotas_categoria/:category"></Route>
                

              </Routes>
            </div>

            <Footer />
          </div>
        </Router>
      </CookiesProvider>
  );
}



