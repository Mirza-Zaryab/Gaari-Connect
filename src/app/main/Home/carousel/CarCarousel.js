import React from 'react';
import { Typography } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 3000, min: 960 },
        items: 4,
        partialVisibilityGutter: 10
    },
    desktop: {
        breakpoint: { max: 960, min: 700 },
        items: 3,
        partialVisibilityGutter: 10
    },
    tablet: {
        breakpoint: { max: 700, min: 360 },
        items: 2,
        partialVisibilityGutter: 10
    },
    mobile: {
        breakpoint: { max: 360, min: 0 },
        items: 1,
        partialVisibilityGutter: 10
    }
};

const CarCarousel = () => {
    return (
        <div>
            <Carousel
                className=""
                responsive={responsive}
                partialVisible={true}
                showDots={true}
                infinite={true}
                focusOnSelect={true}
                dotListClass='react-multi-carousel-dot-list'
            >
                <div className="space-y-28">
                    <img className="" src="/assets/images/GariConnect/image1.png" alt="logo" />
                    <div className="flex flex-row items-center space-x-12 ml-52">
                        <img src="/assets/images/icons/carbrand1.svg" alt="logo" />
                        <Typography className="text-24 font-medium">Toyota</Typography>
                    </div>
                </div>

                <div className="space-y-28">
                    <img className="" src="/assets/images/GariConnect/image1.png" alt="logo" />
                    <div className="flex flex-row items-center space-x-12 ml-52">
                        <img src="/assets/images/icons/carbrand2.svg" alt="logo" />
                        <Typography className="text-24 font-medium">Hyundai</Typography>
                    </div>
                </div>

                <div className="space-y-28">
                    <img className="" src="/assets/images/GariConnect/image1.png" alt="logo" />
                    <div className="flex flex-row items-center space-x-12 ml-52">
                        <img src="/assets/images/icons/carbrand3.svg" alt="logo" />
                        <Typography className="text-24 font-medium">Nissan</Typography>
                    </div>
                </div>

                <div className="space-y-28">
                    <img className="" src="/assets/images/GariConnect/image1.png" alt="logo" />
                    <div className="flex flex-row items-center space-x-12 ml-52">
                        <img src="/assets/images/icons/carbrand4.svg" alt="logo" />
                        <Typography className="text-24 font-medium">Honda</Typography>
                    </div>
                </div>

                <div className="space-y-28">
                    <img className="" src="/assets/images/GariConnect/image1.png" alt="logo" />
                    <div className="flex flex-row items-center space-x-12 ml-52">
                        <img src="/assets/images/icons/carbrand1.svg" alt="logo" />
                        <Typography className="text-24 font-medium">Toyota</Typography>
                    </div>
                </div>

                <div className="space-y-28">
                    <img className="" src="/assets/images/GariConnect/image1.png" alt="logo" />
                    <div className="flex flex-row items-center space-x-12 ml-52">
                        <img src="/assets/images/icons/carbrand2.svg" alt="logo" />
                        <Typography className="text-24 font-medium">Hyundai</Typography>
                    </div>
                </div>

                <div className="space-y-28">
                    <img className="" src="/assets/images/GariConnect/image1.png" alt="logo" />
                    <div className="flex flex-row items-center space-x-12 ml-52">
                        <img src="/assets/images/icons/carbrand3.svg" alt="logo" />
                        <Typography className="text-24 font-medium">Nissan</Typography>
                    </div>
                </div>

                <div className="space-y-28">
                    <img className="" src="/assets/images/GariConnect/image1.png" alt="logo" />
                    <div className="flex flex-row items-center space-x-12 ml-52">
                        <img src="/assets/images/icons/carbrand4.svg" alt="logo" />
                        <Typography className="text-24 font-medium">Honda</Typography>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default CarCarousel