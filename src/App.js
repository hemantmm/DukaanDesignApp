import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function App() {
  return (
   <>
    <div className='flex home'>
      <Sidebar />
      <Navbar />
    </div>
   </>
  );
}

export default App;
