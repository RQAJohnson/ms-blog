import {Link} from 'react-router-dom';

const Website = (props) => {
    return (
        <>
        <br></br>
        <h1 className="text-black text-center display-4">NHS Website</h1>
        <br></br>
        <br></br>

        <div class="container">
            <div class="row">
                <div class="col">
                    <img width="100%"src='NHSWebsite2.png' alt="Cup of Pills"/>
                    </div>
                    
                    <div class="col">
                        <p>Providing concise and easy to read information, the NHS has been able to condense vital information
                            someone may need in order to seek out and learn about Multiple Sclerosis. The informations has been 
                            laid out across the site into subheading categories and means that if there is a specifc section 'symptoms'
                            that you are looking to read; learn or get advice about, you are able to navigate directly to the section 
                            yuo require. 
                        </p>
                        <br></br>
                        <p>Fancy a look around checkout - <br></br>
                            <Link to={{ pathname:"https://www.nhs.uk/conditions/multiple-sclerosis/"}} target="MS Society">NHS</Link></p>
                        </div>
                        </div>
                        </div>
        </>
    );
}

export default Website; 