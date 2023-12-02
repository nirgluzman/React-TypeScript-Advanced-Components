// A 'button' component which has an icon and text.
// The icon is passed via a prop, which is a function that returns JSX code.
// https://github.com/academind/react-typescript-course-resources/blob/main/examples/IconButton.tsx

import {type ComponentPropsWithoutRef, type ElementType, type ReactNode} from 'react';

type IconButtonProps = {
	icon: ElementType;
	onClick: () => void;
	children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export default function IconButton({
	// icon is aliased to Icon because it should be used like a custom component name (i.e. with capital letter).
	icon: Icon,
	children,
	...otherProps
}: IconButtonProps) {
	return (
		<button {...otherProps}>
			<span>
				<Icon />
			</span>
			<span>{children}</span>
		</button>
	);
}
