import { React, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function SearchField(props) {
    const [streetAddressInput, setStreetAddressInput] = useState(null);
    const isLoading = props.isLoading || false;

    const handleChangedValue = (fieldName, value) => {
        if (fieldName === "street") {
            setStreetAddressInput(value);
        }
    }

    const handleSubmitSearchQuery = () => {
        props.submitSearchQuery(streetAddressInput);
    }

    return (
        <Form inline>
            <Form.Label
                className="ml-sm-5"
                htmlFor="inlineFormStreetAddress"
            >
                Street Address
            </Form.Label>
            <Form.Control
                className="my-5 ml-sm-3 mr-sm-5"
                id="inlineFormStreetAddress"
                // placeholder="Jane Doe"
                onChange={(e) => handleChangedValue("street", e.target.value)}
            />

            <Button className="my-5" onClick={handleSubmitSearchQuery} disabled={isLoading}>
                {isLoading ? "Loading..." : "Search"}
            </Button>
        </Form>
    )
}

export default SearchField;