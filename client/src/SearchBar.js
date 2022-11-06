import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar (){
    return (
        <div id="search_background">
            <Form >
                <Form.Group id='search_bar'>
                    <Form.Control id='search_field' type="search" placeholder='Find somewhere new...'/>
                    <Button id='search_submit' variant="primary" type="submit">
                        Search🔎
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SearchBar