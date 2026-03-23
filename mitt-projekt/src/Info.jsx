import ramiIgm from "./assets/rami.png"
export default function Info() {
	return (
		<div className="card_info">
			
			<img src={ramiIgm} alt="image of Rami El-saneh" width="100px"/>
			<h1>
				Rami El-saneh
			</h1>
			<p className ="card_title">
				Frontend Developer and founder of coffee code studio
			</p>
			<a href="https://coffeecodestudio.se">
			<p>☕ Coffee Code Studio</p>
			</a>
			
			<div class="email-btn">
				<button>
				✉️	Email
				</button>
			</div>
			
		</div>
	)
}


