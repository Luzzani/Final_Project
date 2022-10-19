import { useSelector } from "react-redux";

import "./Paginated.css";

function Paginated({ productPerPage, allProducts, paginatedHandler }) {
  const prevPage = useSelector((state) => {
    return state.productsReducer.prevPage;
  });

  const prevPag = (num) => {
    paginatedHandler(num);
  };

  const pageNum = []; 

  for (let i = 0; i < Math.ceil(allProducts.length / productPerPage); i++) {
    pageNum.push(i + 1);
  }

  return (
    <ul className="paginated__container">
      {pageNum &&
        pageNum.map((num) => {
          return (
            <li key={num}>
              {
                <button
                  className={
                    num === prevPage
                      ? "paginated__number paginated__isActive"
                      : "paginated__number"
                  }
                  onClick={() => prevPag(num)}
                >
                  {num}
                </button>
              }
            </li>
          );
        })}
    </ul>
  );
}

export default Paginated;
