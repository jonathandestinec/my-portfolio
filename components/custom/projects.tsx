import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
    FileIcon,
    BookmarkIcon
  } from "@radix-ui/react-icons";
  
  import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
  
  const features = [
    {
      Icon: FileTextIcon,
      name: "Pokemon Info",
      description: "You can see the images and some info fo some Pokemon",
      cta: "See more",
      background: <img src="/assets/poke.png" className="absolute -top-20 opacity-60 w-max h-max scale-150" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
      href: "https://github.com/jonathandestinec/pokemon-api"
    },
    {
      Icon: FileIcon,
      name: "JoeNadiv Business Concepts",
      description: "Real Estate, Logistics, Cars, and Boutique company",
      cta: "View Project",
      background: <img className="absolute opacity-20 top-14 w-max h-max scale-150" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
      href: "https://github.com/jonathandestinec/joe-nadiv"
    },
    {
      Icon: CalendarIcon,
      name: "Todo App",
      description: "Nothing much, do for you to do",
      cta: "View Project",
      background: <img className="absolute -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
      href: "https://github.com/jonathandestinec/todo"
    },
    {
      Icon: InputIcon,
      name: "Notes App",
      description: "Just a notes app. Write something",
      cta: "View More",
      background: <img className="absolute -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
      href: "https://github.com/jonathandestinec/todo-"
    },
    {
      Icon: BookmarkIcon,
      name: "My Gallery",
      description:
        "I post sky photos here ☁️",
      cta: "View More",
      background: <img src="/assets/gallery.png" className="absolute opacity-20 top-14 w-max h-max scale-150" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
      href: "https://github.com/jonathandestinec/gallery"
    },
  ];
  
  export default function Projects() {
    return (
      <div>
        <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
      </div>
    );
  }
  