import './App.css'

import React from 'react'

import {  Route } from 'wouter'

import Vector from './assets/Vector2.png'

import Quotes from './assets/quotes.png'

import Home from './pages/Home'

import Register from './pages/Register'

import Address from './pages/Address'

import Card from './pages/Card'

import {FormContext} from './context/FormContext'

function App() {

    return (<>

        <div className='info-div'>

            <article className='description-article'>

            Nuwe es la platforma que convierte el desarrollo profesional, la búsquda de trabajo y la conexiones de personas y empresas en un juego. Haciendo que puedas centrarte en lo que te gusta, programar, diseñar, crear, planear...
                <img src={Vector} className='vector2-img'/>

                <img src={Quotes} className='quotes-img'/>

            </article>

        </div>

        <Route component={Home} path="/"  />

        <FormContext>

            <Route component={Register} path="/register/:registerTo"  />

            <Route component={Address} path="/address"  />

            <Route component={Card} path="/cardData"  />

        </FormContext>

    </>)

}


export default App

