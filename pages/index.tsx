import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">Привет</Htag>
			<Button arrow="right" appearance="ghost">Кнопка</Button>
			<Button arrow="down" appearance="primary">Кнопка</Button>
		</>
	);
}
