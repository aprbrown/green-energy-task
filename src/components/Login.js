import React, { useState } from "react";
import Logo from "./Logo";
import "../styles/Login.scss";

function Login(props) {
	const [email, setEmail] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(email);
		console.log(rememberMe);
		// Handle login logic.
	};

	return (
		<div className="login-container">
			<div className="login-content">
				<Logo height={40} />

				<div className="pt-20">
					<h1 className="text-primary fw-500 h1-title">
						Example Login Screen
					</h1>
					<h2 className="text-secondary fw-400 pt-15 h2-subtitle">
						Getting started with Green.
					</h2>
				</div>

				<form onSubmit={onSubmit} className="form-grid pt-20">
					<div>
						<div>
							<label
								htmlFor="email"
								className="text-secondary fw-300"
							>
								Email Address
							</label>
						</div>
						<div className="pt-10">
							<input
								type="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="form-text-input"
							/>
						</div>
					</div>
					<div className="pt-10">
						<input
							type="checkbox"
							value={rememberMe}
							name="rememberMe"
							className="form-checkbox-toggle"
							onChange={() => setRememberMe(!rememberMe)}
						/>
						<label htmlFor="rememberMe" className="fw-400">
							Remember this device
						</label>
					</div>
					<input className="button" type="submit" value="Sign In" />
				</form>
			</div>
		</div>
	);
}

export default Login;
