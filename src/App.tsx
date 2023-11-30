import Input from './components/Input';
import Button from './components/Button';

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
				<Button el='button'>a Button</Button>
			</p>
			<p>
				<Button
					el='anchor'
					href='https://google.com'>
					A Link
				</Button>
			</p>
		</main>
	);
}

export default App;
