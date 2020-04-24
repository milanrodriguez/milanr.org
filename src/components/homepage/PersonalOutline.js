import React from "react"

const PersonalOutline = ({ children }) => {
	return (
		<section id="PersonalOutline">
			<ul>{children}</ul>
		</section>
	)
}

const PersonalOutlineItem = ({ children }) => {
	return <li>{children}</li>
}

export { PersonalOutline }
export { PersonalOutlineItem }
