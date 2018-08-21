import React from 'react'
import styled from 'styled-components';


const SearchCon = styled.div`
        background-color:#3D3A35;
        font-size:0.24rem;
        color:#fff;
        display:flex;
        align-items:center;
        height:145px;
        margin-top:70px;
        padding-left:15%;
        `;
const SearchIcon = styled.div`
        background-color:#D8D8D8;
        border-radius:50%;
        height:95px;
        width:95px;
        `;
const SearchPhone = styled.div`
        margin-left:50px;
        font-size:0.24rem;
        `;


class Search extends React.Component {
    constructor(props) {
        super(props)

    }
    componentWillMount() {

    }
    componentDidMount() {
        
    }
    componentWillReceiveProps(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {
    }

    // shouldComponentUpdate(nextProps, nextState) {
    // }
    render() {
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


        return (
            <SearchCon>
                <SearchIcon>
                    <img style={{width:'100%',height:'100%'}} src={require('../../assets/images/userLogo.png')}></img>
                </SearchIcon>
                <SearchPhone>{sliceEnd}</SearchPhone>
            </SearchCon>
        )
    }
}

function mapStateToProps(state) {
    // const value = state.detailInit

    // return {
    //     value: value
    // }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default Search