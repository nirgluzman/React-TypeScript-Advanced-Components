import {type ComponentPropsWithoutRef} from 'react';

// Discriminating Union - enables the creation of a type that can represent several different possibilities or variants.
type ButtonProps = ComponentPropsWithoutRef<'button'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;

// 'href' property excits only with anchor <a> element, not in <button>.
// helper function returns Type Predicate - type assertion that checks if an object has a specific property or set of properties.
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
