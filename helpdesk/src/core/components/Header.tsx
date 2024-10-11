
import logo from '../../assets/image/logo.png';

function Header() {
  return (
    // Starts: header
    <header className='border-bottom app-header d-flex justify-content-between align-items-center p-3'>
      {/* Starts: 1Rivet logo  */}
      <figure className='d-flex align-items-center mb-0'>
        <img src={logo} alt="1Rivet logo" />
        <figcaption className='ms-2 h4 mb-0'> | 1Rivet</figcaption>
      </figure>
      {/* Starts:user details dropdown */}
      <div role="menu" className='hover-box'>
        <span role='button' className='hover-item'>TP</span>
        <div className='show-box'>
          <div className='d-flex'>
            <figure className='dimension-2x short-name d-flex justify-content-center align-items-center me-3 border-rounded'>
              <figcaption>TP</figcaption>
            </figure>
            <ul role="listbox" className='list-unstyled mb-0'>
              <li role="menuitem" className='show-box-items border-bottom-1x'> Tanvi Patel</li>
              <li role="menuitem" className='show-box-items border-bottom-1x'> 1R-0149</li>
              <li role="menuitem" className='show-box-items border-bottom-1x'>TanviPatel@1rivet.com</li>
            </ul>
          </div>
          <ul role="listbox" className='list-unstyled border-top mt-2 pt-2 mb-0'>
            <li role="menuitem" className='show-box-items border-bottom-1x text-capitalize mb-1'>
              <a href='#' className='user-text text-black'>my profile</a>
            </li>
            <li role="menuitem" className='show-box-items border-bottom-1x text-capitalize'>
              <a href='#' className='user-text text-danger'>log out</a>
            </li>
          </ul>
        </div>

      </div>
    </header>
    // Ends: header

  );
}

export default Header;
