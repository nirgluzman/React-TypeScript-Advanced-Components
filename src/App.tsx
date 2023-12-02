import Input from './components/Input';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Container from './components/Container';
import Card from './components/Card';
import IconButton from './components/IconButton';

function App() {
	function HeartIcon() {
		return <span>❤️</span>;
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
		</main>
	);
}

export default App;
