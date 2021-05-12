import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';

const Medication = (props) => {
    return (
        <>
        <br></br>
        <br></br>
        <h1 className="text-black text-center display-4">Disease Modifying Drugs - DMDs</h1>
        <div className="container" align="center">
            <p className="lead text-center text-black pt-2 mb-5">What they are? | How they are used? | What if I don't like them?.</p>
        </div>
        
        <div class="row" className="container" align="center" text="black">
      <div class="col-md-8 mx-auto mb-4">
      <ReactPlayer url='https://www.youtube.com/watch?v=8exiUQAiw3w' />        

      </div>
      <hr class="mt-1 mb-1"/>
      <br></br>

      <h2>Injectable Medications: <img width="60"src="data:image/jpeg;base64,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"  
      alt="Rebif Injection"/></h2>
            <p><b>What They Are?</b> Injections similar to Rebif are?
            <br></br>
            <b>How are they used?</b> Taken twice a week
            <br></br>
            <b>What if I don't like them?</b> Being able to change what kind of medication you are on at any time.</p>
            <p>For further on U ratings or to search for a current U rated film go to: <Link to={{ pathname:"https://www.healthline.com/health/multiple-sclerosis/drugs#injections-and-infusions"}} target="NHSwebsite"> Health Line</Link> 
            </p>
            
            <hr class="mt-1 mb-1"/>
      <br></br>

      <h2>Oral Medications: <img width="80"src="https://images.unsplash.com/photo-1584362917137-56406a73241c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBpbGxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  
      alt="Cup of Pills"/></h2>
            <p><b>What They Are?</b> Injections similar to Rebif are?
            <br></br>
            <b>How are they used?</b> Taken twice a week
            <br></br>
            <b>What if I don't like them?</b> Being able to change what kind of medication you are on at any time.</p>
            <p>For further on U ratings or to search for a current U rated film go to: <Link to={{ pathname:"https://www.healthline.com/health/multiple-sclerosis/drugs#injections-and-infusions"}} target="NHSwebsite"> Health Line</Link> 
            </p>

            <hr class="mt-1 mb-1"/>
      <br></br>

      <h2>Infused Medications: <img width="30"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8YA5pIrPAmenE--8w-ZkhNnKOZ9XAPhPtQ&usqp=CAU"  alt="Universal Rating"/></h2>
      <p><b>What They Are?</b> Injections similar to Rebif are?
            <br></br>
            <b>How are they used?</b> Taken twice a week
            <br></br>
            <b>What if I don't like them?</b> Being able to change what kind of medication you are on at any time.</p>
            <p>For further on U ratings or to search for a current U rated film go to: <Link to={{ pathname:"https://www.healthline.com/health/multiple-sclerosis/drugs#injections-and-infusions"}} target="NHSwebsite"> Health Line</Link> 
            </p>

    </div>            
        </>
    );
}

export default Medication; 