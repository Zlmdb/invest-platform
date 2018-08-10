import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Index from 'view/index'
import List from 'view/list'
import Detail from 'view/detail'
import About from 'view/about'
import Question from 'view/question'

export default function () {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Index} />
                    <Route path='/list' component={List} />
                    <Route path='/detail' component={Detail} />
                    <Route path='/about' component={About} />
                    <Route path='/question' component={Question} />
                </div>
            </BrowserRouter>
        </div>
    )
}

