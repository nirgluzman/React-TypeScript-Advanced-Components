import {type ComponentPropsWithoutRef} from 'react';

// Discriminating Union - enables the creation of a type that can represent several different possibilities or variants.
type ButtonProps = ComponentPropsWithoutRef<'button'> & {href?: never};
type AnchorProps = ComponentPropsWithoutRef<'a'> & {href?: string};

// 'href' attribute exists only with anchor <a> element, not in <button>.
// helper function returns Type Predicate - type assertion that checks if an object has a specific property or set of properties.
//
// Drawbacks:
// 'href' attribute is optional - what happens when 'href' is absence? we cannot infer <a>
// this means, for example, that <a> can include attributes of <button> when 'href' is absence.
// BUT, when 'href' exists then TS knows it is <a> and therefore watches the attributes passed with props.
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
	return 'href' in props;
}

export default function Button2(props: ButtonProps | AnchorProps) {
	if (isAnchorProps(props)) {
		return (
			<a
				className='button'
				{...props}></a>
		);
	}

	// here TypeScript infers that props belongs to <button> element.
	return (
		<button
			className='button'
			{...props}></button>
	);
}
