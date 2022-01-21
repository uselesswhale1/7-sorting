import React from "react"
import TableBody from "./tableBody"
import TableHeader from "./tableHeader"
import propTypes from "prop-types"

const Table = ({ onSort, selectedSort, columns, data, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{ onSort, selectedSort, columns }} />
                    <TableBody {...{ data, columns }} />
                </>
            )}
        </table>
    )
}
Table.propTypes = {
    onSort: propTypes.func,
    selectedSort: propTypes.object,
    columns: propTypes.object,
    data: propTypes.array,
    children: propTypes.array
}

export default Table
