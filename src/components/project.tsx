"use client"

import React, { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link"

type ProjectProps = {
    title: string;
    children: ReactNode;
    badges: string[];
    topInfo: string;
    link: string;
};

const Project = ({ children, badges, title, topInfo, link }: ProjectProps) => {
    return (
        <>
            <Link href={"/projects" + link}>
                <div className="bg-card-foreground max-w-lg min-w-fit min-h-56 border border-gray-600 p-5 rounded-sm flex flex-col pl-8 text-gray-100 hover:bg-gray-800 transition duration-300 ease-in-out cursor-pointer">
                    {topInfo && <span className="text-primary">{topInfo}</span>}
                    <h3 className="text-xl">{title}</h3>
                    <div className="flex gap-4 items-center text-primary flex my-2 text-nowrap">
                        {badges && badges.map((badge, index) => (
                            <Badge key={index} variant="secondary" className="bg-primary text-black">{badge}</Badge>
                        ))}
                    </div>
                    <div>
                        {React.Children.map(children, (child) => (
                            <span className="text-l text-gray-100 mb-5">{child}</span>
                        ))}
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Project;
