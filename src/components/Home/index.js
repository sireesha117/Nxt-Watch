import Header from '../Header'
import SideBar from '../SideBar'
import {Divide} from './styledComponents'

const Home = () => (
  <div>
    <Header />
    <Divide>
      <SideBar />
      <p>hello home</p>
    </Divide>
  </div>
)

export default Home
