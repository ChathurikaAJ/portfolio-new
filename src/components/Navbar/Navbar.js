import './Navbar.scss'
import { BiDownArrow, BiUpArrow} from 'react-icons/bi';
import { useState } from 'react';


const Navbar = () => {

  const [showlist, setShowList] = useState(false)

  const handleClick = () => {
    setShowList(!showlist)
  }

  return (
    <div className='Nav'>
      <div className='Nav__arrow'>
        {!showlist && <BiDownArrow onClick={handleClick}/>}
        {showlist && <BiUpArrow onClick={handleClick}/>}
      </div>
      <div className={showlist ? "Nav__list" : "Nav__list-hide"}>
        <div className='Nav__title'>About</div>
        <div className='Nav__title'>Skills</div>
        <div className='Nav__title'>Projects</div>
        <div className='Nav__title'>Contact</div>
      </div>
    </div>
    
  )
}

export default Navbar

