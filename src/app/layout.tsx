import "./globals.css";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<div className="layout">
					<LeftSidebar />
					{children}
					<RightSidebar />
				</div>
			</body>
		</html>
	);
}
