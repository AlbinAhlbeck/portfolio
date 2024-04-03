"use client"
import React, { ReactNode } from "react"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

type HoverProps = {
    message: string,
    children: ReactNode,
};

const Hover = ({ message, children }: HoverProps) => {
    return (
        <div className="cursor-pointer">
            <HoverCard>
                {React.Children.map(children, (child) => (
                    <HoverCardTrigger>{child}</HoverCardTrigger>
                ))}
                <HoverCardContent>
                    {message}
                </HoverCardContent>
            </HoverCard >
        </div>
    );
};

export default Hover;
