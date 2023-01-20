import Image from 'next/image';
import styles from './LeftSidebar.module.css';
import profilePicture from '../../public/profile.jpg';

const LeftSidebar = () => {
	return (
		<div className={styles.layoutLeftSidebar}>
			<div className={styles.menu}>
				<div className={styles.profileInfo}>
					<Image
						className={styles.profilePicture}
						src={profilePicture}
						alt='Profile Picture'
					/>
					<div className={styles.info}>
						<h1>Ken Frianeza</h1>
						<p>Web Developer</p>
						<p>Front-end</p>
					</div>
					<div className={styles.buttons}>
						<button className={`${styles.button} ${styles.buttonScale}`}>
							Preview CV
						</button>
						<button className={`${styles.button} ${styles.buttonScale}`}>
							Download CV
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSidebar;
