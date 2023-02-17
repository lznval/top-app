import { Button, Htag, P } from "../components";

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">Привет</Htag>
			<Button arrow="right" appearance="ghost">Кнопка</Button>
			<Button arrow="down" appearance="primary">Кнопка</Button>
			<P>Какой-то текст</P>
			<P size='l'>Какой-то текст с размером</P>
		</>
	);
}
