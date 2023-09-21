"use client"
import React, {useState} from 'react';
import Card from "@/app/components/Card";
import Image from "next/image";

type CardType = {
    id: string,
    cardImage: string,
    title: string,
    subtitle: string,
}

const HomePage = () => {
    const [myApps, setMyApps] = useState([
            {id: '1', cardImage: '/images/google.svg', title: 'Google Suite3', subtitle: 'A collection of google services3'}
        ]
    );

    const [mostPopular, setMostPopular] = useState([
        {id: '2', cardImage: '/images/google.svg', title: 'Google Suite', subtitle: 'A collection of google services'},
        {id: '3', cardImage: '/images/google.svg', title: 'Google Suite 2', subtitle: 'A collection o2'},
    ]);

    const handleDeleteCard = (data: CardType) => {
        setMostPopular(prevState => ([...prevState, data]))
        setMyApps(prevState => prevState.filter(item => item.id !== data.id))
    }

    const handleAddCard = (data: CardType) => {
        setMyApps(prevState => ([...prevState, data]))
        setMostPopular(prevState => prevState.filter(item => item.id !== data.id))
    }

    return (
        <main className="w-full h-screen flex justify-center bg-white bg-grey">
            <div className={`w-full max-w-screen-xl bg-white flex flex-col gap-4 m-20 overflow-x-scroll`}>
                <div className={`flex flex-col gap-2`}>
                    <h4 className={`text-xl text-black`}>My Apps</h4>
                    <div className={`w-full flex gap-4 flex-wrap`}>
                        {myApps.map(item => (
                            <Card key={item.id} cardImage={item.cardImage} title={item.title} subtitle={item.subtitle}>
                                <div
                                    className={`h-8 w-8 relative cursor-pointer`}
                                    onClick={() => handleDeleteCard(item)}
                                >
                                    <Image fill src={'/images/delete.png'} className={`h-full w-full`}/>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className={`w-full bg-black h-1 my-20`}/>
                <div className={`flex flex-col gap-2`}>
                    <h4 className={`text-xl text-black`}>Most popular</h4>
                    <div className={`w-full flex gap-4 flex-wrap`}>
                        {mostPopular.map(item => (
                            <Card key={item.id} cardImage={item.cardImage} title={item.title} subtitle={item.subtitle}>
                                <div
                                    className={`h-8 w-8 relative cursor-pointer`}
                                    onClick={() => handleAddCard(item)}
                                >
                                    <Image fill src={'/images/plus.png'} className={`h-full w-full`}/>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
};

export default HomePage;