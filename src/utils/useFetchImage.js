import { useState, useEffect } from 'react';

export const useFetchImage = () => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [term, setTerm] = useState('');

	useEffect(() => {
		const getImages = async () => {
			try {
				const response = await fetch(
					`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo`
				);
				const data = await response.json();
				setImages((prevImages) => data.hits);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getImages();
	}, [term]);

	return { images, isLoading, setTerm };
};
