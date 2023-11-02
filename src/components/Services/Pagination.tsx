const Pagination = (props: any) => {
  const { servicePerPage, allServices, setCurrentPage, currentPage } = props;
  const pages = [];
  for (let i = 1; i <= Math.ceil(allServices.length / servicePerPage); i++) {
    pages.push(i);
  }

  const handlePageClick = (page: number) => {
    const layout = window.document.getElementById('layout')
    if(layout){
      layout.scrollIntoView();
    }
    setCurrentPage(page);
  };

  return (
    <div>
      {pages.map((page, index) => {
        const isActive = page === currentPage;

        const buttonStyle = {
          marginLeft: '7px',
          width: '50px',
          height: '50px',
          borderRadius: '5px',
          color: isActive ? 'white' : '#22a6b3',
          background: isActive ? '#00b894' : 'white',
          border: isActive ? 'none' : '2px solid #22a6b3',
        };

        return (
          <button
            style={buttonStyle}
            onClick={() => handlePageClick(page)}
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
