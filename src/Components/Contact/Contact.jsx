import { Globe } from "react-bootstrap-icons";

const Contact = (props) => {
    return (
        <>
        <div class="container my-5">
            <section class="text-center dark-grey-text mb-5">
                <div class="card">
                    <div class="card-body rounded-top border-top p-9">
                    <h3 class="text-black text-center display-4">Get in Touch?</h3>
                    <p class="font-weight-light mx-auto mb-4 pb-2">For any more information please feel free to contact your local GP and/or 
                    hospital.</p>

                    <form class="mb-4 mx-md-5" action="">

            <div class="row">
                {/* <div class="col-md-6 mb-4">
                    <input type="text" id="name" class="form-control" placeholder="Name"/>

                </div> */}

                <div class="col-md-12 mb-4">              
                    <input type="email" id="email" class="form-control" placeholder="Email"/>
                </div>

            </div>

          <div class="row">
                <div class="col-md-12 mb-4">
                    <input type="text" id="subject" class="form-control" placeholder="Subject"/>

                </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group mb-4">
                <textarea class="form-control rounded" id="message" rows="3" placeholder="How can we help?"></textarea>
              </div>

              <div class="text-center">
                <button type="submit" class="btn btn-info btn-md">Submit</button>
              </div>

        </div>
          </div>
            </form>
            
            </div>
            </div>
            </section>

            <div class="row text-center">
        <div class="col">
            <i class="fas fa-map-marker-alt fa-2x blue-text"></i>
            <p><a class="nav-link" href="https://mstrust.org.uk/" target="_blank">
                        <Globe className="mx-3"color="black" size={30}/></a>MS Trust</p>
            </div>
        
            <div class="col">
            <i class="fas fa-phone fa-2x mt-4 blue-text"></i>
            <p><a class="nav-link" href="https://www.nationalmssociety.org/" target="_blank">
                        <Globe className="mx-3"color="black" size={30}/></a>National MS Society</p>
                        </div>
          
                        <div class="col">
            <i class="fas fa-envelope fa-2x mt-4 blue-text"></i>
            <p class="mb-0"><a class="nav-link" href="https://www.nhs.uk/conditions/multiple-sclerosis/" target="_blank">
                        <Globe className="mx-3"color="black" size={30}/></a>NHS Website</p>
                        </div>

                        <div class="col">
            <i class="fas fa-envelope fa-2x mt-4 blue-text"></i>
            <p class="mb-0"><a class="nav-link" href="https://shift.ms/" target="_blank">
                        <Globe className="mx-3"color="black" size={30}/></a>Shift.MS</p>
                        </div>

            
        </div>
      </div>


        </>
    );
}

export default Contact; 