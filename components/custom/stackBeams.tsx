"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function StackBeams() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-black p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.react />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.supabase />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.prisma />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.next />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.authjs />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.tailwindcss />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.openai />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
    react: () => (
    <img className=" w-max h-max rounded-full scale-150" src="https://www.svgrepo.com/show/452092/react.svg"></img>
),
    next: () => (
        <img className=" w-[50px] h-[50px] rounded-full" src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="" />
    ),
    prisma: () => (
        <img className=" w-[50px] h-[50px] rounded-full" src="https://www.svgrepo.com/show/373776/light-prisma.svg" alt="" />
    ),
    supabase: () => (
        <img className=" w-[50px] h-[50px] rounded-full" src="https://supabase.com/dashboard/img/supabase-logo.svg" alt="" />
    ),
    tailwindcss: () => (
        <img className=" w-[50px] h-[50px] rounded-full" src="https://www.svgrepo.com/show/333609/tailwind-css.svg" alt="" />
    ),
    openai: () => (
        <img className=" w-max h-max scale-150 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/ChatGPT-Logo.png/1200px-ChatGPT-Logo.png?20230814075517" alt="" />
    ),
    authjs: () => (
        <img className=" w-max h-max rounded-full" src="https://github.com/nextauthjs/next-auth/blob/main/apps/examples/nextjs/public/logo.png?raw=true" alt="" />
    )
}
