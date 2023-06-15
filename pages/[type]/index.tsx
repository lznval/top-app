import React from 'react';
import { withLayout } from '../../layout/Layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { firstLevelMenu } from '../../helpers/helpers';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import {API} from "../../helpers/api";

const Courses = ({firstCategory}: CoursesProps) => {
  return (
    <div>Courses: {firstCategory}</div>
  );
};

export default withLayout(Courses);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenu.map(m => '/' + m.route),
		fallback: false
	};
};
export const getStaticProps: GetStaticProps<CoursesProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
	if (!firstCategoryItem) {
		return {
			notFound: true
		};
	}
	const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory: firstCategoryItem.id
	});
	return {
		props: {
			menu,
			firstCategory: firstCategoryItem.id
		}
	};
};

interface CoursesProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}