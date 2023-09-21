import React from 'react';
import Image from "next/image";

type NewsCardProps = {
    cardImage: string,
    title: string,
    subtitle: string,
    children: React.ReactNode,
}

const Card = ({cardImage, title, subtitle, children}: NewsCardProps) => {
    return (
        <div className={`h-20 w-[400px] bg-slate-700 p-4 flex justify-between items-center`}>
            <div className={`flex gap-4 h-full`}>
                <div className={`h-full w-12 relative`}>
                    <Image fill src={cardImage} className={`h-full`}/>
                </div>
                <div className={`flex flex-col gap-1`}>
                    <div className={`text-lg`}>{title}</div>
                    <div className={`text-base`}>{subtitle}</div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Card;