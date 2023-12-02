// Card component which has multiple "slots" for content:
// Main slot -> children prop
// Actions slot -> actions prop
// https://github.com/academind/react-typescript-course-resources/blob/main/examples/Card.tsx

import {type ReactNode} from 'react';

type CardProps = {
	title: string;
	actions: ReactNode;
	children: ReactNode;
	// "actions" is like an extra "slot" of this component.
	// it is the same type as the children prop, since we expect JSX code as a prop value.
};

export default function Card({title, actions, children}: CardProps) {
	return (
		<section>
			<h2>{title}</h2>
			{children}
			{actions}
		</section>
	);
}
