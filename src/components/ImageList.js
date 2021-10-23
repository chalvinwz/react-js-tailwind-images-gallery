import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
	return (
		<section className='container mx-auto px-4 py-8 flex justify-center'>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
				{images?.map((image) => (
					<ImageCard key={image.id} image={image} />
				))}
			</div>
		</section>
	);
};

export default ImageList;
