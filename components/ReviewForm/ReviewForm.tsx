import React, {useState} from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import {Input} from '../Input/Input';
import {Rating} from '../Rating/Rating';
import {Textarea} from '../Textarea/Textarea';
import {Button} from '../Button/Button';
import CloseIcon from './close.svg';
import {useForm, Controller} from "react-hook-form";
import {IReviewForm, IReviewSendResponse} from "./ReviewForm.interface";
import axios from "axios";
import {API} from "../../helpers/api";

export const ReviewForm = ({productId, isOpened, className, ...props}: ReviewFormProps): JSX.Element => {
	const { register, control,handleSubmit, formState: {errors}, reset } = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setIsError] = useState<string>();
	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSendResponse>(API.review.createDemo, {...formData, productId});
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setIsError('Что-то пошло не так');
			}
		} catch (e) {
			setIsError(e.message);
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input
					{...register('name', {required: {value: true, message: 'Заполните имя'}})}
					placeholder='Имя'
					error={errors.name}
					tabIndex={isOpened ? 0 : -1}
				/>
				<Input
					{...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
					placeholder='Заголовок отзыва'
					className={styles.title}
					error={errors.title}
					tabIndex={isOpened ? 0 : -1}
				/>
				<div className={styles.rating}>
					<span>Оценка</span>
					<Controller
						control={control}
						name='rating'
						rules={{required: {value: true, message: 'Укажите рейтинг'}}}

						render={({field}) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
								error={errors.rating}
								tabIndex={isOpened ? 0 : -1}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description', {required: {value: true, message: 'Заполните описание'}})}
					placeholder='Текст отзыва'
					className={styles.description}
					error={errors.description}
					tabIndex={isOpened ? 0 : -1}
				/>
				<div className={styles.submit}>
					<Button tabIndex={isOpened ? 0 : -1} appearance='primary'>Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			{isSuccess &&
				<div className={cn(styles.success, styles.panel)}>
					<div className={styles.successTitle}>Ваш отзыв отправлен</div>
					<div>
						Спасибо, ваш отзыв будет опубликован после проверки.
					</div>
					<CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
				</div>
			}
			{error &&
				<div className={cn(styles.error, styles.panel)}>
					{error}
					<CloseIcon className={styles.close} onClick={() => setIsError(undefined)} />
				</div>
			}
		</form>

	);
};
