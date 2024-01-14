import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDelete}) {



  return (
    <main>
      <ul className="cards">
        {listings.map(listing => (
          <ListingCard 
          key={listing.id}
          listings={listing}
          onDelete={onDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
