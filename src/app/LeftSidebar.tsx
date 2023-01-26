"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./LeftSidebar.module.css";

import profilePicture from "../../public/profile.jpg";

import { HiMenuAlt2 } from "react-icons/hi";
import { BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";

import MobileMenu from "./MobileMenu";

const LeftSidebar = () => {
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => {
		setMenu(!menu);
	};

	return (
		<div className={styles.layoutLeftSidebar}>
			<div className={styles.mobileMenu}>
				<button onClick={toggleMenu}>
					<HiMenuAlt2 className={styles.icon} />
				</button>
			</div>

			{/* This component is Mobile Nav Menu */}

			{menu ? (
				<MobileMenu xUpdatedPosition={-25} />
			) : (
				<MobileMenu xUpdatedPosition={-500} />
			)}

			<div className={styles.menu}>
				<div className={styles.profileInfo}>
					<Image
						className={styles.profilePicture}
						src={profilePicture}
						alt="Profile Picture"
						priority
					/>
					<div className={styles.info}>
						<h1>Ken Frianeza</h1>
						<p>Web Developer</p>
						<p>Front-end</p>
					</div>
					<div className={styles.buttons}>
						{/* <button className={`${styles.button} ${styles.buttonScale}`}>
							Preview Résumé
						</button> */}
						<Link
							href="./resume.pdf"
							download
							target="_blank"
							rel="noopener noreferrer"
							className={`${styles.button} ${styles.buttonScale}`}
						>
							Download Résumé
						</Link>
					</div>
					<div className={styles.divider}></div>

					<div className={styles.footer}>
						<div className={styles.socials}>
							<BsGithub />
							<BsInstagram />
							<BsFacebook />
						</div>
						<p className={styles.copyright}>
							Copyright &copy; {new Date().getFullYear()} Ken Frianeza
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSidebar;
