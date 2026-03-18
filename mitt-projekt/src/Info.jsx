import ramiIgm from "./assets/rami.png"
export default function Info() {
	return (
		<div>
			<img src={ramiIgm} alt="image of Rami El-saneh" width="200px"/>
			<h1>
				Rami El-saneh
			</h1>
			<p>
				Frontend Developer and founder of coffee code studio
			</p>
			<a href="https://coffeecodestudio.se">
			Coffee Code Studio
			</a>
			<button>
				Email
			</button>
			<button>
				linkedin
			</button>
		</div>
	)
}


