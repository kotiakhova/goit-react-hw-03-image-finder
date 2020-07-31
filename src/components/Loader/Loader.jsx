import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Loading from 'react-loader-spinner'
 export default class Loader extends React.Component {
  //other logic
    render() {
	 return(
	  <Loading
	     type="Puff"
	     color="#00BFFF"
	     height={100}
	     width={100}

	  />
	 );
    }
 }