import { Pagination } from 'react-bootstrap';

export default function JobsPagination({page, setPage, hasNextPage}) {
  function adjustPage(diff) {
    setPage(prevPage => prevPage + diff);
  }

  return (
    <Pagination>
      {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
      {page !== 1 && <Pagination.Item onClick={() => setPage(1)} >1</Pagination.Item>}
      {page > 3 && <Pagination.Ellipsis />}
      {page > 2 && <Pagination.Item onClick={() => adjustPage(-1)} >{page - 1}</Pagination.Item>}
      <Pagination.Item active>{page}</Pagination.Item>
      {hasNextPage && <Pagination.Item onClick={() => adjustPage(1)} >{page + 1}</Pagination.Item>}
      {hasNextPage && <Pagination.Next onClick={() => adjustPage(1)} />}
      
    </Pagination>
  )
}