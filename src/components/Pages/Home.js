import CardList from '../CardList';
import Header from '../Header';


const Home = (props) => {

  let { cardArray, setSearchField } = props

  return (
    <div>
      <div>
        <Header handleSearch={setSearchField} />
      </div>
      <div className='container'>
        <CardList arrayUser={cardArray} />
      </div>
    </div>
  );
}



export default Home;
