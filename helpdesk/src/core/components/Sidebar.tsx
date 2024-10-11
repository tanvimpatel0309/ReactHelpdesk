
function Sidebar() {
    return (
      // Starts:primary nav
        <aside className="primary-nav d-flex flex-column h-100 py-3 ps-3">
        <div className="flex-grow-1 d-flex flex-column justify-content-between overflow-hidden">
          <ul className="list-unstyled overflow-auto menu-bar pl-4 pt-4 pb-4">
            <li className="position-relative list-items">
              <a className="font-weight-semibold" title="Category">
                <span className="icon icon-clients d-flex"></span>
                <span className="menu-items pl-2">Category</span>
              </a>
            </li>
            <li className="position-relative list-items">
              <a className="font-weight-semibold" title="Ticket">
                <span className="icon icon-form-designer d-flex"></span>
                <span className="menu-items pl-2">Ticket</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
         // Ends:primary nav
    );
}

export default Sidebar;