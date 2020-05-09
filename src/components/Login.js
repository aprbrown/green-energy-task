import React, { useState } from "react";
import Logo from "./Logo";
import "../styles/Login.scss";

function Login(props) {
	const [email, setEmail] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	return (
		<div className="login-container">
			<div className="login-content">
				<div>
					<Logo style={{ height: 40 + "px" }} />
				</div>

				<div>
					<h1 className="text-primary fw-500 mt-20">
						Example Login Screen
					</h1>
					<h3 className="text-secondary fw-300 mt-10">
						Getting started with Green.
					</h3>

					<div className="pt-60">
						<label
							htmlFor="email"
							className="text-secondary fw-300 "
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

					<div className="pt-20">
						<input
							type="checkbox"
							value={rememberMe}
							name="rememberMe"
							className="form-checkbox-toggle"
							onChange={() => setRememberMe(!rememberMe)}
						/>
					</div>
					<div className="">
						<label htmlFor="rememberMe">Remember this device</label>
					</div>
				</div>

				<div className="submit-button-area">
					<button className="button">Sign In</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
