import React from 'react'
import '../components/Member.css'
import one from '../public/people/1.png';
import two from '../public/people/2.png';
import three from '../public/people/3.png';
import four from '../public/people/4.png';
import star from '../public/icons/star.png';

function Member() {
  return (
          <div className='ana-container4'>
        <div className='heading4'>
            <h4>Team Member Perfomance</h4>
        </div>
        <div className='body4'>
          <div className='person'>
            <div className='star-person'>
                <img src={one} alt='one' className='emp-image'/><span><img src={star} alt='star' className='star-image'/></span> 
                <div className='employee'>
                    <h4>Anirudh Arun</h4>
                    <p>Project Manager</p>    
                </div>   
            </div>
            <div className='score'>9.8</div>
          </div>
          <div className='person'>
            <div className='normal'>
                <img src={two} alt='two' className='emp-image'/>
                    <div className='employee'>
                    <h4>Samvrant</h4>
                    <p>UX Designer</p>    
                </div>   
            </div>
            <div className='score'>9.2</div>
          </div>
          <div className='person'>
            <div className='normal'>
                <img src={three} alt='three' className='emp-image'/>
                    <div className='employee'>
                    <h4>Aryamann</h4>
                    <p>UI Designer</p>    
                </div>   
            </div>
            <div className='score'>9.1</div>
          </div>
          <div className='person'>
            <div className='normal'>
                <img src={four} alt='four' className='emp-image'/>
                    <div className='employee'>
                    <h4>Dhanush</h4>
                    <p>Motion Designer</p>    
                </div>   
            </div>
            <div className='score'>8.5</div>
          </div>
        </div>
    </div>
    
  )
}

export default Member