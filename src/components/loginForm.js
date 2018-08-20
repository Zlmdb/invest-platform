import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Button, Input,Checkbox } from 'antd';
import { fetchMa } from 'api/ma';


class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            ma: '',
            maButtonEnable:true,//发送按钮
            
        }
        this.phoneChange = this.phoneChange.bind(this)
        this.maChange = this.maChange.bind(this)
        this.sendMa = this.sendMa.bind(this)
    }
    phoneChange(e){
        let phone = e.target.value
        this.setState({
            phone: phone
        })
        window.localStorage.setItem('mobile',phone)
        this.props.getphone(phone)//传给modle,提交用
        //判断手机号格式是否正确，来解禁发送验证码按钮
        if (/^1[3|4|5|7|8][0-9]{9}$/.test(phone) || /^[0-9]{10}$/.test(phone)) {
        // console.log("chenggong")
            this.setState({
                maButtonEnable: false
            })
        } else {
            this.setState({
                maButtonEnable: true
            })
        }
        //同时判断手机号格式和验证码格式，来解禁确定按钮
        if ((/^1[3|4|5|7|8][0-9]{9}$/.test(phone) || /^[0-9]{10}$/.test(phone)) && /^[0-9]{4}$/.test(this.state.ma)) {
        // console.log("chenggong")
            this.props.loginDisabled(false)
        } else {
            this.props.loginDisabled(true)
        }
    }
    maChange(e){
        let ma = e.target.value
        this.setState({
            ma: ma
        })
        this.props.getma(ma)//传给modle,提交用
        if (/^1[3|4|5|7|8][0-9]{9}$/.test(this.state.phone) || /^[0-9]{10}$/.test(this.state.phone)) {
            // console.log("chenggong")
            this.setState({
                maButtonEnable: false
            })
        } else {
            this.setState({
                maButtonEnable: true
            })
        }
        //同时判断手机号格式和验证码格式，来解禁确定按钮
        if ((/^1[3|4|5|7|8][0-9]{9}$/.test(this.state.phone) || /^[0-9]{10}$/.test(this.state.phone)) && /^[0-9]{4}$/.test(ma)) {
            // console.log("chenggong")
            this.props.loginDisabled(false)
        } else {
            this.props.loginDisabled(true)
        }
    }
    sendMa(){
        console.log('fasongyanzhengma')
        let { fetchMa } = this.props
        fetchMa(this.state.phone)
    }
    render() {
        return (
            <div>
                <div style={{textAlign:'center',marginBottom:'0.5rem'}}>
                    <img  style={{width:'3.32rem'}} src={require('../assets/images/logoletter.png')}/>
                </div>
                <div style={{ color:'#C6AB92',fontSize:'0.3rem',textAlign:'center',marginBottom:'20px'}}>
                    <span style={{ paddingBottom: '5px', borderBottom:'3px solid #C6AB92',fontWeight:'bold'}}>短信登录</span>
                </div>
                <div style={{position:'relative'}}>
                    <Input className="inputFocus" placeholder="手机号" value={this.state.phone} onChange={this.phoneChange} /><Button disabled={this.state.maButtonEnable} style={{ position: 'absolute', top: '0px', right: '10px', border: 'none', color:this.state.maButtonEnable?'#BDBDBD': '#C6AB92', fontSize: '12px', background:'transparent'}} onClick={this.sendMa}>发送二维码</Button>
                </div>
                <div style={{marginTop:'20px'}}>
                    <Input className="inputFocus" placeholder="验证码" value={this.state.ma} onChange={this.maChange}/>
                </div>
                <div>温馨提示：未注册房88帐号的手机号，登录时将自动注册，且代表您已同意《用户服务协议》</div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchMa: (data) => dispatch(fetchMa(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);