// Polymorphic component
// Wraper componnt to dynamically change its rendered element based on a prop.
// The wrapper component doesn't know in advance which component will wrap (which will be its child).

import {type ElementType, type ReactNode, type ComponentPropsWithoutRef} from 'react';

type ContainerProps<T extends ElementType> = {
	// T = incoming component identifier.
	as?: T; // name of the HTML element or JSX component.
	children: ReactNode;
} & ComponentPropsWithoutRef<T>; // we use the generic type <T> as a place holder to incoming type information.

// ComponentPropsWithoutRef -> to grab all the native attributes of an HTML element as the props type of your component.

export default function Container<C extends ElementType>({
	as,
	children,
	...props
}: ContainerProps<C>) {
	const Component = as || 'div'; // we need to re-map the variable name since it MUST start with a capital letter.
	return <Component {...props}>{children}</Component>;
}

//
// (*) Alternatively we can also assign as alias to "as" right inside the
// destructuring expression: {as: Component}: ContainerProps

//
// Another option:
//
// type ContainerProps = {
// 	children: ReactNode;
// 	as?: ElementType;
// } & ComponentPropsWithoutRef<ElementType>;

// export default function Container({as, children, ...props}: ContainerProps) {
// 	const Component = as || 'div';
// 	return <Component {...props}>{children}</Component>;
// }
