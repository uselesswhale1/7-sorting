import Quality from "./qualities"
import Bookmark from "./bookmark"
import React, { useState } from "react"

function User({
    _id,
    name,
    profession,
    qualities,
    completedMeetings,
    rate,
    ...rest
}) {
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>
                    <Quality qualities={qualities} />
                </td>
                <td>{profession.name}</td>
                <td>{completedMeetings}</td>
                <td>{rate}/5</td>
                <td>
                    <button
                        onClick={() => {
                            rest.onDelete(_id)
                        }}
                        className="btn bg-danger"
                    >
                        Delete
                    </button>
                </td>
                <td>
                    <Bookmark
                        status={bookmark}
                        onClick={() => onToggleBookMark(_id)}
                    />
                </td>
            </tr>
        </>
    )
}

export default User
