import ImgComponent from './ImgComponent';


const PagingComponent = () => {
  return (
      <ul className="paging_ul">
          <li>
              <a href='#none' className='arrow'>
                  <ImgComponent src={'arr_prev_wh12.svg'} />
              </a>
          </li>
          <li>
              <a href='#none' className="on">1</a>
          </li>
          <li>
              <a href='#none'>2</a>
          </li>
          <li>
              <a href='#none'>3</a>
          </li>
          <li>
              <a href='#none' className='etc'>...</a>
          </li>
          <li>
              <a href='#none'>10</a>
          </li>
          <li>
              <a href='#none' className='arrow'>
                  <ImgComponent src={'arr_next_wh12.svg'} />
              </a>
          </li>
      </ul>
  );
};

export default PagingComponent;
