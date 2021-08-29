/** @jsx jsx */
import { jsx, Box, Flex, Button, Input } from 'theme-ui';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import React from 'react';
import 'animate.css/animate.css';
import '../styles/fade.css';

export default class Form extends React.Component {
	constructor() {
		super();
		this.state = { email: '', result: null, visible: false };
	}

	_handleSubmit = async (e) => {
		e.preventDefault();

		const result = await addToMailchimp(this.state.email);

		this.setState({ result: result });

		this.setState({ visible: true });

		console.log(this.state.visible);

		setTimeout(() => {
			this.setState({ visible: false });
		}, 2000);

		console.log(result);
		console.log(this.state.visible);
	};

	handleChange = (event) => {
		this.setState({ email: event.target.value });
	};

	render() {
		return (
			<Box>
				<form
					onSubmit={this._handleSubmit}
					sx={{ variant: 'forms.contactForm' }}
				>
					<Flex>
						<Input
							sx={{ variant: 'text.bodyLarge' }}
							placeholder="name@email.com"
							name="email"
							type="text"
							onChange={this.handleChange}
						/>

						<Button type="submit" />
					</Flex>
				</form>

				<p
					sx={{ variant: 'text.caption', mt: '16px' }}
					className={this.state.visible ? 'fadein' : 'fadeout'}
				>
					{this.state.result != null
						? this.state.result === 'success'
							? 'Signed up successfully'
							: this.state.result.msg
						: ''}
				</p>
			</Box>
		);
	}
}
