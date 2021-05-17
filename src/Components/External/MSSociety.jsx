import { Link } from 'react-router-dom';

const Society = (props) => {
    return (
        <>
        <h1 className="text-black text-center display-4">MS Society</h1>
        <br></br>
        <br></br>
        
        <div class="container">
            <div class="row">
                <div class="col">
                    <img width="100%"src='MSsociety.png' alt="Cup of Pills"/>
                    </div>
                    
                    <div class="col">
                        <p>MS Society is one of 2 main non profit organisations that seek to raise awareness about MS. 
                            The site offers informatin from advice; the latest new items; chatrooms; research and publications.
                            It can be used as a great way to get the information that you need about MS whether you have a recent 
                            diagnosis or are looking for ways to keep up with the most current data on medications; therapies and 
                            lifetsyle trends which may have an impact against the illness. 
                        </p>
                        <br></br>
                        <p>Fancy a look around checkout - <br></br>
                            <Link to={{ pathname:"https://www.mssociety.org.uk/"}} target="MS Society">MS Society</Link></p>
                        </div>
                        </div>
                        </div>

       
      </>
    );
}

export default Society; 