import React, { useRef } from "react";
import "./ComponentStyle.css";

const Pagination = ({ handleNextPage, handlePrevPage, handleGoToPage, currentPage, totalPages }) => {
    const paginationRef = useRef(null);

    const handleKeyDown = (e) => {
        const focusedElement = document.activeElement;
        const buttons = Array.from(paginationRef.current?.querySelectorAll(".page-number, .pagination-arrow"));
        const index = buttons.indexOf(focusedElement);

        if (index !== -1) {
            if (e.key === "ArrowLeft" && index > 0) {
                buttons[index - 1].focus();
            } else if (e.key === "ArrowRight" && index < buttons.length - 1) {
                buttons[index + 1].focus();
            } else if (e.key === "Enter") {
                focusedElement.click();
            }
        }
    };

    return (
        <div
            className="pagination"
            ref={paginationRef}
            onKeyDown={handleKeyDown}
            tabIndex="0"
        >
            <span
                className={`pagination-arrow ${currentPage === 1 ? "disabled" : ""}`}
                onClick={handlePrevPage}
                tabIndex={currentPage === 1 ? -1 : 0}
            >
                {"<"}
            </span>
            <span
                className={`page-number ${currentPage === 1 ? "active" : ""}`}
                onClick={() => handleGoToPage(1)}
                tabIndex={0}
            >
                1
            </span>
            {currentPage > 3 && <span className="ellipsis">...</span>}
            {Array.from({ length: 3 }, (_, index) => {
                const page = currentPage - 1 + index;
                if (page > 1 && page < totalPages) {
                    return (
                        <span
                            key={page}
                            className={`page-number ${currentPage === page ? "active" : ""}`}
                            onClick={() => handleGoToPage(page)}
                            tabIndex={0}
                        >
                            {page}
                        </span>
                    );
                }
                return null;
            })}
            {currentPage < totalPages - 2 && <span className="ellipsis">...</span>}
            {currentPage <= totalPages && (
                <span
                    className={`page-number ${currentPage === totalPages ? "active" : ""}`}
                    onClick={() => handleGoToPage(totalPages)}
                    tabIndex={0}
                >
                    {totalPages}
                </span>
            )}
            <span
                className={`pagination-arrow ${currentPage === totalPages ? "disabled" : ""}`}
                onClick={handleNextPage}
                tabIndex={currentPage === totalPages ? -1 : 0}
            >
                {">"}
            </span>
        </div>
    );
};

export default Pagination;
