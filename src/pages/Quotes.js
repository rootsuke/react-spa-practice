import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Matsumu', text: 'cho!!!'},
  { id: 'q2', author: 'Mattyun', text: 'ban!!'},
  { id: 'q3', author: 'Ryotaro', text: 'warikan de !!!'},
  { id: 'q4', author: 'Matsumu', text: 'urusaiwa!!!'},
]

const Quotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
  )
}

export default Quotes
