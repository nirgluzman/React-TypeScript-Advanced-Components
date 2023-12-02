// Wrapper component to 'form' element.

import {type ComponentPropsWithoutRef} from 'react';

// FormProps contains all the props accepted by 'form' element.
type FormProps = ComponentPropsWithoutRef<'form'>;

export default function Form(props: FormProps) {
	return <form {...props}>{props.children}</form>;
}
