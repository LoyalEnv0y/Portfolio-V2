import Navbar from './Navbar';

const Header = () => {
	return (
		<div className="w-full text-white">
			<div className="h-[calc(100vh-10rem)] bg-gradient-to-r from-[#A130F2] to-[#D32DE7]">
				<Navbar />
			</div>
			<img
				src="/svg/waves.svg"
				alt="Header wave vector"
				className="w-full"
			/>
		</div>
	);
};

export default Header;
