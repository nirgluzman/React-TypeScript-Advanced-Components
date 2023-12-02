// Wrapper component to 'form' element.

import {type ComponentPropsWithoutRef, type FormEvent} from 'react';

// FormProps contains all the props accepted by 'form' element.
type FormProps = ComponentPropsWithoutRef<'form'> & {
	onSave: (value: unknown) => void;
};

export default function Form({onSave, children, ...otherProps}: FormProps) {
	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		// FormData is populated with all form's information.
		// In order that to happen, we need to include 'name' in input elements.
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData);
		onSave(data);
	}

	return (
		<form
			onSubmit={handleSubmit}
			{...otherProps}>
			{children}
		</form>
	);
}
