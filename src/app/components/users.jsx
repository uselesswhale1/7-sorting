/* eslint-disable indent */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from "react"
import propTypes from "prop-types"
import { paginate } from "../utils/paginate"
import Pagination from "./pagination"
import api from "../api"
import GroupList from "./groupList"
import SearchStatus from "./searchStatus"
import UserTable from "./usersTable"

import _ from "lodash"

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()

    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" })

    const [users, setUsers] = useState()

    api.users.fetchAll().then((data) => {
        setUsers(data)
    })
    console.log(users)
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }
    const handleToggleBookMark = (id) => {
        const newArray = users.map((user) => {
            if (user._id === id) {
                return { ...user, bookmark: !user.bookmark }
            }
            return user
        })
        setUsers(newArray)
    }

    const pageSize = 12

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data)
        })
    }, [])
    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])
    const clearFiler = () => {
        setSelectedProf()
    }
    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
    }
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
    const handleSort = (item) => {
        setSortBy(item)
    }

    if (users) {
        // const filteredUsers = selectedProf ? users.filter((user) => _.isEqual(user.profession, selectedProf)) : users
        const filteredUsers = selectedProf
            ? users.filter(
                  (user) =>
                      JSON.stringify(user.profession) ===
                      JSON.stringify(selectedProf)
              )
            : users

        const count = filteredUsers.length
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        )
        const usersCrop = paginate(sortedUsers, currentPage, pageSize)
        return (
            <div className="d-flex">
                <div className="d-flex flex-column flex-shrink-0 p-2">
                    {professions && (
                        <>
                            <GroupList
                                selectedItem={selectedProf}
                                items={professions}
                                onItemSelect={handleProfessionSelect}
                            />
                            <button
                                className="btn bg-info mt-2"
                                onClick={clearFiler}
                            >
                                Очистить
                            </button>
                        </>
                    )}
                </div>
                <div className="d-flex flex-column">
                    <SearchStatus number={count} />
                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
    return <h2>Loading...</h2>
}
Users.propTypes = {
    users: propTypes.array
}

export default Users
