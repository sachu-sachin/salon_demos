import { cn } from "@/lib/utils";
import { AvatarCircles } from "../magicui/avatar-circles";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { AuroraText } from "../magicui/aurora-text";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import { ChevronRight, Instagram } from "lucide-react";


export function InstaTopText() {
    return (
        <div className="w-[fit-content] group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
            <span
                className={cn(
                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                )}
                style={{
                    WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                }}
            />
            <Instagram /> <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-sm font-medium">
                200k+ followers on Instagram
            </AnimatedGradientText>
            <ChevronRight
                className="ml-1 size-4 stroke-neutral-500 transition-transform
   duration-300 ease-in-out group-hover:translate-x-0.5"
            />
        </div>
    );
}




export function ReviewAvatars() {
    const avatars = [
        {
            imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjWNZ4S4R4L2GaFPx1brQO_dhTF7jbyv-plIFIA0kOU8HL2HknXfUg=s64-c-rp-mo-ba2-br100",
            profileUrl: "https://g.co/kgs/nx2512o",
        },
        {
            imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjVQYgCzgDt7uTd10RrKKEFmKfPsO9bBzRCfSUbobDc1PDXQ8zpP=s64-c-rp-mo-br100",
            profileUrl: "https://g.co/kgs/QD7rkeB",
        },
        {
            imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXpv4kaHX8WKTxbvpyAKk-YWpJSZX1KhC82gCYND810OXsag32c=s64-c-rp-mo-br100",
            profileUrl: "https://g.co/kgs/9ex3JJS",
        },
        {
            imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjU8cPzQUXqeDc8kSwAHaFVDGfAWt8gUYSv4mh6caBtHerTCUTjU=s64-c-rp-mo-br100",
            profileUrl: "https://g.co/kgs/TGkf4BG",
        },
        {
            imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjV3WY-YfLbrPfTk0DnBijfkClS4fN-Y4sQ01D2jkeF0JSIkFNw=s64-c-rp-mo-br100",
            profileUrl: "https://g.co/kgs/XomftJT",
        },
        {
            imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUi9HFoyqvlpOWOxx8oOfBZ2HYlOzHIUmQzSu_HyE8QUJy9zQ_i=s64-c-rp-mo-br100",
            profileUrl: "https://g.co/kgs/GWWcSQy",
        },
    ];
    return <div className="flex flex-col items-center justify-center gap-2">
        <AvatarCircles numPeople={750} avatarUrls={avatars} />

        <p className="text-sm text-neutral-500">750+ people have joined <span className="font-bold">Neofair</span></p>
    </div>;
}



export function ReviewText() {
    return (
        <h1 className="text-xl font-bold tracking-tighter md:text-2xl lg:text-4xl">
            4.9 ⭐  <AuroraText>Ratings in Google</AuroraText>
        </h1>
    );
}




export function HeadingText() {
    return (
        <>
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center mt-[5%] text-balance">
                Experience <AuroraText>Celebrity Treatment</AuroraText>, Right Here in <AuroraText>Coimbatore</AuroraText>
            </h1>
        </>
    );
}



export function ScrollHeading() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-10 italic text-black/50">
            <VelocityScroll defaultVelocity={2} >Bringing celebrity-style beauty services to your neighborhood</VelocityScroll>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}