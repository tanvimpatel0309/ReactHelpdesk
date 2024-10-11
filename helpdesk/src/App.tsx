import './App.css'
import Header from './core/components/Header';
import Sidebar from './core/components/Sidebar';

function App() {
  return (
    // Starts: Landmark structure of Helpdesk app
    <div className='h-100 d-flex flex-column'>
      {/* Starts:Header component */}
      <Header />
      <div className='d-flex h-100 overflow-hidden'>
        {/* Starts: Sidebar component */}
        <Sidebar />
        {/* Starts: Main content area of the app where the currently selected component is rendered */}
        <main className='d-flex h-100 w-100 py-4 ps-4 overflow-hidden'>
          <div className='overflow-auto pe-4'>
            {/* Page heading */}
            <h1>Category</h1>
            {/* Page content */}
            <p>Rander Category component</p>
          </div>
        </main>
      </div>
    </div>
    // Ends: Landmark structure of Helpdesk app
  )
}
export default App