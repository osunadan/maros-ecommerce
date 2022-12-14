import { Link } from "react-router-dom";

function Main({ categorias }) {
	return (
		<div className="heroContainer">
			<p className="titleHero">Siete Fashion Store</p>
			<ul className="CategoriesContainer">
				{categorias.map((cat) => {
					return (
						<Link key={cat} className="categorieLink" to={`/categoryid/${cat}`}>
							<li className="categorieItem">{cat}</li>
						</Link>
					);
				})}
				<Link className="categorieLink" to={"/"}>
					<li className="categorieItem">Todos</li>
				</Link>
			</ul>
		</div>
	);
}

export default Main;
