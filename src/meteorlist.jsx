import { useState, useEffect } from "react";
import MeteorCard from "./meteorcard";

const MeteorList = () => {
  const [meteors, setMeteors] = useState([]);
  const [sortedMeteors, setSortedMeteors] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [meteorsPerPage, setMeteorsPerPage] = useState(7);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json`)
      .then((response) => response.json())
      .then((data) => {
        setMeteors(data);
        setSortedMeteors(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const sortByName = (direction) => {
    setSortDirection(direction);
    const sorted = [...meteors].sort((a, b) => {
      if (direction === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setSortedMeteors(sorted);
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRecordsPerPageChange = (event) => {
    setMeteorsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const indexOfLastMeteor = currentPage * meteorsPerPage;
  const indexOfFirstMeteor = indexOfLastMeteor - meteorsPerPage;
  const currentMeteors = sortedMeteors.slice(
    indexOfFirstMeteor,
    indexOfLastMeteor
  );

  const totalPages = Math.ceil(sortedMeteors.length / meteorsPerPage);

  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => paginate(i)}
        className={`pagination-btn ${i === currentPage ? "active" : ""}`}
      >
        {i}
      </button>
    );
  }

  const totalRecords = sortedMeteors.length;
  const startRecord = indexOfFirstMeteor + 1;
  const endRecord = Math.min(indexOfLastMeteor, totalRecords);

  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <div className="meteor-list">
      <label className="a-z" htmlFor="sort-direction">
        Sort by name:
      </label>
      <select
        id="sort-direction"
        onChange={(e) => sortByName(e.target.value)}
        value={sortDirection}
      >
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <ul className="list-ul">
        {currentMeteors.map((meteor) => {
          return <MeteorCard key={meteor.id} meteor={meteor} />;
        })}
      </ul>
      <div className="pagination">
        <span>Records per page</span>
        <select onChange={handleRecordsPerPageChange} value={meteorsPerPage}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <span>{`${startRecord} to ${endRecord} of ${totalRecords}`}</span>
        <button
          className="pagination-button"
          onClick={() => paginate(1)}
          disabled={currentPage === 1}
        >
          ⏮
        </button>
        <button
          className="pagination-button"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ⏪
        </button>
        <button
          className="pagination-button"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          ⏩
        </button>
        <button
          className="pagination-button"
          onClick={() => paginate(totalPages)}
          disabled={currentPage === totalPages}
        >
          ⏭
        </button>
      </div>
    </div>
  );
};

export default MeteorList;
