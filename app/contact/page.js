const ContactPage = () => {

    return (

        <div className="contact-container">
            <h4>Contact Information:</h4>
            <hr />
            
            <div className="contact-content">
                <p>Email: </p>
                
                <a href="mailto:recipient@email.com">
                    <i className="fa-solid fa-envelope"></i>
                </a>
                <p>LinkedIn:</p>
                <a target="_blank" href="https://www.linkedin.com/in/neehad-morshed-61871629b/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>

        
    )
}

export default ContactPage;