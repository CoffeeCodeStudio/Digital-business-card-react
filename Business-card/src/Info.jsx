import ramiIgm from "./assets/rami.png"
import { useState } from "react"

export default function Info() {
	const [copied, setCopied] = useState(false)

	function handleCopy() {
		navigator.clipboard.writeText("Rami.elsaneh@protonmail.com")
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
	<div className="card_info">

		<img src={ramiIgm} alt="image of Rami El-saneh" />
		<h1>
			Rami El-saneh
		</h1>
			<p className="card_title">
				Frontend Developer and founder of coffee code studio
			</p>
			<a href="https://coffeecodestudio.se">
				<p>☕ Coffee Code Studio</p>
			</a>

			<div className="email-btn">
				<button onClick={handleCopy}>
					{copied ? "✅ Email copied!" : "✉️ Email"}
				</button>
		</div>
	</div>
	)
}
