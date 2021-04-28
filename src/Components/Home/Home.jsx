import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';
import { DropletHalf, FileMedicalFill, HandThumbsUp, Question, Thermometer } from 'react-bootstrap-icons';

  const items = [
    {
      id: 1,
      src:'https://images.unsplash.com/photo-1566669437687-7040a6926753?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGJyYWlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      altText: 'Image of brain',
    },
    {
      id: 2,
      src:'https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      altText: 'Image of a doctor holding medication',
    },
    {
        id: 3,
        src:'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5lcnZlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        altText: 'Image of a plastic brain and nerve ending',
    },
    {
      id: 4,
      src:'https://images.unsplash.com/photo-1567607673554-2048def2c6b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmVydmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      altText: 'Image of a human skeleton with nerves showing',
    },
  ]; 

const Home = (props) => {
    return (
        <>
        <br></br>
      <h1 className="text-black text-center display-4">MS - Multiple Sclerosis</h1>
      <br></br>
      <div className="container" align="center">
    <p className="lead text-center text-black pt-2 mb-5">What is MS? | Different Types? | Who Can I talk to? | How can it be treated?.</p>
    </div>

      <container><Slider classNames={horizontalCss} autoplay={2000}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{ background: `url('${item.src}') no-repeat center center` }}
          >
            <div className="slides text-black inner" align="center">
              <h4>{item.caption}</h4>
            </div>
          </div>
        ))}
    </Slider>
    <br></br>

    <div className="container" align="center" >
        <hr class="mt-1 mb-1"/>
        </div>
        <br></br>

      <div className="container" align="center" >
      <h4 className="text-black"><u>What is MS?</u></h4>
      <p className="text-black">MS (Multiple Sclerosis) is a long term neurological condition which can affect the brain and spinal cord
      (Central Nervous System). The disease can cause permanent damage or the deteriation of the nerves, although there is no cure of the 
      disease some variations of the disease can be manageable with the modification of disease modifying drugs (<Link to="/medication">DMDs</Link>). These treatments can 
      aide in the recovery of attacks and help a person continue to strive with little to no affect on their daily lives.  
      <br></br>
      <br></br>

      <i>Different ways it may affect someone:</i>
      <li>Vision</li>
      <li>Numbness and loss of feeling within arms and legs</li>
      <li>Balance</li>
      <li>Problems such as thinking; learning and planning</li>
    </p> 
    <br></br>
    <br></br>
    
    <div>
      <Question className="mx-3"color="black" size={85}/>
      <DropletHalf className="mx-3"color="black" size={85}/>
      <FileMedicalFill className="mx-3"color="black" size={85}/>
      <HandThumbsUp className="mx-3"color="black" size={85}/>
      <Thermometer className="mx-3"color="black" size={85}/>
    </div>
    <br></br>
    <br></br>
    
    <h4 className="text-black"><u>Different Types</u></h4>
      <p className="text-black">There are several types of MS which have been listed below. As you direct yourself
      throughout the site, you will become more familiar with how the different disease modifying drugs (<Link to="/medication">DMDs</Link>)
      have an affect on each type of MS. Please see below a list of the different types.<br></br>
      <br></br>

      <li>Clinically Isolated Syndrome (CIS)</li>
      <li>Relapsing and Remitting (RRMS)</li>
      <li>Secondary Progressive MS (SPMS)</li>
      <li>Primary Progressive MS (PPMS)</li>
      </p>
      <br></br>
      <br></br>

      <div className="container" align="center" >
        <hr class="mt-1 mb-1"/>
        </div>
        <br></br>

      <h4 className="text-black"><u>Who Can I  Talk to?</u></h4>
      <p className="text-black">The Standard Screens are open to all who wish to enjoy a fun family day out. 
      The rooms are made up of around 200 seats; Bang and Olufsen surround sound system and 4k screen resolution. 
      For that all important viewing experience!<br></br>
      <br></br>

      <i>Some Things to Enjoy:</i>
      <li>Snacks(including candyfloss and slushies)</li>
      <li>Arcade Games</li>
      <li>VR Experiences (3D)</li>
    </p> 
    <br></br>
    <br></br>
    
    <div>
        <Question className="mx-3"color="black" size={85}/>
        <DropletHalf className="mx-3"color="black" size={85}/>
        <FileMedicalFill className="mx-3"color="black" size={85}/>
        <HandThumbsUp className="mx-3"color="black" size={85}/>
        <Thermometer className="mx-3"color="black" size={85}/>
    </div>
    <br></br>
    <br></br>

    <h4 className="text-black"><u>How Can it be Treated?</u></h4>
      <p className="text-black">With the use of DMDs MS is something which doesn't greatly affect someones daily lives these can be found
      in the form of injections; pills or IV drips. Feel free to navigate through the Medication page to learn more about the 
      different types of (<Link to="/medication">DMDs</Link>) and the affects that they could have on the body.<br></br>
      <br></br>

      <i>Some Things to Enjoy:</i>
      <li>Fine dining and cocktails within the lounge area</li>
      <li>IMAX Screen</li>
      <li><Link to="/NewReleases">Newly Released</Link> Previews</li>
      <li>Ability to rent out screens for large social gatherings</li>
      </p>
      <br></br>
      <br></br>
    
      </div>
      </container> 
        </>
    );
}

export default Home; 