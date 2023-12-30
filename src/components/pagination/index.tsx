import Link from 'next/link';

interface PaginationProps {
  data: { path: string, number: number }[];
}

const Pagination = ({ data }: PaginationProps) => {
  return (
    <div className="pagination py-3 mb-3">
      <div className="container">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            {data.map((item, index) => (
              <li className="page-item" key={index}>
                <Link className="page-link" href={item.path}>
                  {item.number}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
