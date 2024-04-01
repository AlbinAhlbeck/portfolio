import React, { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
};

const Card = ({ children }: CardProps) => {
    return (
        <div className="border border-gray-600 p-5 rounded-sm min-w-min flex items-center max-w-lg">
            <div>
                {React.Children.map(children, (child) => (
                    <span className="text-l text-gray-100 mb-5">{child}</span>
                ))}
            </div>
        </div>
    );
};

export default Card;
