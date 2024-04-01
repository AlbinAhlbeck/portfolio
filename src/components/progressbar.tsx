import React, { ReactNode } from "react";
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
        <div className="mb-4 w-56 font-mono text-gray-300 flex flex-col gap-2">
            <Popover>
                {description && <PopoverContent>{description}
                </PopoverContent>}
                <PopoverTrigger>{label}</PopoverTrigger>
                <div className="relative pt-1">
                    <div className="flex h-2 overflow-hidden text-xs bg-gray-200 rounded">
                        <div
                            style={{ width: `${progress}%` }}
                            className="flex flex-col justify-center bg-primary shadow-none whitespace-nowrap text-white"
                        ></div>
                    </div>
                </div>
            </Popover>
        </div>
    );
};

export default ProgressBar;
