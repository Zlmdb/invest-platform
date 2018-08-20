import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchInit } from 'api/detail'
import Header from 'compon/header'
import Footer from 'compon/footer'
import MyAppointer from './myAppointer'
import MyInvest from './myInvest'
import Search from './search'
import 'styles/me.styl'



class Me extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillMount() {

    }
    componentDidMount() {
        // let { fetchInit } = this.props
        // fetchInit(this.id)
        window.scrollTo(0, 0)
        //
    }
    componentWillReceiveProps(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {
    }

    // shouldComponentUpdate(nextProps, nextState) {
    // }
    render() {
        return (
            <div style={{minHeight:'100%',display:'flex',flexFlow:'column'}}>
                <div style={{ flex: 1, display: 'flex', flexFlow: 'column'}}>
                    <Header></Header>
                    <Search></Search>
                    <Route path="/me/appointer" component={MyAppointer}></Route>
                    <Route path="/me/invest" component={MyInvest}></Route>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // const value = state.detailInit
    
    return {
        // value: value
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // fetchInit: (data) => dispatch(fetchInit(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Me)