// Generic List Component
// This reusable component can be used to render a list of items of any type.
// The type of the items is passed via a generic type parameter.
// https://github.com/academind/react-typescript-course-resources/blob/main/examples/List.tsx

import {type ReactNode} from 'react';

type ListProps<T> = {
	items: T[];
	renderItem: (item: T) => ReactNode; // callback function to return a JSX.
};

export default function List<T>({items, renderItem}: ListProps<T>) {
	return <ul>{items.map(renderItem)}</ul>;
}
