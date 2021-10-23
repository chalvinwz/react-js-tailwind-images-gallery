import { useFetchImage } from '../utils/useFetchImage';

import ImageList from '../components/ImageList';
import ImageSearch from '../components/ImageSearch';

const Home = () => {
	const { images, isLoading, setTerm } = useFetchImage();

	if (isLoading)
		return <p className='text-6xl text-center mx-auto mt-32'>Loading...</p>;

	return (
		<main>
			<ImageSearch searchText={(text) => setTerm((prevTerm) => text)} />

			{!isLoading && images.length === 0 && (
				<p className='text-6xl text-center mx-auto mt-32'>No Images Found</p>
			)}

			<ImageList images={images} />
		</main>
	);
};

export default Home;
