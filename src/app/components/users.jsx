import React, { useState } from "react"
import Pagination from "./pagination"
import { paginate } from "../utils/paginate"
import User from "./user"

const Users = ({ users: allUsers, onDelete }) => {
    const count = allUsers.length
    const pageSize = 5
    const [currentPage, setCurrentPage] = useState(1)
    const handlePageChange = (pageIndex) => {
        console.log("page", pageIndex)
        setCurrentPage(pageIndex)
    }
    const users = paginate(allUsers, currentPage, pageSize)
    return (
        <div>
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
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default Users
