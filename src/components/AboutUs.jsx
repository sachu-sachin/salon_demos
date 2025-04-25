import React from 'react';
import { HeadingText,AboutMedia } from './ui/AboutUI';
import { ShimmerButton } from './magicui/shimmer-button';

function AboutUs() {
    return (
        <section className="md:mt-20 relative mb-20 scroll-mt-16" id='about'>
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <AboutMedia />
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <HeadingText />
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Welcome to Neofair Signature Salon! As a women’s salon in Coimbatore Aerodrome,
                                    we’re passionate about creating a welcoming space where you can relax and feel your best.
                                    Our experienced team is committed to ongoing learning and the latest beauty trends,
                                    ensuring you always receive top-quality care.</p>
                            </div>
                            <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">11+</h3>
                                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                                </div>
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">1k+</h4>
                                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Successful Projects</h6>
                                </div>
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">100k+</h4>
                                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Happy Clients</h6>
                                </div>
                            </div>
                        </div>
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Know more About us
                            </span>
                        </ShimmerButton>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default AboutUs;
