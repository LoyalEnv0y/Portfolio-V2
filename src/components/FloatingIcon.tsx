import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

// prettier-ignore
type FloatingIconParams =
	| {
		src: string;
		className?: string;
		duration?: number;
		x: number;
		y: number;
		alt?: string;
	}
	| {
		src: string;
		className?: string;
		duration?: number;
		x?: never;
		y?: never;
		alt?: string;
	};

const FloatingImage = ({
	src,
	className,
	duration = 2000,
	x = 20,
	y = 20,
	alt = 'Floating Image',
}: FloatingIconParams) => {
	const [rands, setRands] = useState({ x: 0, y: 0 });

	//? Why is it here?
	// The effect is here so that the interval is fired the moment the component
	// is rendered.
	//? What it does?
	// It makes sure that when the component is demounted the interval is also
	// cleared.
	useEffect(() => {
		//? What it does?
		// It creates a new interval with the given timeout to create set the
		// random x and y coordinates of the rands state. The random numbers
		// are set to be between -10 and 10 if not specified by the caller.

		const intervalId = setInterval(() => {
			setRands({
				x: Math.floor(Math.random() * x) - x / 2,
				y: Math.floor(Math.random() * y) - y / 2,
			});
		}, duration);

		return () => clearInterval(intervalId);
	}, [x, y, duration]);

	const imageClasses = twMerge(
		classNames('absolute left-0 top-0 w-10 drop-shadow-c', className)
	);

	return (
		<motion.img
			src={src}
			alt={alt}
			className={imageClasses}
			animate={{
				x: rands.x,
				y: rands.y,
			}}
			transition={{
				repeat: Infinity,
				duration: duration / 1000,
				repeatType: 'reverse',
				type: 'tween',
				ease: [0.45, 0.33, 0.33, 0.45],
			}}
		/>
	);
};

export default FloatingImage;
