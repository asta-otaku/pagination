import React, { useMemo } from "react";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pages = useMemo(() => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }, [totalPosts, postsPerPage]);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => paginate(number)}
              href={`#${number}`}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
