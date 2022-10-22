import "./ListItem.scss"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import StarsIcon from '@mui/icons-material/Stars';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import { useState } from 'react';


const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const vid = "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
  return (

    <div className='listItem'
      style={{ left: isHovered && index * 1 - 1 + index * 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <img src="images/1.png" alt="" />
      {isHovered && (
        <>
          <video src={vid} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayCircleOutlineIcon />
              <AddCircleOutlineIcon />
              <StarsIcon />
              <NotInterestedIcon />

            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 min</span>
              <span className='limit'>+12</span>
              <span>2018</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, nam?
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  )
}

export default ListItem