"use client";

import styles from "./RightSidebar.module.css";

import { AiFillHome } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { IoMdRibbon } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { useState } from "react";

const RightSidebar = () => {
	const [theme, setTheme] = useState(true);

	return (
		<div className={styles.layoutRightSidebar}>
			<div className={styles.menu}>
				<div className={styles.iconsTop}>
					<p className={styles.menuIcon}>
						<AiFillHome />
					</p>
					<div className={styles.divider}></div>
					<p className={styles.menuIcon}>
						<FaBookOpen />
					</p>
					<div className={styles.divider}></div>
					<p className={styles.menuIcon}>
						<IoMdRibbon />
					</p>
					<div className={styles.divider}></div>
					<p className={styles.menuIcon}>
						<BsFillTelephoneFill />
					</p>
				</div>
				<div className={styles.iconsBottom}>
					<p className={styles.menuIcon}>
						{theme ? <MdLightMode /> : <MdNightlight />}
					</p>
				</div>
			</div>
		</div>
	);
};

export default RightSidebar;
