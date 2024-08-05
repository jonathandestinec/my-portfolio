"use client";
import React from "react";

import { Inter } from "next/font/google";

const inter = Inter({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin-ext"],
});
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import HistoryContent from "./historyContent";

export default function History() {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                <HistoryContent />
            </div>
        </TracingBeam>
    );
}
