import React from 'react';
import SearchResultsCard from './SearchResultsCard';

function SearchResults(props) {
    const items = props.displayResults || [];
    if (items.length === 0) {
        return (
            <p className="ml-sm-5">No results to display.</p>
        )
    }
    return (
        <ul style={{ listStyleType: 'none' }}>
            {items.map(x =>
                <li key={x["mls_no"]}>
                    <SearchResultsCard
                        address={x['address']}
                        url={x['url']}
                        propertyType={x['property_type']}
                        beds={x['beds']}
                        baths={x['baths']}
                        sqrFt={x['square_feet']}
                    />
                </li>)}
        </ul>
    )
}

export default SearchResults;