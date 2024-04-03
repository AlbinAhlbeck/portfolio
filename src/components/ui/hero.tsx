import React, { ReactNode } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

type HeroProps = {
    children: ReactNode;
    role: string;
    description: string,
};

const Hero = ({ children, role, description }: HeroProps) => {
    return (
        <div className="mx-auto border border-gray-600 p-5 rounded-sm min-w-min flex items-center border-bottom max-w-5xl">
            <div>
                {React.Children.map(children, (child) => (
                    child && typeof child === 'string' && (
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
                    )
                ))}
                <div className="flex flex-col">
                    <span className="text-md lg:text-xl">{role}</span>
                    <span className="text-sm lg:text-md mt-8">{description}</span>
                </div>
            </div>
            <div className="ml-8">
                <Avatar className="h-32 w-32 lg:h-56 lg:w-56 outline outline-primary">
                    <AvatarImage src="/albin2.jpg" />
                </Avatar>
                <div className="flex flex-col gap-1 mt-4 text-nowrap">
                <span><b>Current role: </b>Software developer at <a href="https://www.tietoevry.com/en/create/" className="text-purple-900">Tietoevry Create</a></span>
                    <span><b>Location:</b> <span className="text-primary">Malmö</span>, Sweden</span>
                    <span><b>Born:</b> 2000</span>
                    <span><b>Languages:</b> English and Swedish</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
