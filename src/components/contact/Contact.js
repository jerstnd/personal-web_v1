import './Contact.scss';
import emailjs from 'emailjs-com';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const Contact = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_q89x27d', 'template_rvl2yth', e.target, 'user_qUA94R1Bm7f6AYzu77JkU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          e.preventDefault();
    }

    return(
        <div className='contact'>
            <div className='contactbox'>
                <h1>Contact Me!</h1>
                <form onSubmit={sendEmail}>
                    <input type="text" name="name" className='input-field' placeholder='name' autoComplete='off'/><br></br>
                    <input type="email" name="email" className='input-field' placeholder='email' autoComplete='off'/><br></br>
                    <textarea name="message" className='input-field text-area' placeholder='message..' /><br></br>
                    <button type='submit' value='Send' className='button'>Submit</button>
                </form>
            </div>
            <div className='social'>
                <a href='https://github.com/jerstnd' target='_blank'><GitHubIcon style={{ fontSize: 30 }} /></a>
                <a href='https://www.linkedin.com/in/jeremy-rustandi-8049691b7/' target='_blank'><LinkedInIcon  style={{ fontSize: 30 }}/></a>
                <a href='https://www.instagram.com/jeremy.rustandi/' target='_blank'><InstagramIcon  style={{ fontSize: 30 }}/></a>
            </div>
        </div>
    );
}

export default Contact;