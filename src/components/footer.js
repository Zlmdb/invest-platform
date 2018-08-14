import React from 'react'
import styled from 'styled-components';
import 'styles/footer.styl'


const FooterLeft = styled.div`
        height:1rem;
        flex:1;
        font-size:0.14rem;
        color:#BDBDBD;
        display:flex;
        align-items:center;
        border-right:1px solid rgba(80,80,80,1);
        padding:0 20px;
        `;
const FooterCenter = styled.div`
        height:1rem;
        flex:1;
        font-size:0.17rem;
        color:#BDBDBD;
        border-right:1px solid rgba(80,80,80,1);
        box-sizing:border-box;
        // padding-left:20px;
        display:flex;
        `;
const FooterRight = styled.div`
        height:1rem;
        flex:1;
        font-size:0.17rem;
        color:#BDBDBD;
        box-sizing:border-box;
        padding-left:20px;
        display:flex;
        `;


class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div className="footer">
                <div className="footerItem">
                    <FooterLeft>
                        <div className="footerImg"></div>
                        <div className="footerLeft">溪谷是新型的互联网金融网站，由杭州地普好森有限公司全权运营，旨在向消费者提供可靠的金融产品服务，产品涵盖保险、基金、房产等。</div>
                    </FooterLeft>
                    <FooterCenter>
                        <div style={{ flex: 2 }}></div>
                        <div style={{ flex: 1, whiteSpace: 'nowrap', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ marginBottom: '10px' }}><span className='footerLineMargin'>--</span> 产品列表</div>
                            <div><span className='footerLineMargin'>--</span> 用户服务协议</div>
                        </div>
                        <div style={{ flex: 2 }}></div>
                    </FooterCenter>
                    <FooterRight>
                        <div style={{ flex: 2 }}></div>
                        <div style={{ flex: 1, whiteSpace: 'nowrap', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ marginBottom: '10px' }}><span className='footerLineMargin'>--</span> 投资热线</div>
                            <div><img src={require('../assets/images/phone.png')} style={{marginRight:'5px'}}/> 199 6743 0870</div>
                        </div>
                        <div style={{ flex: 2 }}></div>
                    </FooterRight>
                </div>
                <div className="minwen">© Copyright 2018 | Cesis Theme by Tranmautritam | All Rights Reserved</div>
            </div>
        )
    }
}

export default Footer


