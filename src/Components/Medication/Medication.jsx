import ReactPlayer from 'react-player'

const Medication = (props) => {
    return (
        <>
        <h1>Info about medication will go here</h1>
        <div className="container" align="center">
            <p className="lead text-center text-black pt-2 mb-5">What is MS? | Different Types? | Who Can I talk to? | How can it be treated?.</p>
            </div>

            <div class="row">
      <div class="col-md-8 mx-auto mb-4">
      <ReactPlayer url='https://www.youtube.com/watch?v=8exiUQAiw3w' />        

      </div>
    </div>
            <p></p>
            <p></p>
            <p></p>
        </>
    );
}

export default Medication; 