import React from "react"

import { Helmet } from "react-helmet"

import { Header } from "../components/homepage/Header.js"
import {
	PersonalOutline,
	PersonalOutlineItem,
} from "../components/homepage/PersonalOutline.js"
import {
	FindMeHere,
	FindMeHereItem,
} from "../components/homepage/FindMeHere.js"
import { Footer, FooterItem } from "../components/homepage/Footer.js"

import "../styles/homepage/index.scss"

import twitterIcon from "../icons/twitter.svg"
import linkedinIcon from "../icons/linkedin.svg"
import githubIcon from "../icons/github.svg"
import emailIcon from "../icons/mail.svg"
import gpgIcon from "../icons/key.svg"
import sourceIcon from "../icons/code.svg"

const IndexPage = () => (
	<>
		<Helmet>
			<title>Milan Rodriguez</title>
			<meta name="Description" content="Milan Rodriguez's website" />
			<meta name="color-scheme" content="only-light" />
			<link rel="canonical" href="https://milanr.org" />
			<link rel="icon" href="/icons/meta/user-64.png" />
			<link rel="manifest" href="manifest.webmanifest" />
			<meta name="theme-color" content="#000" />
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
			<Header>Hey, I'm Milan.</Header>
			<PersonalOutline>
				<PersonalOutlineItem>
					Student at{" "}
					<a rel="external" href="https://epfl.ch/" aria-label="EPFL">
						EPFL
					</a>
					.
				</PersonalOutlineItem>
				<PersonalOutlineItem>
					Co-founder and vice-CEO at{" "}
					<a rel="external" href="https://qwanse.com/" aria-label="Qwanse">
						Qwanse
					</a>
					.
				</PersonalOutlineItem>
				<PersonalOutlineItem>
					Co-founder at{" "}
					<a
						rel="external"
						href="https://castornaute.com/"
						aria-label="Castornaute"
					>
						Castornaute
					</a>
					.
				</PersonalOutlineItem>
				<PersonalOutlineItem></PersonalOutlineItem>
				<PersonalOutlineItem>You can find me here:</PersonalOutlineItem>
			</PersonalOutline>
			<FindMeHere>
				<FindMeHereItem
					platform="Twitter"
					profileURL="https://twitter.com/_MilanRodriguez"
					icon={twitterIcon}
				/>
				<FindMeHereItem
					platform="Linkedin"
					profileURL="https://www.linkedin.com/in/milanrodriguez"
					icon={linkedinIcon}
				/>
				<FindMeHereItem
					platform="Github"
					profileURL="https://github.com/milanrodriguez"
					icon={githubIcon}
				/>
			</FindMeHere>
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
