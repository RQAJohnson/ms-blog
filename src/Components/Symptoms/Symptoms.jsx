

const Symptoms = (props) => {
    return (
    <>
    <br></br>
    <br></br>
    <h1 className="text-black text-center display-4">My Leg Hurts...</h1>
    <div className="container" align="center">
        <p className="lead text-center text-black pt-2 mb-5"> What this means for me? | Diagnosis | How can it be treated?
        </p>
    </div>

    <div class="container mt-5">
  <section class="text-center">

    <h3 class="font-weight-bold mb-5">Recent Blog Posts</h3>

    <div class="row">

      <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">

        <div class="card hoverable">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" alt="Card image cap"/>

          <div class="card-body">
            <p class="card-title text-muted text-uppercase font-small mt-1 mb-3">News</p>
            <p class="mb-2">We relocated our office to a new designed garage</p>

          </div>

        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-md-0 mb-4">
        <div class="card hoverable">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/project4.jpg" alt="Card image cap"/>

          <div class="card-body">
            <p class="card-title text-muted text-uppercase font-small mt-1 mb-3">Marketing</p>
            <p class="mb-2">Top five brilliant content marketing strategies</p>

          </div>
        </div>

      </div>

      <div class="col-lg-4 col-md-6 mb-0">

        <div class="card hoverable">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg" alt="Card image cap"/>

        
          <div class="card-body">
            <p class="card-title text-muted text-uppercase font-small mt-1 mb-3">Design</p>
            <p class="mb-2">Best practices for minimalist design with example</p>

          </div>

        </div>
        

      </div>
      
    </div>
  </section>
  <br></br>
  <br></br>

  <div class="row">
      <div class="col-md-8 mx-auto mb-4">

             <img class="rounded img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg" alt="Video title"/>
         <div class="mask flex-center rgba-white-light">
              <a id="play" class="btn-floating btn-danger btn-lg" data-toggle="modal" data-target="#modal1"><i class="fas fa-play"></i></a>
             </div>
          

      </div>
    </div>
  

</div>
    
        </>
    );
}

export default Symptoms; 