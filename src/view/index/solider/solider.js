
// var React = require('react');
import React from 'react';
// var ReactDom = require('react-dom');
import Slider from './Slider/Slider';
// import 'common/reset.css'

const IMAGE_DATA = [
  {
    src: require('./images/demo1.png'),
    alt: 'images-1',
  },
  // {
  //   src: require('./images/demo2.jpg'),
  //   alt: 'images-2',
  // },
  // {
  //   src: require('./images/demo3.jpg'),
  //   alt: 'images-3',
  // },
  // {
  //   src: require('./images/demo4.jpg'),
  //   alt: 'images-4',
  // },
  // {
  //   src: require('./images/demo5.png'),
  //   alt: 'images-5',
  // }
];

// var deviceWidth = document.documentElement.clientWidth;
// document.documentElement.style.fontSize = deviceWidth / 10 + 'px';
export default class slider extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return(
      <Slider
        items={IMAGE_DATA}
        speed={1.2}
        delay={2.1}
        pause={true}
        autoplay={true}
        dots={true}
        arrows={false}
      />
    )
  }
}

// var mainCom = ReactDom.render(<Slider 
//   items={IMAGE_DATA}
//   speed={1.2}
//   delay={2.1}
//   pause={true}
//   autoplay={true}
//   dots={true}
//   arrows={true}
// />,
//   document.getElementById('app')
// )
