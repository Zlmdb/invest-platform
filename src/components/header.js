import React from 'react'
import { NavLink } from 'react-router-dom'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import styled from 'styled-components';
import 'styles/header.styl'

const HeaderContain = styled.div`
        font-size: 14px;
        background-color:#fff;
        color: #000;
        height:70px;
        display:flex;
        align-items:center;
        text-align:center;
        
        position:fixed;
        top:0;
        width:100%;
        z-index:10;
        `;
const Image = styled.img`
        width:0.48rem;
        height:0.47rem;
        margin-right:0.27rem;
        vertical-align:middle;
        `;
const HeaderLeft = styled.div`
        font-size: 0.24rem;
        color: #2A2927;
        flex:1
        `;
const HeaderRight = styled.div`
        font-size: 14px;
        color: #3D3A35;
        flex:1;
        display:flex;
        align-items:center;
        height:70px;
        box-sizing:border-box;
        `;
const HeaderRightTag = styled.div`
        padding:3px 15px;
        margin:0 20px;
        `;
const HeaderRightRegister = HeaderRightTag.extend`
       border:1px solid #C6AB92;
       border-radius:20px;
       color:#C6AB92;
       cursor:pointer;
       &:hover{
           background-color:rgba(198,171,146,0.2);
       }
        `;
const HeaderRightLogin = HeaderRightRegister.extend`
       background-color:#C6AB92;
       color:#fff;
       cursor:pointer;
       &:hover{
           background-color:#B08F70;
       }
        `;
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount = () => {
        // fetch(`/info/list`, {
        //     methods: 'POST',
        //     // credentials: 'include',//资格证书
        //     headers: {
        //         // 'Accept': 'application/json, text/plain, */*',
        //         // 'Content-Type': 'application/x-www-form-urlencoded'
        //         'Content-Type': 'application/json'
        //     },
        //     body: {
        //         page: 1
        //     }
        // })
        //     .then(
        //         response => response.json(),
        //         error => console.log('An error occurred.', error)
        //     )
        //     .then(
        //         json => console.log(json)
        //     )
        //     .catch(err => {
        //         console.error(err);
        //     })
    };

    render() {
        const logo = require('../assets/images/logo.png')
        return (
            <HeaderContain className={this.props.marginBottom?'headerMarginBottom':''}>
                <HeaderLeft><Image src={logo}></Image>溪谷全球</HeaderLeft>
                <HeaderRight>
                    <NavLink exact to='/' activeClassName='indexSelected' className="headerTag">网站首页</NavLink>
                    <NavLink to='/list' activeClassName='indexSelected' className="headerTag">产品列表</NavLink>
                    <HeaderRightLogin>登录</HeaderRightLogin>
                    <HeaderRightRegister>注册</HeaderRightRegister>
                </HeaderRight>
            </HeaderContain>
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
export default Header