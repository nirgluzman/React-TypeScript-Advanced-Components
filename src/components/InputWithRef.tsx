// Custom Input component with ref

// useRef hook:
// When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.

import {forwardRef, ComponentPropsWithoutRef} from 'react';

type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<'input'>; // grab all the native attributes of an 'input' element as the props type of Input component.

// forwardRef is a function used to pass the ref to a child component, https://react.dev/reference/react/forwardRef
// forwardRef is a generic function so we should provide extra type info about related types which eventually be stored in that ref.
// the 1st value - refers to the type of ref will manage -> HTMLInputElement
// the 2nd value - refers to the type of props that will be received -> InputProps
const InputWithRef = forwardRef<HTMLInputElement, InputProps>(function InputWithRef(
	{label, id, ...props},
	ref
) {
	return (
		<p>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				ref={ref} // -> 'ref' passed here is connected to HTMLInputElement.
				{...props}
			/>
		</p>
	);
});

export default InputWithRef;
