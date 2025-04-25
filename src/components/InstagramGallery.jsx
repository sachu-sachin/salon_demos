import React from "react";
import { AuroraText } from "./magicui/aurora-text";
import { ShimmerButton } from "./magicui/shimmer-button";
import { ArrowUpRight, Navigation } from "lucide-react";

export default function InstagramGallery() {
    return (
        <section id="gallery" className="py-12 bg-base-100">
            <div className="container mx-auto px-4">
                <HeadingText />
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
                    {/* Replace the src URLs with your Instagram post URLs */}
                    <div className="mb-4 break-inside-avoid">
                        <iframe
                            src="https://www.instagram.com/p/C7E6jxXP7xz/embed"
                            className="rounded-lg shadow-lg w-full min-h-[480px]"
                            allowtransparency="true"
                            frameBorder="0"
                            scrolling="no"
                            title="Instagram Post 1"
                        ></iframe>
                    </div>
                    <div className="mb-4 break-inside-avoid">
                        <iframe
                            src="https://www.instagram.com/p/DIQclzATmu4/embed"
                            className="rounded-lg shadow-lg w-full min-h-[480px]"
                            allowtransparency="true"
                            frameBorder="0"
                            scrolling="no"
                            title="Instagram Post 2"
                        ></iframe>
                    </div>
                    <div className="mb-4 break-inside-avoid">
                        <iframe
                            src="https://www.instagram.com/p/DHyJW0RTRP4/embed"
                            className="rounded-lg shadow-lg w-full min-h-[480px]"
                            allowtransparency="true"
                            frameBorder="0"
                            scrolling="no"
                            title="Instagram Post 3"
                        ></iframe>
                    </div>
                    <div className="mb-4 break-inside-avoid">
                        <iframe
                            src="https://www.instagram.com/p/DHfg1SKzyvC/embed"
                            className="rounded-lg shadow-lg w-full min-h-[480px]"
                            allowtransparency="true"
                            frameBorder="0"
                            scrolling="no"
                            title="Instagram Post 3"
                        ></iframe>
                    </div>
                    <div className="mb-4 break-inside-avoid">
                        <iframe
                            src="https://www.instagram.com/p/DHaT_KpTWRy/embed"
                            className="rounded-lg shadow-lg w-full min-h-[480px]"
                            allowtransparency="true"
                            frameBorder="0"
                            scrolling="no"
                            title="Instagram Post 3"
                        ></iframe>
                    </div>
                    <div className="mb-4 break-inside-avoid">
                        <iframe
                            src="https://www.instagram.com/p/DItu8HMz8MV/embed"
                            className="rounded-lg shadow-lg w-full min-h-[480px]"
                            allowtransparency="true"
                            frameBorder="0"
                            scrolling="no"
                            title="Instagram Post"
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <ShimmerButton className="shadow-2xl">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Follow us on instagram <ArrowUpRight className="inline" size={16} />
                        </span>
                    </ShimmerButton>
                </div>
            </div>
        </section>
    );
}


export function HeadingText() {
    return (
        <>
            <h2 className="mb-10 text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl mt-[50px] md:mt-[2%] text-balance text-center md:text-left">
                Discover Our <AuroraText>Instagram Gallery</AuroraText>
            </h2>
        </>
    );
}