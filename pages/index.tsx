import { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag="h1">{counter}</Htag>
			<Button arrow="right" appearance="ghost">Кнопка</Button>
			<Button arrow="down" appearance="primary" onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
			<P>Какой-то текст</P>
			<P size='l'>Какой-то текст с размером</P>
			<Tag size="s">Маленький</Tag>
			<Tag size="m" color="red">red</Tag>
			<Tag size="m" color="green">green</Tag>
			<Tag color="grey">grey</Tag>
			<Tag color="primary" href="222">primary</Tag>
			<Tag size="s" color="ghost" href="222">ghost</Tag>

			<Rating rating={rating} isEditable={true} setRating={setRating} />
		</>
	);
}

export default withLayout(Home);