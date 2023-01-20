import styles from './RightSidebar.module.css';

const RightSidebar = () => {
	return (
		<div className={styles.layoutRightSidebar}>
			<div className={styles.menu}>
				<div className={styles.iconsTop}>
					<p className={styles.menuIcon}>Right 1</p>
					<p className={styles.menuIcon}>Right 1</p>
					<p className={styles.menuIcon}>Right 1</p>
					<p className={styles.menuIcon}>Right 1</p>
				</div>
				<div className={styles.iconsBottom}>
					<p className={styles.menuIcon}>Right 2</p>
					<p className={styles.menuIcon}>Right 2</p>
				</div>
			</div>
		</div>
	);
};

export default RightSidebar;
