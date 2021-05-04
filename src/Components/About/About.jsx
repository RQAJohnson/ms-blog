import { Linkedin } from "react-bootstrap-icons";

const About = (props) => {
    return (
        <>
        <div class="col-md-3 mb-4">
            <div class="view z-depth-1 mb-4">
                <img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2dyYW1taW5nfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                class="img-fluid mx-auto" alt="smaple image"/>
                </div>
                <h6 class="font-weight-bold text-white">Rianna Johnson</h6>
                <small class="text-white">Developer</small>
                <p class="mt-3 text-white">Tom Hanks's brother (Jim Hanks) voiced Sheriff Woody in Toy Story when he was too busy.</p>
                <ul class="list-unstyled d-flex justify-content-center mt-3 mb-0 text-muted">
                    <li><a class="nav-link" href="https://github.com/RQAJohnson" target="_blank">
                        <Github className="mx-3"color="white" size={40}/></a></li>
                        <li><a class="nav-link" href="www.linkedin.com/in/rianna-johnson-19307b132" target="_blank">
                        <Linkedin className="mx-3"color="white" size={40}/></a></li>
                </ul>
        </div>
        <h1>my name is rianna</h1>
        </>
    );
}

export default About; 