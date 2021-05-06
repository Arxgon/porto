import ContentWrapper from "../components/content-wrapper/ContentWrapper";
import Header from "../components/header/Header";
import Navigator from "../components/navigator/Navigator";
import "./app.css";

function App() {
	return (
		<div>
			<Header></Header>
			<ContentWrapper></ContentWrapper>
			<Navigator></Navigator>
		</div>
	);
}

export default App;
