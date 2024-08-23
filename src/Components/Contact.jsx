import React from 'react'
import './CSS/contact.css'

const Contact = () => {
    return (
        <>
            <div className='contact' id='contact'>
            <h1 style={{textAlign:"center"}}>Contact Us</h1>
                <form action="Contactdb" method="post">

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name"
                            name="name" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Your Email"
                            name="email" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Mobile Number"
                            name="subject" required="required" />
                    </div>
                    <div className="form-group">
                        <textarea id="" cols="30" rows="7" className="form-control"
                            placeholder="Message" name="message" required="required"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="button" class="btn btn-danger">Send Message</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact