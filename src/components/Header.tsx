import FloatingImage from './FloatingIcon';

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
		<header className="relative -top-20 w-full text-primary">
			<div className="bg-gradient-to-r from-[#A130F2] to-[#D32DE7] pt-20">
				<div className="flex w-full flex-col items-center gap-y-10 px-5 py-10 md:px-10 lg:px-20 xl:px-32 2xl:flex-row 2xl:justify-between">
					<section className="flex w-[90%] max-w-3xl flex-col gap-y-3">
						<h1 className="font-aldrich text-[clamp(2.25rem,10vw,6rem)]">
							{text.headerTitle.tr}
						</h1>
						<p
							className="text-[clamp(1rem,3vw,2rem)] font-extralight"
							dangerouslySetInnerHTML={{ __html: text.headerDesc.tr }}
						/>

						<div className="group mt-4 w-fit self-start">
							<a
								href="Cetin-Tekin-CV-TR.pdf"
								download={'Çetin-Tekin-CV'}
							>
								<button className="flex w-fit items-center gap-x-5 rounded-full bg-primary px-4 py-2 text-secondary shadow-c duration-200 group-hover:-translate-y-0.5 group-hover:bg-primary-hover group-hover:shadow-c-lg lg:px-5 lg:py-3 lg:shadow-c-lg lg:group-hover:shadow-c-xl">
									<p className="font-bold uppercase lg:text-xl lg:font-semibold xl:text-2xl">
										{text.cvBtnText.tr}
									</p>

									<div className="rounded-full bg-gStart p-2 group-hover:bg-gStart-hover lg:p-3 xl:p-4">
										<img
											src="svg/Download.svg"
											alt="download icon"
											className="w-5 lg:w-6 xl:w-8"
										/>
									</div>
								</button>
							</a>
						</div>
					</section>

					<section className="relative aspect-square w-[clamp(18rem,65vw,40rem)] select-none bg-[url('/svg/Illustration.svg')] bg-contain bg-center bg-no-repeat">
						<FloatingImage
							src="svg/Floating-Editor.svg"
							x={40}
							y={40}
							duration={3000}
							className="left-[24%] top-[15%] w-[20%]"
						/>
						<FloatingImage
							src="svg/Floating-Search.svg"
							className="left-[20%] top-[10%] w-[12%] drop-shadow-c-xl"
							duration={1500}
						/>
						<FloatingImage
							src="svg/Floating-Orange.svg"
							className="left-[53%] top-[12%] w-[17%]"
						/>
						<FloatingImage
							src="svg/Floating-Purple.svg"
							className="left-[60%] top-[28%] w-[9%]"
							duration={1000}
						/>
						<FloatingImage
							src="svg/Floating-Terminal.svg"
							className="left-[74%] top-[38%] w-[15%]"
						/>
					</section>
				</div>
			</div>
			<img
				src="/svg/waves.svg"
				alt="Header wave vector"
				className=" h-16 w-full sm:h-32 lg:h-40"
			/>
		</header>
	);
};

export default Header;
