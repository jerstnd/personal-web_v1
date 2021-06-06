import './Contact.scss';
import Button from '@material-ui/core/Button';

const Contact = () => {
    return(
        <div className='contact'>
            <div className='contactbox'>
                <h1>Contact Me!</h1>
                <form>
                    <input type="text" name="name" className='input-field' placeholder='name' autoComplete='off'/><br></br>
                    <input type="email" name="email" className='input-field' placeholder='email' autoComplete='off'/><br></br>
                    <textarea name="message" className='input-field text-area' placeholder='massage..' /><br></br>
                    <Button variant="contained" color="primary" disableElevation>Submit</Button>
                </form>
            </div>
        </div>
    );
}

export default Contact;