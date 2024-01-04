import Navbar from './Navbar';

const text = {
	headerTitle: {
		eng: '<Hello />',
		tr: '<Merhaba />',
	},

	headerDesc: {
		eng: '',
		tr: 'Ben <b>Çetin Tekin</b>. Sürükleyici dijital deneyimler yaratmak ve güçlü, kullanıcı odaklı çözümler oluşturmak için kodlama becerilerimi uygulama konusunda son derece hevesli bir web geliştiricisiyim.',
	},

	cvBtnText: {
		eng: 'Download CV',
		tr: 'CV İNDİR',
	},
};

const Header = () => {
	return (
		<div className="w-full text-primary">
			<div className="h-[calc(100vh-10rem)] bg-gradient-to-r from-[#A130F2] to-[#D32DE7]">
				<Navbar />

				<section className="flex h-full w-full px-52">
					<div className="flex flex-col justify-center gap-y-10">
						<h1 className="font-aldrich text-8xl">
							{text.headerTitle.tr}
						</h1>
						<p
							className="w-8/12 text-3xl font-extralight leading-10"
							dangerouslySetInnerHTML={{ __html: text.headerDesc.tr }}
						/>

						<button className="group flex w-fit items-center gap-x-5 rounded-full bg-primary px-7 py-3 text-secondary shadow-xl hover:bg-primary-hover">
							<p className="text-xl font-bold uppercase">
								{text.cvBtnText.tr}
							</p>

							<div className="rounded-full bg-gStart p-3 group-hover:bg-gStart-hover">
								<img
									src="svg/Download.svg"
									alt="download icon"
									className="w-7"
								/>
							</div>
						</button>
					</div>

					<div className="w-full flex justify-center items-center relative">
						<img
							src="svg/Illustration.svg"
							alt="Coder Illustration"
							className="mb-20 w-full"
						/>

						<img src="svg/Floating-Editor.svg" alt="Floating-icon" className='absolute top-36 left-28 drop-shadow-xl w-28' />
						<img src="svg/Floating-Orange.svg" alt="Floating-icon" className='absolute top-0 left-0 shadow' />
						<img src="svg/Floating-Purple.svg" alt="Floating-icon" className='absolute top-0 left-0 shadow' />
						<img src="svg/Floating-Search.svg" alt="Floating-icon" className='absolute top-0 left-0 shadow' />
						<img src="svg/Floating-Terminal.svg" alt="Floating-icon" className='absolute top-0 left-0 shadow' />
					</div>
				</section>
			</div>
			<img src="/svg/waves.svg" alt="Header wave vector" className="w-full" />
		</div>
	);
};

export default Header;
