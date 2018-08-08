import React from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import styled from 'styled-components';
import Header from 'compon/header'
import Footer from 'compon/footer'
import Solider from './solider/solider';
import 'styles/app.styl';


const Swiper = styled.div`
        background-color:#000;
        height:8.48rem;
        opacity:0.6973;
        `;
        //推荐产品
const RecommendedProducts= styled.div`
       background-color:#fff;
       padding:1.1rem 20px 20px 20px;
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
        // border:1px solid #000;
        background-image:url(${require('../assets/images/recommendBk.png')});
        background-size:100% 100%;
        border-radius:6px;
        // border:1px solid #E2E2E2;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        &:hover{
            box-shadow:0 0 20px #E4D4C6;
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
        background-color:#FAFAFA;
        `;
const AdvantageDetailCon = styled.div`
        // background-color:#fff;
        width:80%;
        margin:0 auto;
        height:4.94rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        text-align:left;
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
const CooperativePartnerImg1 = styled.div`
        background-image:url(${require('../assets/images/1.png')});
        background-size:100% 100%;
        width:2.75rem;
        height:1.32rem;
        margin-bottom:20px;
        // border:0.5px solid #999;
        `;
const CooperativePartnerImg2 = CooperativePartnerImg1.extend`
        background-image:url(${require('../assets/images/2.png')});
        `;
const CooperativePartnerImg3 = CooperativePartnerImg1.extend`
        background-image:url(${require('../assets/images/3.png')});
        `;
const CooperativePartnerImg4 = CooperativePartnerImg1.extend`
        background-image:url(${require('../assets/images/4.png')});
        `;
const CooperativePartnerImg5 = CooperativePartnerImg1.extend`
        background-image:url(${require('../assets/images/5.png')});
        `;
const CooperativePartnerImg6 = CooperativePartnerImg1.extend`
        background-image:url(${require('../assets/images/6.png')});
        `;
const CooperativePartnerImg7 = CooperativePartnerImg1.extend`
        background-image:url(${require('../assets/images/7.png')});
        `;
const CooperativePartnerImg8 = CooperativePartnerImg1.extend`
        background-image:url(${require('../assets/images/8.png')});
        `;
const CenterLine = styled.div`
        width:150px;
        border:1px solid #C6AB92;
        margin:0 auto;
        margin-top:30px;
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
                    <RecommendedProductsTitle><img alt="" style={{width:'2rem'}} src={require('../assets/images/recommendProduct.png')}/></RecommendedProductsTitle>
                    <RecommendedProductsLetter>Design is everywhere. From the dress you’re wearing to the smartphone you’re holding, it’s design.</RecommendedProductsLetter>
                    <CenterLine></CenterLine>
                    <RecommendedCon>
                        <RecommendedItem>
                            <div className="recommendSplitUp"></div>
                            <div className="recommendSplitDown">
                                <RecommendSplitDownTitle>财富好望角租赁收益型美元基金</RecommendSplitDownTitle>
                                <RecommendSplitDownTurn>12.29<code className="percent">%</code></RecommendSplitDownTurn>
                                <RecommendSplitDownDate>七日年化收益率</RecommendSplitDownDate>
                                <RecommendSplitDownKnow>了解详情</RecommendSplitDownKnow>
                            </div>
                        </RecommendedItem>
                        <RecommendedItemCenter>
                            <div className="recommendSplitUp"></div>
                            <div className="recommendSplitDown">
                                <RecommendSplitDownTitle>财富好望角租赁收益型美元基金</RecommendSplitDownTitle>
                                <RecommendSplitDownTurn>12.29<code className="percent">%</code></RecommendSplitDownTurn>
                                <RecommendSplitDownDate>七日年化收益率</RecommendSplitDownDate>
                                <RecommendSplitDownKnow>了解详情</RecommendSplitDownKnow>
                            </div>
                        </RecommendedItemCenter>
                        <RecommendedItem>
                            <div className="recommendSplitUp"></div>
                            <div className="recommendSplitDown">
                                <RecommendSplitDownTitle>财富好望角租赁收益型美元基金</RecommendSplitDownTitle>
                                <RecommendSplitDownTurn>12.29<code className="percent">%</code></RecommendSplitDownTurn>
                                <RecommendSplitDownDate>七日年化收益率</RecommendSplitDownDate>
                                <RecommendSplitDownKnow>了解详情</RecommendSplitDownKnow>
                            </div>
                        </RecommendedItem>
                    </RecommendedCon>
                </RecommendedProducts>
                <Advantage>
                    <AdvantageTitle><img alt="" style={{ width: '2.83rem' }} src={require('../assets/images/ourAdvantance.png')} /></AdvantageTitle>
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
                    <TransactionProcessL><img alt="" style={{ width: '1.98rem' }} src={require('../assets/images/transactionProcess.png')} /></TransactionProcessL>
                    <TransactionProcessLEn>- Transaction Process -</TransactionProcessLEn>
                    <div className="TransactionProcessStep">
                        <div className="TransactionProcessI">
                            <TransactionProcessImgxc></TransactionProcessImgxc>
                            <TransactionProcessLet>选择产品</TransactionProcessLet>
                        </div>
                        <div className="TransactionProcessI arrow">
                            <img alt="" src={require('../assets/images/arrow.png')}/>
                        </div>
                        <div className="TransactionProcessI">
                            <TransactionProcessImgxy></TransactionProcessImgxy>
                            <TransactionProcessLet>线上预约</TransactionProcessLet>
                        </div>
                        <div className="TransactionProcessI arrow">
                            <img alt="" src={require('../assets/images/arrow.png')} />
                        </div>
                        <div className="TransactionProcessI">
                            <TransactionProcessImgqr></TransactionProcessImgqr>
                            <TransactionProcessLet>签约认购</TransactionProcessLet>
                        </div>
                        <div className="TransactionProcessI arrow">
                            <img alt="" src={require('../assets/images/arrow.png')} />
                        </div>
                        <div className="TransactionProcessI">
                            <TransactionProcessImgxt></TransactionProcessImgxt>
                            <TransactionProcessLet>退出/续投</TransactionProcessLet>
                        </div>
                    </div>
                </div>
                {/*合作伙伴*/}
                <div className="CooperativePartner">
                    <TransactionProcessL><img alt="" style={{ width: '1.95rem' }} src={require('../assets/images/cooperativePartner.png')} /></TransactionProcessL>
                    <TransactionProcessLEn>- Partners -</TransactionProcessLEn>
                    <div className="CooperativePartnerStep">
                        <CooperativePartnerImg1></CooperativePartnerImg1>
                        <CooperativePartnerImg2></CooperativePartnerImg2>
                        <CooperativePartnerImg3></CooperativePartnerImg3>
                        <CooperativePartnerImg4></CooperativePartnerImg4>
                        <CooperativePartnerImg5></CooperativePartnerImg5>
                        <CooperativePartnerImg6></CooperativePartnerImg6>
                        <CooperativePartnerImg7></CooperativePartnerImg7>
                        <CooperativePartnerImg8></CooperativePartnerImg8>
                    </div>
                </div>
                {/*底部*/}
                <Footer></Footer>
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