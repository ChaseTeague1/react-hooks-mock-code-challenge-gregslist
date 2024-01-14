import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListing] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListing(data))
  }, [])

  function handleDeleteListing(id){
    const newListings = listings.filter(listing => listing.id !== id);
    setListing(newListings);
  }

  const searchedListings = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer listings={searchedListings} onDelete={handleDeleteListing}/>
    </div>
  );
}

export default App;
