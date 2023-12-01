import Input from './components/Input';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Container from './components/Container';
import Card from './components/Card';

function App() {
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
		</main>
	);
}

export default App;
