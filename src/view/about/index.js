import React from 'react'
import styled from 'styled-components';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchPosts, fetchPosts2} from 'api/about'
import { we_chat_login } from 'action/index'
import { Button } from 'antd';


const Title = styled.h1`
        font-size: 1.5em;
        color: ${props => props.primary ? 'palevioletred' : 'purple'};
        `;

class Income extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        let { increaseAction, fetchpost, fetchpost2} = this.props
        increaseAction()
        fetchpost('reactjs')
        fetchpost2('reactjs')
    }
    render() {
        return (
            <div className="profile_invite_income">
                <p className="title">
                    邀请详情
          <span className="line" />
                </p>
                <div className="profile_income_tag">
                    <p className="profile_income_num"></p>
                    <p className="profile_income_desc">已分享人数</p>
                    <div className="line" />
                </div>
                <div className="profile_income_tag">
                    <p className="profile_income_num"></p>
                    <p className="profile_income_desc">预计可提现</p>
                    <div className="line" />
                </div>
                <div className="profile_income_tag">
                    <p className="profile_income_num" style={{ color: '#3CAAE6' }}>
                        
                    </p>
                    <p className="profile_income_desc">可提现金额</p>
                </div>
                <Button type="primary">Button</Button>
                <Title primary>Hello World</Title>
                <div style={{ clear: 'both' }} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const value = state.about
    console.log('value')
    console.log(value)
    const value2 = state.about2
    console.log('value2')
    console.log(value2)
    const value3 = state.about3
    console.log('value3')
    console.log(value3)
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        increaseAction: () => dispatch(we_chat_login()),
        fetchpost: (subreddit) => dispatch(fetchPosts(subreddit)),
        fetchpost2: (subreddit) => dispatch(fetchPosts2(subreddit))
        // increaseAction: bindActionCreators(increaseAction, dispatch)
    }
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ increaseAction: increaseAction}, dispatch)
// }
export default connect(mapStateToProps, mapDispatchToProps)(Income)
// export default Income