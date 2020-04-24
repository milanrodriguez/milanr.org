import React from "react"

import { Helmet } from "react-helmet"

import { Header } from "../components/homepage/Header.js"
import { Footer, FooterItem } from "../components/homepage/Footer.js"

import "../styles/homepage/index.scss"

import emailIcon from "../icons/mail.svg"
import gpgIcon from "../icons/key.svg"
import sourceIcon from "../icons/code.svg"

const IndexPage = () => (
	<>
		<Helmet>
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css"
				media="none"
				onload="if(media!='all')media='all'"
			/>
			<noscript>
				{`
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css"
				/>`}
			</noscript>
		</Helmet>
		<main>
			<Header>404 - I couldn't find this page</Header>
			<a href="/index/">You can click here to go back to homepage.</a>
		</main>
		<Footer>
			<FooterItem
				text="Email"
				href="mailto:me@milanr.org"
				rel=""
				icon={emailIcon}
			/>
			<FooterItem
				text="GPG keys"
				href="gpg.milanr.org"
				rel="nofollow"
				icon={gpgIcon}
			/>
			<FooterItem
				text="Source"
				href="https://github.com/milanrodriguez/milanr.org"
				rel="external nofollow"
				icon={sourceIcon}
			/>
		</Footer>
	</>
)

export default IndexPage
