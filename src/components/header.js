import React from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import styled from 'styled-components';

const HeaderContain = styled.div`
        font-size: 14px;
        background-color:#fff;
        color: #000;
        height:70px;
        display:flex;
        align-items:center;
        `;
const HeaderLeft = styled.div`
        font-size: 24px;
        color: #2A2927;
        flex:1
        `;
const HeaderRight = styled.div`
        font-size: 14px;
        color: #C6AB92;
        flex:1;
        display:flex;
        align-items:center;
        `;
const HeaderRightTag = styled.div`
        padding:3px 15px;
        margin:0 20px;
        `;
const HeaderRightRegister = HeaderRightTag.extend`
       border:1px solid #C6AB92;
       border-radius:20px;
       color:#C6AB92;
        `;
const HeaderRightLogin = HeaderRightRegister.extend`
       background-color:#C6AB92;
       color:#fff;
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
        // const { sharedNum, expectedIncome, canUse } = this.props
        return (
            <HeaderContain>
                <HeaderLeft>CHAiR</HeaderLeft>
                <HeaderRight>
                    <HeaderRightTag>网站首页</HeaderRightTag>
                    <HeaderRightTag>产品列表</HeaderRightTag>
                    <HeaderRightLogin>登陆</HeaderRightLogin>
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