import './About.css'
import user from '../../assets/about_user.jpg'
import { IoMdCall } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { useLoaderData } from 'react-router-dom';
import AboutFeature from './AboutFeature';
import GoogleMap from './GoogleMap';
import { Helmet } from 'react-helmet';

const About = () => {

    const features = useLoaderData()
    console.log(features);
    return (
        <div className='overflow-hidden'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About - Khan-home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="about">
                <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-white playWrite'>About Agent</h1>
            </div>
            <div className='max-w-6xl mx-auto'>
                <div>
                    <h2 className='text-4xl text-center py-16 leading-[50px]'>OUR REAL ESTATE<br />
                        PROFESSIONAL</h2>
                </div>
                <div className='flex flex-col sm:flex-row gap-6 px-1 sm:px-0'>
                    <div className='basis-[53%] flex-grow'>
                        <h2 className='font-semibold text-3xl'>John Hendricks</h2>
                        <h5 className='text-xl font-light py-6'>Holdings Realty - 13 Years Experience</h5>
                        <p className='text-purple-900 leading-8 pb-6'>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh dolor, mollis nec nibh vitae, congue pellentesque elit.  Aliquam euismod purus vel nibh dictum rutrum.</p>
                        <ul className='space-y-3'>
                            <div className='flex items-center space-x-4'>
                            <IoMdCall className='text-amber-500 text-xl'/>
                            <span className='text-gray-600'>(800) 123-4567</span>
                            </div>

                            <div className='flex items-center space-x-4'>
                            <MdOutlineEmail className='text-amber-500 text-xl'/>
                            <span className='text-gray-600'>contact@your-site.com</span>
                            </div>

                            <div className='flex items-center space-x-4'>
                            <TbWorld className='text-amber-500 text-xl'/>
                            <span className='text-gray-600'>
                            www.your-site.com</span>
                            </div>
                        </ul>
                        <button className='bg-amber-600 font-semibold text-white mt-8 p-2 border-2 border-amber-600 hover:text-black hover:bg-transparent duration-300'>Know More About Us</button>

                    </div>
                    <div className='basis-[47%] flex justify-center sm:justify-end'>
                        <img src={user} alt="" className='w-[400px] rounded-xl ring-2 ring-amber-500'/>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-light text-center py-24 '>MORE LISTINGS</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                    {
                        features.map((feature, i) => <AboutFeature feature={feature} key={i}></AboutFeature>)
                    }
                </div>
            </div>
            <div className='mt-20'>
            <GoogleMap></GoogleMap>
            </div>
        </div>
    );
};

export default About;