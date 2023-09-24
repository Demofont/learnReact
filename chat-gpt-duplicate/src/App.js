import './App.css';

function App() {
  return (
	<div className="app">
		<section className="side-bar">
			<button>+ New chat</button>
			<ul className="history">
				<li>BLUGH</li>
			</ul>
			<nav>
				<p>Made by Demofont</p>
			</nav>
		</section>
		<section className="main">
			<h1>DemofontGPT</h1>
			<ul className="feed">
			
			</ul>
			
			<div className="bottom-section">
				<div className="intput-container">
					<input/>
					<div id="submit">➢</div>
				</div>
				<p className="info">
					Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 3 Version
				</p>
			</div>
		</section>
	</div>
	)		
}

export default App;
