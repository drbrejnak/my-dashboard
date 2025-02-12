import RecentTransactions from '../components/RecentTransactions'
import RevenueChart from '../components/RevenueChart'
import SideMenu from '../components/SideMenu'
import Widgets from '../components/Widgets'

function App() {

  return (
    <>
      <SideMenu />
      <h1 style={{margin:'0'}}>Dashboard</h1>
      <p>Welcome to Your Dashboard</p>
      <Widgets />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'}}>
        <RevenueChart />
        <RecentTransactions />
      </div>
    </>
  )
}

export default App
