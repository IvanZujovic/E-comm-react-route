import React, { Component } from 'react';
export default class Login extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		return (
			<section className="content-area login_register-page">
				<div className="container">
					<div className="box-container">
						<h2>Log in</h2>
						<div className="login-grid login">
							<form action="" method="POST" className="form">
								<input type="email" name="email" placeholder="email" />
								<input type="password" name="password" placeholder="password" />
								<a href="/account/forgot-password">Forgot password?</a>

								<button type="submit" name="button">
									Log in
								</button>
							</form>
							<div className="line" />
							<div className="social-accounts">
								<a href="#">
									<span><i className="fab fa-google-plus-g"></i></span>
									Google
								</a>
								<a href="#">
									<span><i className="fab fa-facebook-f"></i></span>
									Facebook
								</a>
							</div>
						</div>
						<div className="footer">
							Need an account? <a href="/register">Sign up</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
