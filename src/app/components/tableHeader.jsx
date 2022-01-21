/* eslint-disable indent */
/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-key */
import React from "react"
import propTypes from "prop-types"

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            })
        } else {
            onSort({ path: item, order: "asc" })
        }
    }
    const renderSortArrow = (selectedSort, currentPath) => {
        if (selectedSort.path === currentPath) {
            if (selectedSort.order === "asc") {
                return <i className="bi bi-caret-down-fill"></i>
            } else {
                return <i className="bi bi-caret-up-fill"></i>
            }
        }
        return null
    }
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => {
                                      handleSort(columns[column].path)
                                  }
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {renderSortArrow(selectedSort, columns[column].path)}
                    </th>
                ))}
            </tr>
        </thead>
    )
}
TableHeader.propTypes = {
    onSort: propTypes.func.isRequired,
    selectedSort: propTypes.object.isRequired,
    columns: propTypes.object.isRequired
}

export default TableHeader
