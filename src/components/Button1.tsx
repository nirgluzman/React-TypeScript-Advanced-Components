import {type ComponentPropsWithoutRef} from 'react';

// Discriminating Union - enables the creation of a type that can represent several different possibilities or variants.
type ButtonProps = {
	el: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
	el: 'anchor';
} & ComponentPropsWithoutRef<'a'>;

export default function Button1(props: ButtonProps | AnchorProps) {
	if (props.el === 'anchor') {
		return (
			<a
				className='button'
				{...props}></a>
		);
	}

	return (
		<button
			className='button'
			{...props}></button>
	);
}
