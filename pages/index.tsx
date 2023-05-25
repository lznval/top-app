import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Button, Htag, Input, P, Rating, Tag, Textarea } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

function Home({menu}: HomeProps): JSX.Element {
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

			<Input placeholder="test" />
			<Textarea placeholder="text area" />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}