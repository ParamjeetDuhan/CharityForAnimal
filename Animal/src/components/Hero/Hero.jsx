import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div>
            <div className="min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black to-primary pt-10 pb-10 md:pt-36">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">
                        {/* Hero Text section */}
                        <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]">
                            <h1 className="text-5xl lg:text-7xl font-bold">Join Us in Changing Lives</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit Mollitia vel
                                odio perspiciatis ab eligendi ex aut quam repudiandae odit doloremque
                                quos unde sed sequi ipsum quidem Ex corrupti ipsa animi
                            </p>
                            <div className="space-x-4">
                                <Link to="/SignUp"><button className="btn-primary">Get Started</button></Link>
                                <Link to="/Login"><button className="btn-outline">Login</button></Link>
                            </div>
                        </div>
                        {/* Form section */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

