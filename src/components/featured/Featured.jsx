import "./Featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const Featured = () => {
  return (
    <div className='featured'>
      <img  src="images/FeaturedCoverImage.png" alt="" />
      <div className="info">
        <img src="images/FeaturedTitleImage.png" alt="" />
        <span className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim placeat hic quas recusandae dolor architecto voluptatum voluptatem odio culpa! Impedit, quaerat! Officia facere tenetur, adipisci fugiat sint consequuntur maiores architecto.</span>
        <div className="buttons">
          <button className='play'>
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoIcon />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured