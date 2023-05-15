import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllElectonics() {
	const [electronics, setElectonics] = useState();
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products/category/electronics")
			.then((response) => {
				setElectonics(response.data);
			})
			.catch((e) => console.log(e));
	}, []);

	if (!electronics) {
		return <p>Loading...</p>;
	}

	return (
		<div className="page-container">
			<div className="list-content">
				<h1>
					<span className="highlight-color italic">Purrfect</span>
					<span className="italic"> Ugly </span>Electronics
				</h1>
				<div className="cards-wrapper">
					{electronics.map((electronic) => (
						<Link
							key={electronic.id}
							to={`/products/${electronic.id}`}
						>
							<div className="card">
								<div className="card-image">
									<img
										src={electronic.image}
										alt={electronic.name}
									/>
								</div>
								<div className="card-content">
									<p className="product-name">
										{electronic.title}
									</p>
									<p className="price">{electronic.price}€</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default AllElectonics;
