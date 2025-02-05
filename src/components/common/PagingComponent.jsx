import React from 'react';
import ImgComponent from './ImgComponent';

const PagingComponent = () => {
  return (
      <ul class="paging_ul">
          <li>
              <a className='arrow'>
                  <ImgComponent src={'arr_prev_wh12.svg'} />
              </a>
          </li>
          <li>
              <a className="on">1</a>
          </li>
          <li>
              <a>2</a>
          </li>
          <li>
              <a>3</a>
          </li>
          <li>
              <a className='etc'>...</a>
          </li>
          <li>
              <a>10</a>
          </li>
          <li>
              <a className='arrow'>
                  <ImgComponent src={'arr_next_wh12.svg'} />
              </a>
          </li>
      </ul>
  );
};

export default PagingComponent;
