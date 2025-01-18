import { useSearchParams } from 'react-router-dom';
import "./style.css";

export const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({pg: '1'});

    return (
        <div>
            <button className='pagination-button' onClick={() => {
                const pg = query.get('pg');
                if (pg)
                {
                    let currentPage = +pg;
                    if (currentPage > 0) {
                        setQuery({ pg: (currentPage - 1).toString() });
                    }
                }
            }}>Before</button>
            <button className='pagination-button' onClick={() => {
                const pg = query.get('pg');
                if (pg)
               {
                   let currentPage = +pg;
                   setQuery({pg:(++currentPage).toString()});
               }
            }}>Next</button>
      </div>
    );
};
