import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    // Starts:primary nav
    <aside className="primary-nav d-flex flex-column h-100 py-3 ps-3">
      <div className="flex-grow-1 d-flex flex-column justify-content-between overflow-hidden">
        <ul className="list-unstyled overflow-auto menu-bar pl-4 pt-4 pb-4">
          {/* Starts: category link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `position-relative list-items ${isActive || (window.location.pathname === '/add') || (window.location.pathname === '/:id') ? 'active' : ''}`
            }>
            <a className="menu-items pl-2">Category</a>
          </NavLink>
        </ul>
      </div>
    </aside>
    // Ends:primary nav
  );
}

export default Sidebar;
