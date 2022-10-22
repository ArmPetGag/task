
import "./home.scss"
import SideBar from './../components/SideBar/SideBar';
import Featured from './../components/featured/Featured';
import List from './../components/List/List';

const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <Featured />
      <List/>

    </div>
  )
}

export default Home