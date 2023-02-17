import { Button, Htag, P, Tag } from "../components";

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">Привет</Htag>
			<Button arrow="right" appearance="ghost">Кнопка</Button>
			<Button arrow="down" appearance="primary">Кнопка</Button>
			<P>Какой-то текст</P>
			<P size='l'>Какой-то текст с размером</P>
			<Tag size="s">Маленький</Tag>
			<Tag size="m" color="red">red</Tag>
			<Tag size="m" color="green">green</Tag>
			<Tag color="grey">grey</Tag>
			<Tag color="primary" href="222">primary</Tag>
			<Tag size="s" color="ghost" href="222">ghost</Tag>
		</>
	);
}
