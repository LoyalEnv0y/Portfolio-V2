const navbarLinks = [
	{
		titleTR: 'CV',
		titleENG: 'CV',
		url: '',
	},
	{
		titleTR: 'Hakkımda',
		titleENG: 'About Me',
		url: '',
	},
	{
		titleTR: 'Yetenekler',
		titleENG: 'Skills',
		url: '',
	},
	{
		titleTR: 'Projeler',
		titleENG: 'Projects',
		url: '',
	},
	{
		titleTR: 'Sertificalar',
		titleENG: 'Certificates',
		url: '',
	},
	{
		titleTR: 'İş Geçmişi',
		titleENG: 'Job History',
		url: '',
	},
	{
		titleTR: 'İletişim',
		titleENG: 'Contact',
		url: '',
	},
];

const Navbar = () => {
	return (
		<div className="flex h-20 w-full items-center justify-between px-32 py-1 shadow-lg">
			<a href="/" className="h-full">
				<img src="/svg/Logo.svg" alt="Site Logo" className="h-full" />
			</a>

			<div className="flex gap-x-10 text-2xl">
				{navbarLinks.map((link) => (
					<a className="duration-200 [text-shadow:_0px_2px_2px_rgb(0_0_0_/_40%)] hover:-translate-y-1 hover:cursor-pointer hover:[text-shadow:_0px_4px_4px_rgb(0_0_0_/_40%)]">
						{link.titleTR}
					</a>
				))}
			</div>
		</div>
	);
};

export default Navbar;
