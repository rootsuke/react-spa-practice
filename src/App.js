import { Route, Switch, Redirect } from 'react-router-dom'
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'></Redirect>
        </Route>
        
        <Route path='/quotes' exact>
          <Quotes></Quotes>
        </Route>

        <Route path='/quotes/:quoteId'>
          <QuoteDetail></QuoteDetail>
        </Route>

        <Route path='/new-quote'>
          <NewQuote></NewQuote>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
