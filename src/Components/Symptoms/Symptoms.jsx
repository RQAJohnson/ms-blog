import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';


const Symptoms = (props) => {
    return (
    <>
    <br></br>
    <br></br>
    <h1 className="text-black text-center display-4">My Leg Hurts...</h1>
    
    <div class="container mt-5">
  <section class="text-center">

    <h3 class="font-weight-bold mb-5">Signs & Symptoms</h3>

    <div class="row">

   {/* https://www.nhs.uk/conditions/multiple-sclerosis/living-with/ */}

      <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">

        <div class="card hoverable">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card cap"/>

          <div class="card-body">
            <h6 class="card-title text-muted text-uppercase font-small mt-1 mb-3">What this Means for me?</h6>
            
            <p class="mb-2">Maintaining healthy habits (eating; exercise; no smoking) and regular medical vists are some of the ways to support 
            yourself and/or a loved one. Outlined below are other things to consider when demonstrating symptoms or getting a diagnosis.
            <br></br>  
            <br></br>    
            <li>contacting DVLA</li>
            <li>Setting up a support system (family; friends; blog sites)</li>
            </p>

          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-md-0 mb-4">
        <div class="card hoverable">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1565071783280-719b01b29912?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dml0YW1pbiUyMGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card cap"/>

          <div class="card-body">
            <h6 class="card-title text-muted text-uppercase font-small mt-1 mb-3">Diagnosis</h6>
            <p class="mb-2">Diagnosing MS can be somewhat difficult as other factors may have a neurological affect on the body. According to the 
            <Link to={{ pathname:"https://www.nhs.uk/conditions/multiple-sclerosis/diagnosis/"}} target="NHSwebsite"> NHS</Link> there would need 
            to be evidence of at least 2 seperate 
            attacks in order to confidently diagnose MS. 
            <br></br>
            <br></br>
            <i>Possible Tests include: </i>
            <li>MRI Scans</li>
            <li>Blood Tests</li>
            <li>Lumbar Puncture Tests</li>
            </p>

          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-0">

        <div class="card hoverable">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlYXRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60S" alt="Card cap"/>

        
          <div class="card-body">
            <h6 class="card-title text-muted text-uppercase font-small mt-1 mb-3">Causes</h6>
            <p class="mb-2">Whilst there is no direct cause for MS, there are some factors which coud be suggested. <b>For example</b>, a lack of Vitamin D.
            Simply put there is a greater chance of someone being diagnosed with MS in a country like Ireland than in a country like Columbia due to the lack of 
            Vitamin D and sunlight.
            <br></br>
            <br></br>
            <i>Other Factors include: </i>
            <li>Being a smoker</li>
            <li><Link to={{ pathname:"https://www.nhs.uk/conditions/multiple-sclerosis/causes/"}} target="NHSwebsite"> Being female</Link>
            </li>
            </p>

          </div>

        </div>
        

      </div>
      
    </div>
  </section>
  <br></br>
  <br></br>
  

  <div className="container" align="center">
    <p className="lead text-center text-black pt-2 mb-6">A more in depth look into MS; Signs and Symptoms.</p>
    </div>
    <br></br>
    <br></br>

  <div class="row" className="container" align="center">
      <div class="col-md-8 mx-auto mb-4">
      <ReactPlayer url='https://www.youtube.com/watch?v=A8ZK4VWmbGc' 
      controls={true}/>        

      </div>
    </div>
  

</div>
    
        </>
    );
}

export default Symptoms; 