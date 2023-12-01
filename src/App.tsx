import Input from './components/Input';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Container from './components/Container';

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
			<Container as='button' />
			<Container as={Button1} />
		</main>
	);
}

export default App;
