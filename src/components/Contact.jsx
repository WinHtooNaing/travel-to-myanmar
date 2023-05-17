import './contact.css';

const Contact = () => {
    return (
        <>
            <div className="hero-mid">
             <img src="https://images.unsplash.com/photo-1660295688940-4ce27714174e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80" alt="heroImg" />
        
            </div>
            <div className="from-container">
                <h1>Send a message to us!</h1>
                <form >
                    <input placeholder="Name" />
                    <input placeholder="Email" />
                    <input placeholder="Subject" />
                    <textarea placeholder="Message" rows="4"></textarea>
                    <button>Send Message</button>
                </form>
            </div>
            
        
        </>
        
    )
}


export default Contact;