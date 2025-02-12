import Heading from '../components/Heading'
import RecentTransactions from '../components/RecentTransactions'
import RevenueChart from '../components/RevenueChart'
import SideMenu from '../components/SideMenu'
import './App.css'

function App() {

  return (
    <>
      <SideMenu />
      <div>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard</p>
      </div>
      {/* <Heading /> */}
      <div className='salesData'>
        <RevenueChart />
        <RecentTransactions />
      </div>
    </>
  )
}

export default App
