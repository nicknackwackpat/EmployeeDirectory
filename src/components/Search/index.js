import React from 'react';
import './style.css';
import 'bootstrap';

export default function Search(props) { 
        return (
          <div className="userSearch">
              <input
                onChange={props.handler}
                value={props.val}
                name="search"
                type="text"
                className="searchInput"
                placeholder="Search for a user here."
                id="search"
              />
            </div>
        );
};