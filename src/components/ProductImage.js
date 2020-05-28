import React from 'react';

function ProductImage(props){
    return <img src={process.env.PUBLIC_URL +`/assets/${props.color}.jpg`} alt="logo"  width="400px" height="400px"/>;
  }

export default ProductImage;