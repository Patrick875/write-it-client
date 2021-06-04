import React from "react";
import { Link } from "react-router-dom";
import "./../SCSS/LandingPage.scss";
import Logo from "./../Components/SVGs/Logo";
import Lock from "./../static/iconmonstr-lock-26-240.png";
import Available from "./../static/iconmonstr-mobile-thin-240.png";
import Custom from "./../static/iconmonstr-process-2-240.png";
import { Link as Scroll } from "react-scroll";
function LandingPage() {
	return (
		<div className="landing">
			<header className="landing--header">
				<nav className="header--nav">
					<ul className="nav__ul">
						<li className="nav__li">
							<Scroll to="home" smooth={true}>
								Home
							</Scroll>
						</li>
						<li className="nav__li">
							<Scroll to="features" smooth={true}>
								Features
							</Scroll>
						</li>
						<li className="nav__li">
							<Scroll to="about" smooth={true}>
								About
							</Scroll>
						</li>
					</ul>
				</nav>
				<div className="header--showcase" id="home">
					<Logo fill={"#6C63FF"} className="logo" />
					<h1 className="header__h1">
						Your private, 100% customizable online journal.{" "}
					</h1>

					<p>
						You want keep memories, remember events!! don't hesitate
						<span className="header--highlight">Write-it</span>
					</p>

					<h2 className="header--register">Start your own free journal now</h2>

					<Link to="/login" className="header__btn header--login">
						Login
					</Link>

					<Link to="/signup" className="header__btn header--signup">
						Register
					</Link>
				</div>
			</header>
			<main className="landing--section">
				<section className="features" id="features">
					<div className="feature feature--privacy">
						<div className="card">
							<div className="card--icon">
								<img src={Lock} alt="privacy--icon" className="card--img" />
							</div>
							<p className="card--title">100% Private</p>
							<p className="card--description">
								Designed to focus on privacy, your entries are totally private
								by default!
							</p>
						</div>
					</div>
					<div className="feature feature--available">
						<div className="card">
							<div className="card--icon">
								<img
									src={Available}
									alt="available--icon"
									className="card--img"
								/>
							</div>
							<p className="card--title">Available everywhere</p>
							<p className="card--description">
								fully online so that you write and read from anywhere
							</p>
						</div>
					</div>
					<div className="feature feature--tags">
						<div className="card">
							<div className="card--icon">
								<img src={Custom} alt="tags--icon" className="card--img" />
							</div>
							<p className="card--title"> Add tags</p>
							<p className="card--description">
								Add tags to your entries to categorise your entries depending on
								the what the mean to you.
							</p>
						</div>
					</div>
				</section>
			</main>
			<footer className="landing--footer" id="about">
				<p className="footer--text">&copy; Write it 2021 all rights reserved</p>
			</footer>
		</div>
	);
}

export default LandingPage;
