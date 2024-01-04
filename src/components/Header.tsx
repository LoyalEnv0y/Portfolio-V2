import Navbar from './Navbar';

const text = {
	headerTitle: {
		eng: '<Hello />',
		tr: '<Merhaba />',
	},

	headerDesc: {
		eng: '',
		tr: 'Ben Çetin Tekin. Sürükleyici dijital deneyimler yaratmak ve güçlü, kullanıcı odaklı çözümler oluşturmak için kodlama becerilerimi uygulama konusunda son derece hevesli bir web geliştiricisiyim.',
	},

	cvBtnText: {
		eng: 'Download CV',
		tr: 'CV İNDİR',
	},
};

const Header = () => {
	return (
		<div className="text-primary w-full">
			<div className="h-[calc(100vh-10rem)] bg-gradient-to-r from-[#A130F2] to-[#D32DE7]">
				<Navbar />

				<section className="flex h-full w-full px-52">
					<div className="flex flex-col justify-center gap-y-10">
						<h1 className="font-aldrich text-8xl">
							{text.headerTitle.tr}
						</h1>
						<p className="w-8/12 text-3xl font-extralight leading-10">
							{text.headerDesc.tr}
						</p>

						<button className="bg-primary text-secondary hover:bg-primary-hover group flex w-fit items-center gap-x-5 rounded-full px-7 py-3 shadow-xl">
							<p className="text-xl font-bold uppercase">
								{text.cvBtnText.tr}
							</p>

							<div className="bg-gStart group-hover:bg-gStart-hover rounded-full p-3">
								<img
									src="svg/Download.svg"
									alt="download icon"
									className="w-7"
								/>
							</div>
						</button>
					</div>

					<img
						src="svg/Illustration.svg"
						alt="Coder Illustration"
						className="w-[40%] mb-20"
					/>
				</section>
			</div>
			<img src="/svg/waves.svg" alt="Header wave vector" className="w-full" />
		</div>
	);
};

export default Header;
