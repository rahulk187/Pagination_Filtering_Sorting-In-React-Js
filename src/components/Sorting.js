import React from 'react'

const Sorting = ({setSortType}) => {
    return (
        <div>
            <select defaultValue={'DEFAULT'} onChange={(e) => setSortType(e.target.value)}>
                <option value="DEFAULT" disabled>None</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </div>
    )
}

export default Sorting
