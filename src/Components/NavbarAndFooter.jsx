// IMPORT Link
import { Link } from "react-router-dom";

// IMPORT IMAGE
import logo from "../Assets/The Purrfect Ugly shop.png";
import whiteLogo from "../Assets/The Purrfect Ugly shop-white.png";
import cartIcon from "../Assets/icons8-caddie-96.png";
import mapIcon from "../Assets/icons8-marqueur-96.png";
import emailIcon from "../Assets/icons8-email-100.png";

// IMPORT OUTLET
import { Outlet } from "react-router-dom";

function NavbarAndFooter() {
	return (
		<>
			<nav>
				<div className="nav-content">
					<div className="left_nav">
						<Link className="link-to-HP" to="/">
							<img className="logo" src={logo} alt="logo" />
						</Link>
					</div>

					<div className="links-to-pages">
						<Link to="/women">Women</Link>
						<Link to="/men">Men</Link>
						<Link to="/jewelery">Jewelery</Link>
						<Link to="/electronics">Electronics</Link>
						<Link to="/about">About us</Link>
						<Link to="/contact">Don't Contact us</Link>
					</div>

					<div className="right_nav">
						<button className="cart-icon">
							<img src={cartIcon} alt="cart" />
						</button>
					</div>
				</div>
			</nav>

			<main>
				<Outlet />
			</main>

			<footer>
				<div className="footer-content">
					<div className="top-footer">
						{/* <Link className="link-to-HP" to="/">
							<img className="logo" src={logo} alt="logo" />
						</Link> */}
					</div>
					<div className="center-footer">
						<div className="adress">
							<div className="map">
								<a
									href="https://goo.gl/maps/soBGMBE1uEeywNbt6"
									target="_blank"
								>
									<img
										className="map-icon"
										src={mapIcon}
										alt="map icon"
									/>
								</a>
								<p className="parag-footer">
									3 Rue Maillard, 75011 Paris
								</p>
							</div>
						</div>
						<div className="email">
							<div className="link-email">
								<a
									href="mailto:purrfect@noemail.com"
									target="_blank"
								>
									<img
										className="email-icon"
										src={emailIcon}
										alt="email icon"
									/>
								</a>
								<p className="parag-footer">
									Don't write us an email
								</p>
							</div>
						</div>
					</div>
					<div className="bottom-footer">
						<Link className="link-to-HP" to="/">
							<img className="logo" src={whiteLogo} alt="logo" />
						</Link>
						{/* <p>Made with ❤️</p> */}
					</div>
				</div>
			</footer>
		</>
	);
}

export default NavbarAndFooter;
