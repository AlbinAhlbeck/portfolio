import React, { ReactNode } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

type HeroProps = {
    children: ReactNode;
    role: string;
    description: string,
};

const Hero = ({ children, role, description }: HeroProps) => {
    return (
        <div className="bg-card-foreground mx-auto border border-gray-600 p-5 rounded-sm min-w-min flex items-center border-bottom text-gray-100">
            <div>
                {React.Children.map(children, (child) => (
                    <h2 className="text-5xl mb-5">
                        {child
                            .split(' ')
                            .map((word, index) => (
                                <span key={index} className={index === 2 ? 'text-primary' : ''}>
                                    {word}{' '}
                                </span>
                            ))
                        }
                    </h2>
                ))}
                <div className="flex flex-col">
                    <span className="text-gray-300 text-xl">{role}</span>
                    <span className="text-gray-200 text-md mt-8">{description}</span>
                </div>
            </div>
            <div className="ml-8">
                <Avatar className="h-32 w-32 lg:h-56 lg:w-56">
                    <AvatarImage src="/albin2.jpg" />
                </Avatar>
            </div>
        </div>
    );
};

export default Hero;
