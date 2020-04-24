import React from "react"

const Footer = ({ children }) => {
	return <footer data-nosnippet>{children}</footer>
}

const FooterItem = ({ text, href, rel, icon }) => {
	return (
		<a rel={rel} href={href}>
			<img src={icon} alt="" className="icon not-selectable" />
			{text}
		</a>
	)
}

export { Footer }
export { FooterItem }
