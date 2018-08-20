import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
// import styled from 'styled-components';
import {fetchMyInvestInit} from 'api/myinvest'
import Item from './item'



// const SearchPhone = styled.div`
//         margin-left:50px;
//         `;


class MyInvest extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let mobile = window.localStorage.getItem('mobile')
        this.props.fetchMyInvestInit(mobile, 1)
    }
    // shouldComponentUpdate(nextProps, nextState) {
    // }
    empty() {
        // if(this.state.source){
        return (
            <div style={{ textAlign: 'center' }}>
                <img src={require('../../../assets/images/appointEmpty.png')} />
                <div style={{ display: 'inline-block' }}>
                    <div style={{ marginBottom: '20px' }}>你还没有投资任何产品</div>
                    <div onClick={this.toList} style={{ width: '1.82rem', height: '0.46rem', lineHeight: '0.46rem', backgroundColor: "#C6AB92", color: '#fff', margin: '0 auto', cursor: 'pointer' }}>去看看吧</div>
                </div>
            </div>
        )
        // }
        // return null
    }
    toList() {
        this.props.history.push('/list')
    }
    render() {
        let _ = this
        let { myinvestinit } = this.props
        let obj = myinvestinit.data, arrNode = [],allMoney=0
        if (obj) {
            if (obj.investments.length > 0) {
                obj.investments.forEach(function (value, index) {
                    arrNode.push(<Item  item={value} key={index}></Item>)
                    allMoney += parseFloat(value.principal) + parseFloat(value.interest)
                })

            }
        }
        console.log(allMoney)
        return (
            <div style={{ }}>
                <div style={{ paddingLeft: '15%', margin: '0.56rem 0' }}><img style={{ height: '0.33rem' }} src={require('../../../assets/images/myinvest.png')} /></div>
                {!!arrNode.length>0 ? '' : this.empty()}
                <div style={{display:!!arrNode.length>0 ? '' : 'none',width:'70%',margin:'0 auto', backgroundColor: '#FAFAFA',padding:'0.54rem' ,marginBottom:'50px'}}>
                    <div>
                        <div style={{ paddingBottom: '20px', borderBottom:'1px solid #E2E2E2',marginBottom:'35px'}}>
                            <span style={{ marginRight: '15px', fontSize: '0.36rem', fontWeight: "bold" }}>总资产:</span><span style={{ color: '#C6AB92', fontSize: '0.64rem' }}>{allMoney + '$'}</span>
                        </div>
                        {arrNode}
                        
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const myinvestinit = state.myinvestinit

    return {
        myinvestinit: myinvestinit
    }
}
function mapDispatchToProps(dispatch) {
    
    return {
        fetchMyInvestInit: (mobile, page) => dispatch(fetchMyInvestInit(mobile, page))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyInvest))