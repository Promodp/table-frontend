import React, { useState, useEffect, useRef } from "react";
import { TableHeaders, ApiUrls, Constant } from "../constant/constant";
import usePagination from "../hooks/usePagination";
import useApiCall from "../hooks/useApiCall";
import Pagination from "./Pagination";
import "./ComponentStyle.css";

const ProjectTable = () => {
    const [sortedProjects, setSortedProjects] = useState([]);
    const tableRef = useRef(null);

    const { data: projects, loading, error } = useApiCall(ApiUrls.PROJECTS_API);
    const { currentItems, handleNextPage, handlePrevPage, handleGoToPage, currentPage, totalPages } = usePagination(sortedProjects);

    useEffect(() => {
        if (projects.length > 0) {
            const sorted = projects.sort((a, b) => a["percentage.funded"] - b["percentage.funded"]);
            setSortedProjects(sorted);
        }
    }, [projects]);

    const handleKeyDown = (e) => {
        const index = Number(document.activeElement?.dataset?.index || -1);
        if (index !== -1) {
            const nextIndex = e.key === "ArrowUp" ? index - 1 : e.key === "ArrowDown" ? index + 1 : -1;
            const nextRow = tableRef.current?.querySelector(`[data-index="${nextIndex}"]`);
            if (nextRow) nextRow.focus();
        }
    };

    if (loading) return <div>{Constant.LOADING}</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="table-wrapper">
            <div className="card">
                <div className="title">{Constant.TITLE}</div>
                <table
                    className="projects-table"
                    ref={tableRef}
                    onKeyDown={handleKeyDown}
                >
                    <thead>
                        <tr>
                            <th>{TableHeaders.SERIAL_NUMBER}</th>
                            <th>{TableHeaders.PERCENTAGE_FUNDED}</th>
                            <th>{TableHeaders.AMOUNT_PLEDGED}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((project, index) => (
                            <tr
                                key={project["s.no"]}
                                data-index={index}
                                tabIndex="0"
                                className="table-row"
                            >
                                <td>{(currentPage - 1) * 5 + index + 1}</td>
                                <td>{project["percentage.funded"]}%</td>
                                <td>${project["amt.pledged"].toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    handleNextPage={handleNextPage}
                    handlePrevPage={handlePrevPage}
                    handleGoToPage={handleGoToPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            </div>
        </div>
    );
};

export default ProjectTable;
