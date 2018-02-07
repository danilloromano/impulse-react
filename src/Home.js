import React,{Component} from 'react';
import logoHome from './images/logo-impulse-completo.png';

export default class Home extends Component {
	render(){
		return (
			<div>		
			   <div className="imgLogo">
				<img className="urso-home" role="presentation"  src={logoHome}/>
			   </div>
			   <div className="content" id="content">                              
			   </div>
			</div>
		);		
	}
}