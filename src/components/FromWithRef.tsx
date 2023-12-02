// Wrapper component to 'form' element.
// This component exposes a 'clear' method (callable method) to reset the form fields to other components in the app.

import {
	useRef,
	useImperativeHandle,
	forwardRef,
	type ComponentPropsWithoutRef,
	type FormEvent,
} from 'react';

export type FormHandle = {
	clear: () => void;
};

// FormProps contains all the props accepted by 'form' element.
type FormProps = ComponentPropsWithoutRef<'form'> & {
	onSave: (value: unknown) => void;
};

const FormWithRef = forwardRef<FormHandle, FormProps>(function FormWithRef(
	{onSave, children, ...otherProps},
	ref
) {
	const form = useRef<HTMLFormElement>(null);

	// Hook to customize the handle exposed as a 'ref'.
	useImperativeHandle(ref, () => {
		return {
			clear() {
				console.log('CLEARING');
				form.current?.reset();
			},
		};
	});

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
			ref={form}
			{...otherProps}>
			{children}
		</form>
	);
});

export default FormWithRef;
