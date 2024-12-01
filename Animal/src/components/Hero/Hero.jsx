import React from 'react';
import { motion } from "framer-motion"; // Import motion for animations
import { Link } from 'react-router';

const FadeUp = (delay) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { delay, type: 'spring', stiffness: 100 } }
});

const Hero = () => {
    const [data, setData] = React.useState({
        name: " ",
        email: " ",
        amount: 0,
    });

    const handleClick = (e) => {
        const { name, value } = e.target;
        setData((previousData) => ({
            ...previousData,
            [name]: name === "amount" ? parseInt(value) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        // Handle form submission logic here
    };

    const handleAmountSelect = (amount) => {
        setData((prevState) => ({
            ...prevState,
            amount: amount,
        }));
    };

    return (
        <div>
            <div 
                className="min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black to-primary pt-10 pb-10 md:pt-36"
                style={{ paddingTop: 'calc(64px + 1rem)' }} // Dynamically adjust based on navbar height
            >
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-white ">
                        {/* Hero Text section */}
                        <div 
                            className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px] mt-28  mx-10"
                            style={{ overflow: 'hidden' }} // Prevent text from overlapping
                        >
                            <motion.h1 
                                variants={FadeUp(0.2)}
                                initial="initial"
                                animate="animate"
                                className="text-4xl sm:text-5xl lg:text-7xl font-bold"
                            >
                                Join Us in Changing Lives
                            </motion.h1>
                            <motion.p  
                                variants={FadeUp(0.4)}
                                initial="initial"
                                animate="animate"
                                className="text-base sm:text-lg lg:text-xl"
                            >
                                Together, we can create a brighter future for stray animals. Whether through volunteering, donating, or adopting, your support helps us bring hope and love to countless lives.
                            </motion.p>
                            <div className="space-x-4 mt-6">
                                <Link to="/SignUpPage"><motion.button 
                                    variants={FadeUp(0.6)}
                                    initial="initial"
                                    animate="animate"
                                    className="btn-primary"
                                >
                                    Get Started
                                </motion.button></Link>
                                <Link to="/Login"><motion.button
                                    variants={FadeUp(0.8)}
                                    initial="initial"
                                    animate="animate"
                                    className="btn-outline"
                                >
                                    Login
                                </motion.button></Link>
                            </div>
                        </div>

                        {/* Form section */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="w-full md:w-[400px] max-w-full mx-auto p-4 bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md mt-28"
                        >
                            <div>
                                <h1 className="text-lg text-center font-semibold mb-6">
                                    Quick Donation Form 
                                </h1>
                                <div className="flex items-center justify-center gap-4 sm:gap-8 py-4 flex-wrap">
                                    {[5, 10, 50, 100].map((amount) => (
                                        <button 
                                            key={amount} 
                                            className="button-square"
                                            onClick={() => handleAmountSelect(amount)}
                                        >
                                            Rs{amount}
                                        </button>
                                    ))}
                                </div>

                                {/* Input section */}
                                <div className="space-y-6">
                                    <input 
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        onChange={handleClick}
                                        placeholder="Amount"
                                        value={data.amount}
                                        min={1}
                                        max={100}
                                        className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                                    />
                                    <input 
                                        type="text"
                                        name="name"
                                        id="name"
                                        onChange={handleClick}
                                        placeholder="Name"
                                        className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                                    />
                                    <input 
                                        type="email"
                                        name="email"
                                        id="email"
                                        onChange={handleClick}
                                        placeholder="Email"
                                        className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                                    />
                                    <button 
                                        className="btn-primary w-full rounded-full"
                                        onClick={handleSubmit}
                                    >
                                        Donate Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

