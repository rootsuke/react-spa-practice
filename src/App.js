import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'))
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Quotes = React.lazy(() => import('./pages/Quotes'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner></LoadingSpinner></div>}>
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
      </Suspense>
    </Layout>
  );
}

export default App;
