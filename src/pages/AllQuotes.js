import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
