import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import App from 'view/app'
import About from 'view/about'
import Question from 'view/question'

export default function () {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={App} />
                    <Route path='/about' component={About} />
                    <Route path='/question' component={Question} />
                </div>
            </BrowserRouter>
        </div>
    )
}

