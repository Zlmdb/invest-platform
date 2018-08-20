import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { fetchMyAppointInit } from 'api/myappoint'
import Item from '../../list/item'
import styled from 'styled-components';



// const SearchPhone = styled.div`
//         margin-left:50px;
//         `;


class MyAppointer extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            source:"yes"
        }
        this.cancelCallback = this.cancelCallback.bind(this)
        this.init = this.init.bind(this)
        this.toList = this.toList.bind(this)
    }

    
    componentDidMount() {
        this.init()
    }
    init(){
        let mobile = window.localStorage.getItem('mobile')
        this.props.fetchMyAppointInit(mobile, 1)
    }
    //取消成功回调，传给itme组件
    cancelCallback(){
        this.init()
    }
    // shouldComponentUpdate(nextProps, nextState) {
    // }
    empty(){
        // if(this.state.source){
            return(
                    <div style={{textAlign:'center'}}>
                        <img src={require('../../../assets/images/appointEmpty.png')}/>
                        <div style={{display:'inline-block'}}>
                            <div style={{marginBottom:'20px'}}>你还没有预约任何产品</div>
                            <div onClick={this.toList} style={{ width: '1.82rem', height: '0.46rem',lineHeight:'0.46rem', backgroundColor:"#C6AB92",color:'#fff',margin:'0 auto',cursor:'pointer'}}>去看看吧</div>
                        </div>
                    </div>
            )
        // }
        // return null
    }
    toList(){
        this.props.history.push('/list')
    }
    render() {
        let _=this
        let { myappointinit } = this.props
        let obj = myappointinit.data, arrNode = []
        if (obj) {
            if (obj.projects.length>0){
                obj.projects.forEach(function (value, index) {
                    arrNode.push(<Item appointmentCancel cancelCallback={_.cancelCallback} clickEnable item={value} key={index}></Item>)
                })

            }
        }
        return (
            <div style={{ flex: 1, display: 'flex', flexFlow: 'column'}}>
                <div style={{paddingLeft:'15%',margin:'0.56rem 0'}}><img style={{height:'0.33rem'}} src={require('../../../assets/images/myappoint.png')}/></div>
                <div style={{ flex: 1,display: 'flex',alignItems:'center',justifyContent:'center',flexFlow:'column'}}>
                    {!!arrNode.length>0 ? arrNode : this.empty()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const myappointinit = state.myappointinit
    // console.log(myappointinit)
    return {
        myappointinit: myappointinit
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchMyAppointInit: (mobile, page) => dispatch(fetchMyAppointInit(mobile, page))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyAppointer))