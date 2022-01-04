/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from "react"
import Pagination from "./pagination"
import { paginate } from "../utils/paginate"
import User from "./user"
import api from "../api"
import SearchStatus from "./searchStatus"
import GroupList from "./groupList"
import _ from "lodash"

const Users = ({ users: allUsers, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const pageSize = 4

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data)
        })
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
    }
    const clearFiler = () => {
        setSelectedProf()
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const filteredUsers = selectedProf
        ? allUsers.filter((user) => _.isEqual(user.profession, selectedProf))
        : allUsers

    const count = filteredUsers.length
    const users = paginate(filteredUsers, currentPage, pageSize)
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
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Встретился, раз</th>
                                <th scope="col">Оценка</th>
                                <th scope="col">Избранное</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((value, index) => {
                                return (
                                    <User
                                        user={value}
                                        onDelete={onDelete}
                                        key={index + 1}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
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

export default Users
