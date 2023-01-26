"use client";

import Link from "next/link";

import styles from "./MobileMenu.module.css";

import { AiFillHome } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { IoMdRibbon } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

import motion from "framer-motion";

const MobileMenu = ({ xUpdatedPosition }) => {
	const links = [
		{ name: "Home", link: "/", icon: <AiFillHome /> },
		{ name: "Skills", link: "#skills", icon: <FaBookOpen /> },
		{ name: "Achievements", link: "#achievements", icon: <IoMdRibbon /> },
		{ name: "Contact", link: "#contact", icon: <BsFillTelephoneFill /> },
	];

	return (
		<motion.div
			className={styles.mobileNavMenu}
			initial={{ x: -500 }}
			animate={{ x: xUpdatedPosition }}
		>
			<ul className={styles.icons}>
				{links.map((item) => {
					return (
						<li key={item.name} className={styles.menuIcon}>
							<Link href={item.link}>
								{item.icon}
								<p>{item.name}</p>
							</Link>
						</li>
					);
				})}
			</ul>
		</motion.div>
	);
};

export default MobileMenu;
