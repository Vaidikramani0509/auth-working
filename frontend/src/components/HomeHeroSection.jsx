import React from 'react';

const HomeHeroSection = () => {
    return (
        <section className="relative bg-gray-900 text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://media.istockphoto.com/id/1221598194/photo/an-asian-chinese-male-working-at-home-using-laptop-video-conference-call-meeting-with-headset.jpg?s=2048x2048&w=is&k=20&c=bTjkzP_Ls9I4qbxRtWsM7VN-A7C3xsIK9qdV8hob33c="
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Hero Content */}
            <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                    Empowering Your Business for the Future
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                    We provide innovative solutions to drive your business forward and achieve your goals.
                </p>
                <div className="flex gap-4">
                    <a
                        href="#get-started"
                        className="bg-[#F38021] border-2 border-orange-400 hover:bg-transparent text-white hover:text-orange-500 font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Get Started
                    </a>
                    <a
                        href="#learn-more"
                        className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </div>

        </section>
    );
};

export default HomeHeroSection;
