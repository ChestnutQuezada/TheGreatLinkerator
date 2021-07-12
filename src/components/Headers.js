import React, { useState, useEffect } from 'react';

import {
    getTags,
    getLinks
} from '../api'

import './Headers.css';


let Header = ({ setResults }) => {
    const [url, comments] = useState(' ')

    async function handleSubmit(event) {

        event.preventDefault()

        const link = await getLinks({
            url,
            comments
        })

        setResults(link)
    }

    return (
        <div className="headerBlock">
            <div className="title">
                <h1>The Great Linkerator!</h1>
            </div>
            <div className="searchBlock">

                <form onSubmit={handleSubmit}>
                    <input className="searchForm" type="text" placeholder="Search by Tag"></input>


                    <button type="submit">
                        <span title="Submit">
                            SEARCH
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );

};

export default Header;