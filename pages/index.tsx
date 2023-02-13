import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">Привет</Htag>
			<Button appearance="ghost">Кнопка</Button>
			<Button appearance="primary">Кнопка</Button>
		</>
	);
}
