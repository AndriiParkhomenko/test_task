import { useState, useEffect } from "react";

import './Quote.scss';
import { Loader } from "../Loader/Loader";

export const Quote = () => {
	const [data, setData] = useState(null);
	const [hasSentRequest, setHasSentRequest] = useState(false);

	useEffect(() => {
		if (!hasSentRequest) {
		  const url = 'https://api.api-ninjas.com/v1/quotes?category=success';
		  const apiKey = 'Iml1nHckh42Cko7XIv4HAg==tefbkPeEyBkrmTE8';
  
		  fetch(url, {
			 method: 'GET',
			 headers: {
				'X-Api-Key': apiKey
			 }
		  })
			 .then(response => {
				if (!response.ok) {
				  throw new Error('Request failed with status code ' + response.status);
				}
				return response.json();
			 })
			 .then(data => {
				setData(data);
				setHasSentRequest(true);
			 })
			 .catch(error => {
				console.error('Error: ', error);
			 });
		}
	 }, [hasSentRequest]);

	 return (
		<div className='quote'>
			{data ? (
				<div className="quote-container">
				{data.map((item, index) => (
					<div className="quote-body" key={index}>
						<div className='quote-content'>
							<p className='qoute-text'>{item.quote}</p>
							<div className="img-wrapper"><img src="/images/quote.svg" alt="qoute" className='quote-img'/></div>
						</div>
						<p className='quote-author'>{`- ${item.author}`}</p>
					</div>
				))}
				</div>
			): <Loader/>}
		</div>
	 )
}