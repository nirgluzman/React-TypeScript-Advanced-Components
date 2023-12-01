// Polymorphic component - wraper component to dynamically change its rendered element based on a prop.

import {type ElementType} from 'react';

type ContainerProps = {
	as: ElementType; // value of a JSX element
};

export default function Container({as}: ContainerProps) {
	const Component = as; // (*)
	return <Component />; // we need to remap the variable name since it MUST start with a capital letter.
}

// (*) Alternatively we can also assign as alias to "as" right inside the
// destructuring expression: {as: Component}: ContainerProps
