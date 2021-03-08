import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchField from './components/SearchField';
import SearchResults from './components/SearchResults';
import Container from 'react-bootstrap/Container'
import { useState } from 'react';

function App() {
  const [isLoading, setLoadingStatus] = useState(false);
  const [displaySearchResults, setDisplaySearchResults] = useState([]);

  async function submitSearchQuery(street_address_input) {
    setLoadingStatus(true);
    var url = new URL("http://127.0.0.1:5000/query-sf-listings");
    url.searchParams.append('street_address', street_address_input || "");
    try{ 
      const response = await fetch(url, { method: "GET" });
      const json = await response.json();
      const results = json["results"];
      setDisplaySearchResults(results);
    } catch (e) { 
      setDisplaySearchResults([]);
    } finally { 
      setLoadingStatus(false)
    }
  }

  return (
    <Container fluid>
      <h1>Redfin SF Listings</h1>
      <SearchField isLoading={isLoading} submitSearchQuery={submitSearchQuery} />
      <SearchResults displayResults={displaySearchResults} />
    </Container>
  );
}

export default App;
