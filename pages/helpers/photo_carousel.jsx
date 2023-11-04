import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import photoDescriptions from './photoDescriptions.json';

const PhotoCarousel = () => {
  const images = Array.from({ length: 30 }, (_, index) => `./images/photo_${index + 1}.jpeg`);
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside
            showDots={false}
            responsive={{
            desktop: {
                breakpoint: {
                max: 3000,
                min: 1024
                },
                items: 1
            },
            mobile: {
                breakpoint: {
                max: 464,
                min: 0
                },
                items: 1
            },
            tablet: {
                breakpoint: {
                max: 1024,
                min: 464
                },
                items: 1
            }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
        {images.map((image, index) => {
                const photoFileName = `photo_${index + 1}.jpeg`;
                const description = photoDescriptions[photoFileName] || '';
                return (
                    <>
                    <figure style={{
                        height: "100%",
                    }} key={index}>
                        <img
                            src={image}
                            style={{
                                height: '90%',
                            }}
                            alt={`Photo ${index + 1}`}
                        />
                        <figcaption>{description}</figcaption>
                    </figure>
                    </>
                );
            })}
        </Carousel>
    </div>
  );
};

export default PhotoCarousel;