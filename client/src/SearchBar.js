import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import { appContext } from './App'

function SearchBar (){
    const { searchQuery } = useContext(appContext)
    const [searchQueryValue, setSearchQueryValue] = searchQuery;


    let navigate = useNavigate();
    
    function handleOnChange(e){
        setSearchQueryValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        navigate('/search');
    }

    console.log(searchQueryValue)

    return (

            <>
            <Form  onSubmit={handleSubmit}>
                <Form.Group id='search_bar'>
                    <Form.Control
                    id='search_field' 
                    type="text" 
                    onChange={handleOnChange}
                    placeholder='Find somewhere new...'
                    value={searchQueryValue}
                    />
                    <Button id='search_submit' variant="primary" type="submit">
                        Search🔎
                    </Button>
                </Form.Group>
            </Form>
            </>
    )
}

export default SearchBar