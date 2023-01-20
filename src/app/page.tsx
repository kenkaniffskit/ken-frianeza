import styles from './Home.module.css';

export default function Home() {
	return (
		<main className={styles.mainContent}>
			<section className={styles.content}>
				<h1>
					I will develop a <span>landing page</span> for your{' '}
					<span>business</span>, so you can gain <span>more customers</span>
				</h1>
			</section>
		</main>
	);
}
