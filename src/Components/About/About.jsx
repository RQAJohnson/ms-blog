import { Linkedin, Github} from "react-bootstrap-icons";


const About = (props) => {
    return (
    <>
    <br></br>
    <br></br>
    <h1 className="text-black text-center display-4">Who am I?</h1>

    <div className="container" align="center" >
    <p className="lead text-center text-black pt-2 mb-5">No I'm not drunk, I have MS. (<i>also, I'm a little drunk</i>) -anon.</p>
        
        <div class="col-md-3 mb-4">
            <div class="view z-depth-1 mb-4">
                <img src="https://images.unsplash.com/photo-1590194360975-c250dde6520d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExNHxfaGItZGw0US00VXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                class="z-depth-1 rounded-circle img-fluid" alt="smaple image"/>
                </div>
                <h4 className="text-black">Rianna Johnson</h4>
                <medium class="text-black">Developer</medium>
                <p class="mt-3 text-black">A big dreamer who loves all things creative from learning about AI to watching shows like 'Black Mirror' and 'Alice in Borderland'.</p>
                <ul class="list-unstyled d-flex justify-content-center mt-3 mb-0 text-muted">
                    <li><a class="nav-link" href="https://github.com/RQAJohnson" target="_blank">
                        <Github className="mx-3"color="black" size={35}/></a></li>
                        <li><a class="nav-link" href="https://www.linkedin.com/in/riannasj" target="_blank">
                        <Linkedin className="mx-3"color="black" size={35}/></a></li>
                </ul>
        </div>
        </div>
        </>
    );
}

export default About; 