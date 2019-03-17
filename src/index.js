import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/App/App'
import CardsPage from './containers/CharacterCards/CardsPage/CardsPage'
import CardPage from './containers/CharacterCards/CardPage/CardPage'
import LocationPage from './containers/Locations/LocationPage'

import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render( 
    <BrowserRouter>
        <App>
            <Route exact path="/" component={ CardsPage }/>
            <Route path="/character/:id" component={ CardPage }/>
            <Route path="/location" component={LocationPage}/>
        </App>
    </BrowserRouter>, 
    document.getElementById('root')
);

serviceWorker.unregister()





