import {useRef} from 'react';

import Input from './components/Input';
import InputWithRef from './components/InputWithRef';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Container from './components/Container';
import Card from './components/Card';
import IconButton from './components/IconButton';
import List from './components/List';
import Form from './components/Form';

function App() {
	const input = useRef<HTMLInputElement>(null); // the 'ref' decalred here is meant to be connected to HTMLInputElement.

	function HeartIcon() {
		return <span>❤️</span>;
	}

	const users = [
		{id: 123, name: 'David'},
		{id: 456, name: 'Ran'},
	];

	const hobbies = ['Sports', 'Reading', 'Cooking'];

	function handleSave(data: unknown) {
		//
		// // implementation with 'as' keyword for "Type Casting" - "tell" TypeScript that a value is of a specific type.
		// const extractedData = data as {name: string; age: string};
		// console.log('Form data submitted:', extractedData);
		//
		// implementation with "Type Guards" for "Type Narrowing".
		if (!data || typeof data !== 'object' || !('name' in data) || !('age' in data)) {
			return;
		}
		// at this point, TypeScript knows that data MUST BE an object with a 'name' and 'age' properties.
		// otherwise, the previous 'if' statement would have returned;
		console.log('Form data submitted:', data);
	}

	return (
		<main>
			<Input
				id='name'
				label='Your name'
				type='text'
			/>

			<Input
				id='age'
				label='Your age'
				type='number'
			/>

			<Input
				id='age'
				label='Your age'
				type='number'
			/>

			<InputWithRef
				id='test'
				label='Test'
				ref={input}
			/>

			<p>
				<Button1 el='button'>a Button</Button1>
			</p>

			<p>
				<Button1
					el='anchor'
					href='https://google.com'>
					A Link
				</Button1>
			</p>

			<p>
				<Button2>a Button</Button2>
			</p>

			<p>
				<Button2 href='https://google.com'>A Link</Button2>
			</p>

			<Container
				as={Button1}
				el='button'
				onClick={() => {}}>
				Click me!
			</Container>

			<Container as='button'>Hello!</Container>

			<Card
				title='My Card'
				actions={<button onClick={() => console.log('Button clicked!')}>Click Me!</button>}>
				<p>Some content</p>
			</Card>

			<IconButton
				icon={HeartIcon}
				onClick={() => console.log('Button clicked!')}>
				Like
			</IconButton>

			<section>
				<h2>Users</h2>
				<List
					items={users}
					renderItem={(user) => <li key={user.id}>{user.name}</li>}
				/>
			</section>

			<section>
				<h2>Hobbies</h2>
				<List
					items={hobbies}
					renderItem={(hobby) => <li key={hobby}>{hobby}</li>}
				/>
			</section>

			<Form onSave={handleSave}>
				<Input
					type='text'
					label='Name'
					id='name'
				/>
				<Input
					type='number'
					label='Age'
					id='age'
				/>
				<p>
					<Button2>Save</Button2>
				</p>
			</Form>
		</main>
	);
}

export default App;
