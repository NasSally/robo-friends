import React from "react";

const SearchBox = ({onChangeCallback}) => {
    return (
        <div>
            <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search robots...'
            onChange={onChangeCallback}
            >
            </input>
        </div>
    );
}

export default SearchBox;