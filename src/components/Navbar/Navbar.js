import './Navbar.scss'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { useState } from 'react';


const NavBar = () => {

  const [showlist, setShowList] = useState(false)


  const handleClick = (event) => {    
    setShowList(!showlist)
  }

  const handleScroll= (id)=> {
    // const element = document.getElementById(id).getBoundingClientRect()
    const element = document.getElementById(id)
    
    
    
     
 
  }


  return (

    <div className='Nav'>
      <div className='Nav__arrow'>
        {!showlist && <BiDownArrow onClick={handleClick} />}
        {showlist && <BiUpArrow onClick={handleClick} />}
      </div>
      <div className={showlist ? "Nav__list" : "Nav__list-hide"}>
        <div onClick={()=>{handleScroll('about')}} className='Nav__title'>About</div>
        <div onClick={()=>{handleScroll('skills')}} className='Nav__title'>Skills</div>
        <div onClick={()=>{handleScroll('projects')}} className='Nav__title'>Projects</div>
        <div onClick={()=>{handleScroll('contact')}} className='Nav__title'>Contact</div>
      </div>
    </div>


  )
}

export default NavBar

