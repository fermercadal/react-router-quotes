import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch} from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "Obi-Wan Kenobi", text: "Hello there" },
  { id: "q2", author: "Emperor Palpatine", text: "Good, gooooooood" },
  {
    id: "q3",
    author: "Anakin Skywalker",
    text: "This is where the fun begins",
  },
  { id: "q4", author: "Obi-Wan Kenobi", text: "Another happy landing" },
];

const QuoteDetails = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <h1>QuoteDetails component</h1>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
