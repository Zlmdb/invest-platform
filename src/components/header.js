import React from 'react'
import {NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { Menu, Dropdown, Icon, message, Modal, Button} from 'antd';
import LoginForm from './loginForm'
import { fetchLogin } from 'api/login';
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
        width:1.66rem;
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
        this.state = { 
            visible: false,
            loading: false,
            phone:'',
            sliceEnd:'',
            ma:'',
            login:true,//默认登录了
            loginButtonEnable:true//登录按钮
        }
        this.getphone = this.getphone.bind(this)
        this.getma = this.getma.bind(this)
        this.threeClick = this.threeClick.bind(this)
        this.loginDisabled=this.loginDisabled.bind(this)
    }
    componentWillMount(){//在这里判断是否登录
        const login=window.localStorage.getItem('login')
        const mobile = window.localStorage.getItem('mobile')
        //手机号截取
        let sliceEnd = ''
        if (mobile){
            if (mobile.length === 11) {
                let slice = mobile.substr(3, 4)
                sliceEnd = mobile.replace(slice, '****')
            } else if (mobile.length === 10) {
                let slice = mobile.substr(3, 3)
                sliceEnd = mobile.replace(slice, '***')
            }
        }
        if (login==='yes'){
            this.setState({
                login:true,
                sliceEnd: sliceEnd
            })
        }else{
            this.setState({
                login: false,
                sliceEnd: sliceEnd
            })
        }
    }
    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.visible === 'yes') {//接收detail页面传来的visible
            this.setState({
                visible: true
            })
        }
        if (nextProps.loginData&&nextProps.loginData.status===200){
            const mobile = window.localStorage.getItem('mobile')
            //手机号截取
            let sliceEnd = ''
            if (mobile.length === 11) {
                let slice = mobile.substr(3, 4)
                sliceEnd = mobile.replace(slice, '****')
            } else if (mobile.length === 10) {
                let slice = mobile.substr(3, 3)
                sliceEnd = mobile.replace(slice, '***')
            }
            this.setState({
                visible: false,
                login:true,
                sliceEnd: sliceEnd
            })
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    // 点击提交
    handleOk = (e) => {
        let { fetchLogin } = this.props
        fetchLogin(this.state.phone,this.state.ma)
    }
    getphone(arg){//传给loginForm.js,获取phone
        this.setState({
            phone: arg
        });
    }
    getma(arg) {//传给loginForm.js,获取ma
        this.setState({
            ma: arg
        });
    }
    handleCancel = (e) => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    }
    threeClick({ key }){
        if (key === 'signOut') {
            // 退出操作
            // message.info(`Click on item ${key}`);
            window.localStorage.setItem('login','')
            window.localStorage.setItem('mobile','')
            this.setState({
                login:false
            })
        }
    };
    loginDisabled(arg){
        //判断姓名不能为空和不能有空格，同时判断手机号格式和验证码格式，来解禁确定按钮
        // var regu = "^[ ]+$"; var re = new RegExp(regu);
        if (arg) {
       
            this.setState({
                loginButtonEnable: true
            })
        } else {
             // console.log("chenggong")
            this.setState({
                loginButtonEnable: false
            })
        }
    }
    module(){
        const menu = (
            <Menu onClick={this.threeClick}>
                <Menu.Item>
                    <Link to="/me/appointer">我的预约</Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                    <Link to="/me/invest">我的投资</Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="signOut">
                    退出登录
                </Menu.Item>
            </Menu>
        );
        return(
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link">
                    {this.state.sliceEnd} <Icon type="down" />
                </a>
            </Dropdown>
        )
    }
    render() {
        const logo = require('../assets/images/logoletter.png')
        return (
            <HeaderContain className={this.props.shadowBottom?'headerMarginBottom':''}>
                <HeaderLeft><Image src={logo}></Image></HeaderLeft>
                <HeaderRight>
                    <NavLink exact to='/' activeClassName='indexSelected' className="headerTag">网站首页</NavLink>
                    <NavLink to='/list'  activeClassName='indexSelected' className="headerTag">产品列表</NavLink>
                    {!this.state.login &&<HeaderRightLogin onClick={this.showModal}>登录</HeaderRightLogin>}
                    {!this.state.login && <HeaderRightRegister onClick={this.showModal}>注册</HeaderRightRegister>}
                    {this.state.login && this.module()}
                </HeaderRight>
                <Modal
                    title=""
                    centered
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button  disabled={this.state.loginButtonEnable} key="submit" type="primary" className={this.state.loginButtonEnable?'loginSubmitNo':'loginSubmitYes'} loading={this.state.loading} onClick={this.handleOk} block>登录</Button>
                    ]}
                >
                    <LoginForm loginDisabled={this.loginDisabled} getphone={this.getphone} getma={this.getma}></LoginForm>
                </Modal>
            </HeaderContain>
        )
    }
}

function mapStateToProps(state) {
    const value = state.login
    // console.log(value)
    if (value&&value.status===200){
        window.localStorage.setItem('login','yes')
    }
    return {
        loginData: value
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchLogin: (phone, ma) => dispatch(fetchLogin(phone,ma))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);