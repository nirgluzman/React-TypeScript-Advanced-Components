// Polymorphic component - wraper component to dynamically change its rendered element based on a prop.

import {type ElementType, type ReactNode} from 'react';

type ContainerProps = {
	as: ElementType; // name of the HTML element or JSX component.
	children: ReactNode; 
}

export default function Container({as, children}: ContainerProps) {
	const Component = as; // we need to remap the variable name since it MUST start with a capital letter.
	return <Component>{children}</Component>;
}

//
// (*) Alternatively we can also assign as alias to "as" right inside the
// destructuring expression: {as: Component}: ContainerProps
