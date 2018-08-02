import React from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import logo from '../logo.svg';
import 'styles/app.styl';
class Income extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // const { sharedNum, expectedIncome, canUse } = this.props
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
        </p>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {}
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators({}, dispatch)
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Income)
export default Income