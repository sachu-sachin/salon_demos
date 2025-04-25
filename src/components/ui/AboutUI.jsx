import { cn } from "@/lib/utils";
import { AvatarCircles } from "../magicui/avatar-circles";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { AuroraText } from "../magicui/aurora-text";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import { ChevronRight, Instagram } from "lucide-react";



// Discover Coimbatore's Best Salon Services: Our Story
export function HeadingText() {
    return (
        <>
            <h2 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl mt-[50px] md:mt-[2%] text-balance text-center md:text-left">
                Discover <AuroraText>Coimbatore's</AuroraText> Best Salon <AuroraText>Neofair</AuroraText>
            </h2>
        </>
    );
}


export function AboutMedia() {
    return (
        <div
            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-1 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <video className="rounded-xl object-cover" src="/src/assets/videos/ab2.mp4" alt="about Us video" autoPlay loop muted playsInline />
            </div>
            <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="https://images.jdmagicbox.com/comp/coimbatore/r5/0422px422.x422.141112154042.y5r5/catalogue/neofair-beauty-clinic-coimbatore-aerodrome-coimbatore-beauty-parlours-for-hair-straightening-joyk4wu6y8.jpg"
                alt="about Us image" />
        </div>
    )
}
