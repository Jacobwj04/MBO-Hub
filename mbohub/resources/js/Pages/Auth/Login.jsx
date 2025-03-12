import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
	const { data, setData, post, processing, errors, reset } = useForm({
		email: '',
		password: '',
		remember: false,
	});

	const submit = (e) => {
		e.preventDefault();

		post(route('login'), {
			onFinish: () => reset('password'),
		});
	};

	return (
		<>
			<Head title="Log in" />
			<section className="calenderEdit">
				<form onSubmit={submit} className="calenderEdit__form">
					<input type="email" id="email" name="email" value={data.email} className="calenderEdit__input" autoComplete="username" onChange={(e) => setData('email', e.target.value)} placeholder='Vul uw Email in' />
					<input type="empasswordail" id="password" name="password" value={data.password} className="calenderEdit__input" autoComplete="current-password" onChange={(e) => setData('password', e.target.value)} placeholder='Vul uw wachtwoord in' />
					<span>
						<input type="checkbox" id="remember" name="remember" checked={data.remember} className="calenderEdit__input--checkbox" onChange={(e) => setData('remember', e.target.checked)} />
						<label htmlFor="remember">Remember me</label>
					</span>
					{canResetPassword && (
						<a href={route('password.request')}>Forgot your password?</a>
					)}
					<input type="submit" value="Verstuur" className="calenderEdit__submit" />
				</form>
			</section>
		</>
	);
}
