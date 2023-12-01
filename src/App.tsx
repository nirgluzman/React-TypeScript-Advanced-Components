import Input from './components/Input';
import Button1 from './components/Button1';

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
		</main>
	);
}

export default App;
