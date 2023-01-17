import React from 'react'

const Footer = () => {
  return (
   <>
   <div className='row1' style={{height:"200px"}}>
   <div className='col-md-6 foot column1'><h2><b>Take your Idea to Execute</b></h2></div>
   <div className='col-md-6 column1' style={{padding:"90px"}}><h3>Lets Connect</h3></div>
   </div>

   
  
  <footer className="text-center text-lg-start bg-dark text-muted">
    
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      
      <div>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-twitter" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-google" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-instagram" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-linkedin" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-github" />
        </a>
      </div>
      
    </section>
   
    <section className="">
      <div className="container text-center text-md-start mt-5">
       
        <div className="row mt-3">
        
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           
            <h2 className="text-uppercase fw-bold mb-4 text-light">
              <i className="fas fa-gem me-3 text-secondary" />
              SPANIDEA
            </h2>
            <p>
              <h3 className='text-light'>ISO 9001:2015 certified Company</h3>
            </p>
          </div>
         
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4 text-light">Services</h6>
            <p>
              <a href="#!" className="text-light">
                Product Enigineering
              </a>
            </p>
            <p>
              <a href="#!" className="text-light">
                Digital Enigineering
              </a>
            </p>
            <p>
              <a href="#!" className='text-light'>
                Technology consulting
              </a>
            </p>
          </div>
          
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4 text-light">About Us</h6>
            <p>
              <a href="#!" className="text-light">
                About SpanIdea
              </a>
            </p>
            <p>
              <a href="#!" className="text-light">
                Certification
              </a>
            </p>
            <p>
              <a href="#!" className="text-light">
                Careers
              </a>
            </p>
            <p>
              <a href="#!" className="text-light">
                Awards
              </a>
            </p>
          </div>
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           
          <h6 className="text-uppercase fw-bold mb-4 text-light">
              <i className="fas fa-gem me-3 text-secondary" />
              Latest News
            </h6>
            <p>
              <h3 className='text-light'>SpanIdea System joins Telecom Infra Projects(TIP)</h3>
            </p>
            
          </div>
          
        </div>
      
      </div>
    </section>
    
    <div
      className="text-center p-4 text-light"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
    >
      © 2021 Copyright: 
      <a className="text-light fw-bold" href="https://mdbootstrap.com/">
        SpanIdea System allright reserved
      </a>
    </div>
    
  </footer>
 
</>

   
  )
}

export default Footer