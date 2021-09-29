import Router from './components/Router';
import { Provider } from './utils/wep-state';

function App() {
  return (
    <Provider initialState={{}}>
      <Router />
    </Provider>
  );
}

export default App;
