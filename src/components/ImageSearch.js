import { useState } from 'react';

const ImageSearch = ({ searchText }) => {
	const [text, setText] = useState('');

	const handleOnSubmit = (e) => {
		e.preventDefault();

		searchText(text);
	};

	return (
		<section className='border px-2 max-w-sm rounded-lg overflow-hidden my-10 mx-auto'>
			<form onSubmit={handleOnSubmit} className='w-full max-w-sm'>
				<div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
					<input
						className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
						type='text'
						placeholder='Search images...'
						onChange={(e) => setText(e.target.value)}
					/>
					<button
						className='flex-shrink-0 rounded bg-blue-500
            hover:bg-blue-700 border-blue-500 
            hover:border-blue-700 text-sm border-4 
            text-white py-1 px-2 rounder'
						type='submit'
					>
						Search
					</button>
				</div>
			</form>
		</section>
	);
};

export default ImageSearch;
