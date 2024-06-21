import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import store from './redux/store/store.ts'

import '../src/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
