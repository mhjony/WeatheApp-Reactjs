import React from 'react';

const Weather =(props)=>(
			<div className="weather_info">
		 		{
		 			props.sohor && props.desh && <p className="weather__key">Location :   
		 			<span className="weather__value">{props.sohor}, {props.desh}</span></p>
		 		} 
		 		{
		 			props.tapmatra && <p className="weather__key">Temperature :   
		 			<span className="weather__value">{props.tapmatra}</span></p>
		 		}
		 		{
		 			props.soitto && <p className="weather__key">Humidity :   
		 			<span className="weather__value">{props.soitto}</span></p>
		 		}
		 		{
		 			props.bornona && <p className="weather__key">Description :   
		 			<span className="weather__value">{props.bornona}</span></p>
		 		}
		 		{
		 			props.error && <p className="weather__error">{props.error}</p>
		 		}
		 	</div>
		)


export default Weather;