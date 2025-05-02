import React from 'react';
import Marque from '../shared/Marque';
import star from '../../assets/star.png'
import BannerImg from '../../assets/office.avif'
import hireusImg from '../../assets/HireUs png.png'


const Banner = () => {
    const services = ['Website Development', 'UX/UI Design', 'Graphic Design', 'Digital Marketing', 'Mobile Development'];


    return (
        <section className='bg-black'>
            <div className='w-auto md:w-10/12 mx-auto px-4'>
                {/* Top Section */}
                <div className='pt-10'>
                    <div className='flex items-center gap-2'>
                        <hr className='w-6 h-1 bg-primary border-0' />
                        <h1 className='text-white font-semibold text-xl'> Award Winning Digital Agency
                        </h1>
                    </div>
                    <div className='flex flex-col md:flex-row items-center'>
                        {/* Left Text Section */}
                        <div className='w-full md:w-6/12 text-center md:text-left'>
                            <h1 className='text-4xl md:text-6xl text-white font-bold'>Where Innovation Meets</h1>
                            <h2 className='text-4xl md:text-6xl text-primary font-semibold'> Digital Excellence</h2>
                        </div>

                        {/* Right Circle Section */}
                        <div className='w-full md:w-6/12 flex justify-end items-center mt-8 md:mt-0'>
                            {/* circle-1 */}
                            <div className='hidden md:block mr-[80px] w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-primary absolute'></div>
                            {/* circle-2 */}
                            <div className='hidden md:block z-1 relative md:ml-20 lg:ml-40' style={{ position: 'relative', width: '150px', height: '150px' }}>
                                <img className='w-[155px] rotating-image backdrop-blur-2xl rounded-full' src={hireusImg} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className='mt-10 text-white flex flex-col md:flex-row'>
                    <div className='w-full md:w-6/12 grid grid-cols-1 md:grid-cols-3 gap-2 pr-0 md:pr-2'>
                        {services.map((service) => (
                            <p className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg border-primary bg-slate-950' key={service}>
                                {service}
                            </p>
                        ))}
                    </div>

                    <div className='w-px bg-gradient-to-r from-white via-primary to-white mx-0 md:mx-4 my-4 md:my-0'></div>

                    <div className='w-full md:w-6/12 text-center md:text-left px-2 flex justify-center items-center'>
                        At Nostrix Creative, we are more than just a digital agency – we are your partners in crafting unforgettable digital experiences. With a passion for creativity and a commitment to excellence, we specialize in transforming ideas into visually stunning and functionally powerful solutions.
                    </div>
                </div>

                {/* Stats and Review Section */}
                <div className='py-16 relative flex flex-col md:flex-row gap-6'>
                    <div className="h-60 md:h-auto w-full md:w-9/12 rounded-lg p-4 flex flex-col md:flex-row border-2" style={{ backgroundImage: `url('${BannerImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        {/* Left Section (Empty for now) */}
                        <div className="flex-grow"></div>

                        {/* Bottom Section (Review Button) */}
                        <div className=''>
                            <div className="absolute bottom-7 left-[50%] md:left-[37%] transform translate-x-[-50%] bg-green-500 rounded-full  flex items-center" style={{ border: '1px solid transparent ', padding: '4px', margin: '4px', border: '6px solid black' }}>
                                <div className="avatar-group -space-x-6">
                                    <div className="avatar-group -space-x-6">
                                        <div className="avatar">
                                            <div className="w-12">
                                                <img src="https://i.ibb.co.com/94Bj6D3/doctor-2.webp" alt="Avatar" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-12">
                                                <img src="https://i.ibb.co.com/hZMp508/istockphoto-1500563478-612x612.jpg" alt="Avatar" />

                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-12">
                                                <img src="https://i.ibb.co.com/hJbjPsmB/pic-s.jpg" alt="Avatar" />
                                            </div>
                                        </div>
                                        <div className="avatar avatar-placeholder">
                                            <div className="bg-neutral text-neutral-content w-12">
                                                <span>+99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex mx-2 font-semibold items-center'>
                                    <div className="text-white text-sm">4.9 Star</div>
                                    <div className="text-white text-xs ml-1">Reviews</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Stats section */}
                    <div className="bg-green-400 rounded-lg px-4 py-12 text-black w-full md:w-3/12">
                        <div className="text-2xl font-semibold ">850+</div>
                        <div className="text-sm">Projects Completed</div>
                        <div className="mt-4 text-2xl font-semibold">18+</div>
                        <div className="text-sm">Years of Experience</div>
                        <div className="mt-4 text-2xl font-semibold">500+</div>
                        <div className="text-sm">Happy Customers</div>
                    </div>
                </div>

                {/* Star Image */}
                <div className='absolute -mt-80 -ml-16 hidden md:block'>
                    <img src={star} alt="Star" />
                </div>
            </div>
            {/* marquee  */}
            <Marque />
        </section>
    );
};

export default Banner;