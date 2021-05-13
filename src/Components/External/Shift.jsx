import ReactPlayer from 'react-player';
import './Shift.css';

const Shift = (props) => {
    return (
        <>
        <br></br>
        <h1 className="text-black text-center display-4">Shift.MS</h1>
        <div className="container" align="center">
            <p>Watch the video below to find out whats in store for you when you sign up</p>
        </div>

        <div align="center">
            <ReactPlayer playing url='SMS.mp4' 
                className='video'
                controls={true}/>     
        </div> 

        <div class="row" className="container" align="center" text="black">
    
        <hr class="mt-1 mb-1"/>
        <br></br>

      <h2>What is it?</h2>
        <p>The social networking site for MS users to come together as a community and support each others needs when
            it comes to treatment plans, swapping diagnosis stories and finding great support networks within their local communities.
            Many users, make use of the platform by getting advice on what therapies would be best for them based on the type of MS 
            they have; others find comfort in the knowledge that are individuals like themselves are also going through something similar 
            within their community. 
        </p>
        </div>


        </>
    );
}

export default Shift; 