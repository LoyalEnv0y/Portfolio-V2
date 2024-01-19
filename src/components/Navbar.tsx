import { v4 as uuid } from 'uuid';
import { GrClose } from 'react-icons/gr';
import { IoIosMenu } from 'react-icons/io';
import { useState } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';

const navbarLinks = [
	{
		id: uuid(),
		titleTR: 'CV',
		titleENG: 'CV',
		url: '',
	},
	{
		id: uuid(),
		titleTR: 'Hakkımda',
		titleENG: 'About Me',
		url: '',
	},
	{
		id: uuid(),
		titleTR: 'Yetenekler',
		titleENG: 'Skills',
		url: '',
	},
	{
		id: uuid(),
		titleTR: 'Projeler',
		titleENG: 'Projects',
		url: '',
	},
	{
		id: uuid(),
		titleTR: 'Sertifikalar',
		titleENG: 'Certificates',
		url: '',
	},
	{
		id: uuid(),
		titleTR: 'İş Geçmişi',
		titleENG: 'Job History',
		url: '',
	},
	{
		id: uuid(),
		titleTR: 'İletişim',
		titleENG: 'Contact',
		url: '',
	},
];

const iconVariants = {
	enter: {
		rotate: 180,
	},

	center: {
		rotate: 0,
	},

	exit: {
		rotate: 0,
	},
};

const menuVariants = {
	enter: {
		width: '0px',
		height: '0px',
		borderRadius: '100%',
	},

	center: {
		width: '100vw',
		height: '100vh',
		borderRadius: '0%',
		top: 0,
		right: 0,
	},

	exit: {
		width: '0px',
		height: '0px',
		borderRadius: '100%',
		top: '30px',
		right: '45px',
	},
};

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuBtnClass = twMerge(
		classNames(
			'z-20 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-c lg:hidden text-secondary',
			{
				'shadow-none': isMenuOpen,
			}
		)
	);

	return (
		<div className="sticky top-0 z-10 flex h-20 w-full items-center justify-between bg-gradient-to-r from-gStart/90 to-gEnd/80 px-5 py-1 text-primary shadow-md backdrop-blur-sm md:px-10 lg:px-20 xl:px-32">
			<a href="/" className="h-full">
				<img src="/svg/Logo.svg" alt="Site Logo" className="h-full " />
			</a>

			{/* 
			//? What is this?
			The top left menu button that appears on devices that are narrower than 1024 pixels. 
			*/}
			<AnimatePresence>
				<button
					className={menuBtnClass}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? (
						<motion.div
							key="closeBtn"
							variants={iconVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								duration: 0.15,
								type: 'spring',
							}}
						>
							<GrClose className="h-6 w-6" />
						</motion.div>
					) : (
						<motion.div
							key="openBtn"
							variants={iconVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								duration: 0.15,
								type: 'spring',
							}}
						>
							<IoIosMenu className="h-8 w-8" />
						</motion.div>
					)}
				</button>
			</AnimatePresence>

			{/* 
			//? What is this?
			This is the white background that gets enlarged when the user clicks on the navbar menu button.
			
			//? Why is it here?
			The background is here because the navbar menu button needed to stay in place. I could have done
			so that the background of the button would be the enlarging part. I tried that and it was more jankier
			than this way.
			*/}
			<AnimatePresence mode="wait">
				{isMenuOpen && (
					<motion.div
						className="absolute right-7 top-5 z-10 flex flex-col items-center justify-center rounded-[100%] bg-primary text-secondary"
						key="mobileMenu"
						variants={menuVariants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							duration: 0.15,
						}}
					></motion.div>
				)}
			</AnimatePresence>

			{/* 
			//? What is this?
			This is the div that is put on top of the white background to display the navlinks

			//? Why is it here?
			It is here because the fading and moving animations needed to look natural and independent from
			the white background. 
			*/}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className="absolute left-0 top-0 z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden border"
						key="MobileNavMenuTop"
						initial={{ opacity: 0 }}
						animate={{ opacity: 100 }}
						exit={{ opacity: 0 }}
					>
						{navbarLinks.map((link, i) => (
							<motion.a
								// href={link.url}
								className="group flex h-20 w-80 cursor-pointer items-center"
								key={link.id}
								initial={{ x: -1000 }}
								animate={{ x: 0 }}
								transition={{
									duration: 0.5,
									type: 'spring',
									delay: i / 20,
								}}
							>
								<div className="mr-5 h-2 w-2 rounded-sm bg-gEnd duration-150 group-hover:h-3 group-hover:w-3 group-hover:rotate-45"></div>
								<p
									className="text-[2.7rem] font-semibold tracking-wide text-transparent duration-150 group-hover:translate-x-4 group-hover:text-black"
									style={{ WebkitTextStroke: '2px black' }}
								>
									{link.titleTR}
								</p>
							</motion.a>
						))}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="hidden gap-x-5 text-[clamp(1rem,1.3vw,2rem)] lg:flex xl:gap-x-10">
				{navbarLinks.map((link) => (
					<a
						className="duration-200 [text-shadow:_0px_2px_2px_rgb(0_0_0_/_40%)] hover:-translate-y-0.5 hover:cursor-pointer hover:[text-shadow:_0px_4px_4px_rgb(0_0_0_/_40%)]"
						key={link.id}
					>
						{link.titleTR}
					</a>
				))}
			</div>
		</div>
	);
};

export default Navbar;
