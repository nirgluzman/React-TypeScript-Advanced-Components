// custom Input component

import {ComponentPropsWithoutRef} from 'react';

type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<'input'>; // grab all the native attributes of an 'input' element as the props type of Input component.

export default function Input({label, id, ...props}: InputProps) {
	return (
		<p>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				{...props}
			/>
		</p>
	);
}
