import SiteApp from './SiteApp';
import Admin from './Admin';

import StavIslama from './StavIslama';
import './App.css';
import { SiteAppProvider } from './Contexts/SiteApp.context';
import { RemovingProvider } from './Contexts/Removing.Context';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			{/* <Navbar /> */}
				<Switch>
					<SiteAppProvider>
						<Route exact path="/" render={() => <SiteApp />} />
						<RemovingProvider>
							<Route exact path="/admin" render={() => <Admin />} />
							<Route exact path="/stav-islama" render={() => <StavIslama />} />
						</RemovingProvider>
					</SiteAppProvider>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
