import React from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'

class Qustion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // const { sharedNum, expectedIncome, canUse } = this.props
        return (
            <div className="profile_invite_income">
                <p className="title">
                    邀请详情ww
          <span className="line" />
                </p>
                <div className="profile_income_tag">
                    <p className="profile_income_num"></p>
                    <p className="profile_income_desc">已分享人数ww</p>
                    <div className="line" />
                </div>
                <div className="profile_income_tag">
                    <p className="profile_income_num"></p>
                    <p className="profile_income_desc">预计可提现ww</p>
                    <div className="line" />
                </div>
                <div className="profile_income_tag">
                    <p className="profile_income_num" style={{ color: '#3CAAE6' }}>
                        
                    </p>
                    <p className="profile_income_desc">可提现金额ww</p>
                </div>
                <div style={{ clear: 'both' }} />
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
export default Qustion