import React from "react"

const FindMeHere = ({ children }) => {
	return (
		<section id="FindMeHere">
			<ul>{children}</ul>
		</section>
	)
}

const FindMeHereItem = ({ platform, profileURL, icon }) => {
	return (
		<li>
			<a href={profileURL}>
				<img src={icon} alt={platform + " account"} />
			</a>
		</li>
	)
}

export { FindMeHere }
export { FindMeHereItem }
