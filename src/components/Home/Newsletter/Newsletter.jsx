import './Newsletter.css'
const Newsletter = () => {
    return (
        <section className='newsletter flex items-center justify-center flex-col'>
        <h1 className='font-medium text-white italic text-2xl sm:text-3xl lg:text-5xl'>The Top Most Popular House is here</h1>
        <p className='text-white font-light py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <form className='border'>
        <input type="email" name="email" id="" placeholder='Enter Your Email' className='p-2 w-[250px] sm:w-[300px] lg:w-[400px] outline-none font-light'/>
        <input type="submit" value="Subscribe" className='text-white p-2 font-semibold cursor-pointer active:bg-white active:text-black border-l border-black'/>
        </form>   
        </section>
    );
};

export default Newsletter;