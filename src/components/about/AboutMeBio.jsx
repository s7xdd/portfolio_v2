import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="font-general-regular flex flex-col justify-center w-full sm:w-3/4 font-semibold">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg flex justify-center"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
