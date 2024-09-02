import React from 'react'
import Breadcrumb from './Breadcrumb';

const Aboutsection = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' }
    ];
    const imageUrls = [
        'https://picsum.photos/200/300?random=1',
        'https://picsum.photos/200/300?random=2',
        'https://picsum.photos/200/300?random=3',
        'https://picsum.photos/200/300?random=4'
    ];
    return (
        // <section className="p-6 ">
        //     {/* Breadcrumb */}
        //     <Breadcrumb items={breadcrumbItems} />

        //     {/* Content Layout */}
        //     <div className="mt-6 flex flex-col md:flex-row space-x-6">
        //         {/* Left Side - Summary */}
        //         <div className="md:w-1/2 p-4 mx-[180px]">
        //             <h4 className="   mt-[42px] mb-[12px] px-2 py-[4px] rounded-lg border border-orange-500/40 justify-center items-center inline-flex text-orange-500 text-[20px] font-medium font-['Inter'] ">About Us</h4>
        //             <p className="text-gray-700">
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        //             </p>
        //         </div>

        //         {/* Right Side - Tech Stack Photos */}
        //         <div className="md:w-1/2 p-4 flex flex-wrap gap-4">
        //             {imageUrls.map((url, index) => (
        //                 <div key={index} className="w-full md:w-1/2 h-32 bg-orange-500 flex items-center justify-center">
        //                     <img
        //                         src={url}
        //                         alt={`Tech ${index + 1}`}
        //                         className="w-full h-full object-cover"
        //                     />
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </section>
        <div className="bg-gray-50">
            {/* Section 1: About Us */}
            <section className="py-16 px-8 md:px-16 lg:px-32">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                    <p className="text-xl text-gray-600 mt-4">
                        We are passionate about building great companies and making a positive impact on the world.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            At Happy Companies, we believe that creating a thriving work environment is the key to success. Our mission is to foster happiness, innovation, and growth within our organization and extend these values to the communities we serve.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1554184154-22dec7ec8818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGhhcHB5JTIwcGVvcGxlfGVufDB8fHx8MTY5MjIxNzQ3Mg&ixlib=rb-1.2.1&q=80&w=1080"
                            alt="Happy team"
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Section 2: Our Vision */}
            <section className="py-16 px-8 md:px-16 lg:px-32 bg-white">
                <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHZpc2lvbnxlbnwwfHx8fDE2OTIyMTc4NzI&ixlib=rb-1.2.1&q=80&w=1080"
                            alt="Vision"
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our vision is to create a world where businesses are driven by purpose and innovation, leading to a brighter future for all.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 3: Our Values */}
            <section className="py-16 px-8 md:px-16 lg:px-32">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Our Values</h2>
                    <p className="text-xl text-gray-600 mt-4">
                        We believe in integrity, collaboration, and excellence in all we do.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="md:w-1/2">
                        <p className="text-gray-700 leading-relaxed">
                            Our core values guide our decisions and shape our culture. We are committed to ethical practices, continuous learning, and fostering a collaborative environment that brings out the best in everyone.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1515169067868-5387ec356754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHZhbHVlc3xlbnwwfHx8fDE2OTIyMTg1OTI&ixlib=rb-1.2.1&q=80&w=1080"
                            alt="Values"
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Section 4: Our Team */}
            <section className="py-16 px-8 md:px-16 lg:px-32 bg-white">
                <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlYW18ZW58MHx8fHwxNjkyMjE4ODAw&ixlib=rb-1.2.1&q=80&w=1080"
                            alt="Team"
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Meet the people who make it all happen. Our team is a diverse group of professionals dedicated to creating meaningful impact through our work.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 5: Our Impact */}
            <section className="py-16 px-8 md:px-16 lg:px-32">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Our Impact</h2>
                    <p className="text-xl text-gray-600 mt-4">
                        We are proud of the positive impact we've made in the communities we serve.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="md:w-1/2">
                        <p className="text-gray-700 leading-relaxed">
                            Our commitment to social responsibility drives us to continuously seek ways to give back. Through our initiatives, we strive to make a difference in the lives of those around us.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1542718610-634a7b46e083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGltcGFjdHxlbnwwfHx8fDE2OTIyMTkwMjA&ixlib=rb-1.2.1&q=80&w=1080"
                            alt="Impact"
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aboutsection
