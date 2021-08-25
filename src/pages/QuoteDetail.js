import { Route, useParams } from "react-router-dom"
import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote"


const DUMMY_QUOTES = [
  { id: 'q1', author: 'Matsumu', text: 'cho!!!'},
  { id: 'q2', author: 'Mattyun', text: 'ban!!'},
  { id: 'q3', author: 'Ryotaro', text: 'warikan de !!!'},
  { id: 'q4', author: 'Matsumu', text: 'urusaiwa!!!'},
]

const QuoteDetail = () => {
  const params = useParams()

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return <p>No quote found.</p>
  }
  
  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text}></HighlightedQuote>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </>
  )
}

export default QuoteDetail
