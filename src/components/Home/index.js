// Write your JS code here
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <div className="home-container">
    <Header />
    <h1>Home Route</h1>
    <LogoutButton />
  </div>
)

export default Home
