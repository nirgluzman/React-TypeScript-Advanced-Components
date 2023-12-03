// Wrapper component to 'form' element.

import {useRef, type ComponentPropsWithoutRef, type FormEvent} from 'react';

// FormProps contains all the props accepted by 'form' element.
type FormProps = ComponentPropsWithoutRef<'form'> & {
	onSave: (value: unknown) => void;
};

// ComponentPropsWithoutRef is used to grab all the native attributes of an HTML element as the props type of our component.
// 'children' is an one of the inherited properties of ComponentPropsWithoutRef.
// note that, if 'children' property is defined in FormProps, then Typescript displays an error if we do not pass any children to the component.


export default function Form({onSave, children, ...otherProps}: FormProps) {
	const form = useRef<HTMLFormElement>(null);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		// FormData is populated with all form's information.
		// In order that to happen, we need to include 'name' in input elements.
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData);
		onSave(data);
		form.current?.reset(); // reset the form
	}

	return (
		<form
			onSubmit={handleSubmit}
			ref={form}
			{...otherProps}>
			{children} 
		</form>
	);
}
