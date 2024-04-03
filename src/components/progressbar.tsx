"use client"
import React from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


type ProgressProps = {
    label: string,
    progress: number,
    description: string,
};

const ProgressBar = ({ label, progress, description }: ProgressProps) => {
    return (
        <Popover>
            <div className="mb-4 w-56 flex flex-col gap-2">
                <PopoverTrigger>
                    {description && <PopoverContent>{description}
                    </PopoverContent>}
                    <span>{label}</span>
                    <div className="relative pt-1">
                        <div className="flex h-2 overflow-hidden text-xs bg-gray-400 rounded">
                            <div
                                style={{ width: `${progress}%` }}
                                className="flex flex-col justify-center bg-primary shadow-none whitespace-nowrap"
                            ></div>
                        </div>
                    </div>
                </PopoverTrigger>
            </div>
        </Popover>
    );
};

export default ProgressBar;
