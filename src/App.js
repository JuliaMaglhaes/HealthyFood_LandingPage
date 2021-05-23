import GlobalStyle from './styles/global';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router/routes'

import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false,
  trickleRate:0.1,
  trickleSpeed: 300,
});

function App() {
  return (

    <Router>
      <Routes />
      <GlobalStyle/>
    </Router>
  );
}

export default App;
