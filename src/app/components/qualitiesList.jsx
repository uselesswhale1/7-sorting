/* eslint-disable react/jsx-key */
import React from "react"
import Quality from "./quality"
import propTypes from "prop-types"

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qual) => (
                <Quality key={qual._id} {...qual} />
            ))}
        </>
    )
}
QualitiesList.propTypes = {
    qualities: propTypes.array.isRequired
}

export default QualitiesList
