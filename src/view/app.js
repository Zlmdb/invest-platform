import React from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import styled from 'styled-components';
import Header from 'compon/header'
import Solider from './solider/solider';
import 'styles/app.styl';


const Swiper = styled.div`
        background-color:#000;
        height:8.48rem;
        opacity:0.6973;
        `;
        //推荐产品
const RecommendedProducts= styled.div`
       background-color:rgb(240,242,245);
       padding:20px 20px;
        `;
const RecommendedProductsTitle= styled.div`
        color:#454950;
        font-size:0.5rem;
        text-align:center;

        `;
const RecommendedProductsLetter= styled.div`
        width:7.94rem;
        color:#8D8D8D;
        font-size:0.24rem;
        text-align:center;
        margin:0 auto;
        margin-top:20px;
        `;
const RecommendedCon= styled.div`
        // background-color:#999;
        padding:1rem;
        width:80%;
        margin:0 auto;
        display:flex;
        // height:56.4rem;
        `;
const RecommendedItem= styled.div`
        justify-content:space-between;
        width:3.78rem;
        height:5.64rem;
        border:1px solid #000;
        background-image:url(${require('../assets/images/recommendBk.png')});
        background-size:100% 100%;
        border-radius:6px;
        border:1px solid #E2E2E2;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        &:hover{
            box-shadow:0 0 20px #E2E2E2;
        }
        `;
const RecommendedItemCenter = RecommendedItem.extend`
        margin:0 1rem;
        `;
const RecommendSplitDownTitle = styled.div`
        font-size:0.2rem;
        color:#454950;
        `;
const RecommendSplitDownTurn = styled.div`
        font-size:0.8rem;
        color:#C6AB92;
        `;
const RecommendSplitDownDate = styled.div`
        font-size:0.15rem;
        color:#ADA29B;
        `;
const RecommendSplitDownKnow = styled.div`
        display:inline-block;
        font-size:0.14rem;
        background:#C6AB92;
        color:#fff;
        width:1.8rem;
        height:0.59rem;
        line-height:0.59rem;
        text-align:center;
        border-radius:0.3rem;
        `;

        //我们的优势
const Advantage = styled.div`
        height:5.64rem;
        background-image:url(${require('../assets/images/youshi.png')});
        background-size:100% 100%;
        text-align:center;
        display:flex;
        flex-direction:column;
        justify-content: center;
        `;
const AdvantageTitle = styled.div`
        color:#fff;
        font-size:0.57rem;
        `;
const AdvantageTitleEn = styled.div`
        color:#fff;
        font-size:0.24rem;
        margin-top:20px;
        `;
const AdvantageDetail = styled.div`
        background-color:#fff;
        `;
const AdvantageDetailCon = styled.div`
        background-color:#fff;
        width:80%;
        margin:0 auto;
        height:4.94rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        `;
const AdvantageDetailItem = styled.div`
        // width:100px;
        display:flex;
        align-items:flex-start;
        // align-items:center;
        // justify-content:space-between;
        `;
const AdvanceTitle = styled.div`
        font-size:0.3rem;
        color:#393835;
        `;
const AdvanceCon = styled.div`
        font-size:0.14rem;
        color:#8D8D8D;
        padding-top:20px;
        `;
        // 交易流程
const TransactionProcessL = styled.div`
        font-size:0.5rem;
        color:#454950;
        `;
const TransactionProcessLEn = styled.div`
        font-size:0.24rem;
        color:#8D8D8D;
        padding-top:20px;
        `;
const TransactionProcessImgxc= styled.div`
        background-image:url(${require('../assets/images/xc.png')});
        background-size:100% 100%;
        width:2.4rem;
        height:2.4rem;
        margin-bottom:20px;
        bordr-radius:50%;
        `;
const TransactionProcessImgxy = TransactionProcessImgxc.extend`
        background-image:url(${require('../assets/images/xy.png')});
        `;
const TransactionProcessImgqr = TransactionProcessImgxc.extend`
        background-image:url(${require('../assets/images/qr.png')});
        `;
const TransactionProcessImgxt = TransactionProcessImgxc.extend`
        background-image:url(${require('../assets/images/xt.png')});
        `;
const TransactionProcessLet= styled.div`
        font-size:0.2rem;
        color:#393835;
        `;
        // 合作伙伴
const CooperativePartnerImg = styled.div`
        background-image:url(${require('../assets/images/fang88.png')});
        background-size:100% 100%;
        width:2.75rem;
        height:1.32rem;
        margin-bottom:20px;
        border:1px solid #999;
        `;
const FooterLeft = styled.div`
height:1rem;
        flex:1;
        font-size:0.14rem;
        color:#BDBDBD;
        display:flex;
        align-items:center;
        border-right:1px solid #999;
        `;
const FooterCenter = styled.div`
height:1rem;
        flex:1;
        font-size:0.17rem;
        color:#fff;
        border-right:1px solid #999;
        `;
const FooterRight = styled.div`
height:1rem;
        flex:1;
        font-size:0.17rem;
        color:#BDBDBD;
        
        `;
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // const { sharedNum, expectedIncome, canUse } = this.props
        return (
            <div className="App">
                <Header></Header>
                {/*<Swiper>待确定文案</Swiper>*/}
                <Solider/>
                <RecommendedProducts>
                    <RecommendedProductsTitle>推荐产品</RecommendedProductsTitle>
                    <RecommendedProductsLetter>Design is everywhere. From the dress you’re wearing to the smartphone you’re holding, it’s design.</RecommendedProductsLetter>
                    <RecommendedCon>
                        <RecommendedItem>
                            <div className="recommendSplit"></div>
                            <div className="recommendSplit">
                                <RecommendSplitDownTitle>财富好望角租赁收益型美元基金</RecommendSplitDownTitle>
                                <RecommendSplitDownTurn>12.29<code className="percent">%</code></RecommendSplitDownTurn>
                                <RecommendSplitDownDate>七日年化收益率</RecommendSplitDownDate>
                                <RecommendSplitDownKnow>了解详情</RecommendSplitDownKnow>
                            </div>
                        </RecommendedItem>
                        <RecommendedItemCenter></RecommendedItemCenter>
                        <RecommendedItem></RecommendedItem>
                    </RecommendedCon>
                </RecommendedProducts>
                <Advantage>
                    <AdvantageTitle>我们的优势</AdvantageTitle>
                    <AdvantageTitleEn>- Advantages -</AdvantageTitleEn>
                </Advantage>
                <AdvantageDetail>
                    <AdvantageDetailCon>
                        <AdvantageDetailItem>
                            <div className="advanceNum">01</div>
                            <div className="advance">
                                <AdvanceTitle>最优回报</AdvanceTitle>
                                <AdvanceCon>专业金融分析团队严选优质产品，进行完善的尽职调查，并拥有一手稀缺资源，参考年回报率</AdvanceCon>
                            </div>
                        </AdvantageDetailItem>
                        <AdvantageDetailItem>
                            <div className="advanceNum">02</div>
                            <div className="advance">
                                <AdvanceTitle>资金安全</AdvanceTitle>
                                <AdvanceCon>平台运行稳定，资金管理严格，保证各项数据真实可靠，杜绝虚假信息，实力认证，安全放心 </AdvanceCon>
                            </div>
                        </AdvantageDetailItem>
                        <AdvantageDetailItem>
                            <div className="advanceNum">03</div>
                            <div className="advance">
                                <AdvanceTitle>智能平台</AdvanceTitle>
                                <AdvanceCon>人性化智能化的线上平台，浏览随心，24/7自动下单，账户直接查看收益，灵活便捷，简单理财</AdvanceCon>
                            </div>
                        </AdvantageDetailItem>
                        <AdvantageDetailItem>
                            <div className="advanceNum">04</div>
                            <div className="advance">
                                <AdvanceTitle>全球化服务</AdvanceTitle>
                                <AdvanceCon>平台覆盖境外保险,美国房产,美国商业地产，医疗服务，移民服务等，提供全方位、全球化的海外投资服务</AdvanceCon>
                            </div>
                        </AdvantageDetailItem>
                    </AdvantageDetailCon>
                </AdvantageDetail>
                {/*交易流程*/}
                <div className="TransactionProcess">
                    <TransactionProcessL>交易流程</TransactionProcessL>
                    <TransactionProcessLEn>- Tranaction Process -</TransactionProcessLEn>
                    <div className="TransactionProcessStep">
                        <div className="TransactionProcessI">
                            <TransactionProcessImgxc></TransactionProcessImgxc>
                            <TransactionProcessLet>选择产品</TransactionProcessLet>
                        </div>
                        <div className="TransactionProcessI">
                            <TransactionProcessImgxy></TransactionProcessImgxy>
                            <TransactionProcessLet>线上预约</TransactionProcessLet>
                        </div>
                        <div className="TransactionProcessI">
                            <TransactionProcessImgqr></TransactionProcessImgqr>
                            <TransactionProcessLet>签约认购</TransactionProcessLet>
                        </div>
                        <div className="TransactionProcessI">
                            <TransactionProcessImgxt></TransactionProcessImgxt>
                            <TransactionProcessLet>退出/续投</TransactionProcessLet>
                        </div>
                    </div>
                </div>
                {/*合作伙伴*/}
                <div className="CooperativePartner">
                    <TransactionProcessL>合作伙伴</TransactionProcessL>
                    <TransactionProcessLEn>- Partners -</TransactionProcessLEn>
                    <div className="CooperativePartnerStep">
                        <CooperativePartnerImg></CooperativePartnerImg>
                        <CooperativePartnerImg></CooperativePartnerImg>
                        <CooperativePartnerImg></CooperativePartnerImg>
                        <CooperativePartnerImg></CooperativePartnerImg>
                        <CooperativePartnerImg></CooperativePartnerImg>
                        <CooperativePartnerImg></CooperativePartnerImg>
                        <CooperativePartnerImg></CooperativePartnerImg>
                        <CooperativePartnerImg></CooperativePartnerImg>
                    </div>
                </div>
                {/*底部*/}
                <div className="footer">
                    <div className="footerItem">
                        <FooterLeft>
                            <div className="footerImg"></div>
                            <div className="footerLeft">是新型的互联网金融网站，由杭州地普好森有限公司全权运营，旨在向消费者提供可靠的金融产品服务，产品涵盖保险、基金、房产等。</div>
                        </FooterLeft>
                        <FooterCenter>
                            <div>-- 产品列表</div>
                            <div>-- 用户服务协议</div>
                        </FooterCenter>
                        <FooterRight>
                            <div>-- 投资热线</div>
                            <div>-- 400 900 6185</div>
                        </FooterRight>
                    </div>
                    <div className="minwen">© Copyright 2018 | Cesis Theme by Tranmautritam | All Rights Reserved</div>
                </div>
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
export default Index