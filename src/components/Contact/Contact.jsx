
import { Helmet } from 'react-helmet';
import contact from '../../../src/assets/contact.jpg'
const Contact = () => {
    return (
        <div className="flex justify-center mt-10 max-w-6xl mx-auto gap-6 text-center">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact - Khan-home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <form className="basis-[50%] *:w-full *:border *:border-amber-500 *:p-2 space-y-6 ">
                <input type="text" name="name" placeholder="Your Name" />
                <input type="text" name="name" placeholder="Your Email" />
                <input type="text" name="name" placeholder="Your Mobile" />
                <textarea name="" id="" rows={6} placeholder='Your message...'></textarea>
                <input type="submit" value="Send" className='active:bg-amber-500 active:text-white'/>
            </form>
            <div className='basis-[46%]'>
                <img src={contact} alt="" className='sm:w-[360px] w-full rounded-xl border-4 border-white ring-2 ring-amber-500' />
            </div>
        </div>
    );
};

export default Contact;