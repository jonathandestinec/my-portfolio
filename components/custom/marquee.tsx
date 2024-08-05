import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
    {
        name: "React JS",
        username: "@react-dev",
        body: "It's LIT 🔥. Making reusable components",
        img: "https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=512",
    },
    {
        name: "Next JS",
        username: "next-js",
        body: "Oh, this is Perfection (yeahh)",
        img: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
    },
    {
        name: "Tailwind CSS",
        username: "@tails-",
        body: "Styling boring HTML with ease",
        img: "https://www.svgrepo.com/show/333609/tailwind-css.svg",
    },
    {
        name: "Prisma",
        username: "@prisma-orm",
        body: "Here we go. King of the ORM's",
        img: "https://www.svgrepo.com/show/373776/light-prisma.svg",
    },
    {
        name: "Supabase",
        username: "@supaa-base",
        body: "This guy literally has everything",
        img: "https://supabase.com/dashboard/img/supabase-logo.svg",
    },
    {
        name: "Auth JS",
        username: "@authh",
        body: "We protect routes and pages with this guy 😜",
        img: "https://authjs.dev/img/etc/logo-sm.webp",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export default function MyMarquee() {
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl bg-none backdrop-brightness-90 backdrop-blur-xl -backdrop-hue-rotate-30 transition-all">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>

            <div className="pointer-events-none absolute inset-y-0 right-0 w-full h-[100px] bg-gradient-to-b from-white dark:from-black"></div>
        </div>
    );
}
