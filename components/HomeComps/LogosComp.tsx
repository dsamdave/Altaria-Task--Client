import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Optional if using the default theme
// import '../styles/owl-carousel.css'; // Your custom CSS

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const MyCarousel = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 5 },
    },
  };

  return (
    <div className="offer-wrapperr pb-4 bg-lightblue"
    style={{
      paddingTop: "50px"
    }}
    >
      <div className="container">
        <div className="row">
          <OwlCarousel
            className="brand-sliderr owl-carousel owl-theme overflow-visible dot-none"
            {...options}
          >
            <div className="owl-items text-center">
              <img src="/images/b-1.png" alt="icon" className="w100 ml-auto mr-auto" />
            </div>
            <div className="owl-items text-center">
              <img src="/images/b-2.png" alt="icon" className="w100 ml-auto mr-auto" />
            </div>
            <div className="owl-items text-center">
              <img src="/images/b-3.png" alt="icon" className="w100 ml-auto mr-auto" />
            </div>
            <div className="owl-items text-center">
              <img src="/images/b-4.png" alt="icon" className="w100 ml-auto mr-auto" />
            </div>
            <div className="owl-items text-center">
              <img src="/images/b-5.png" alt="icon" className="w100 ml-auto mr-auto" />
            </div>
            <div className="owl-items text-center">
              <img src="/images/b-6.png" alt="icon" className="w100 ml-auto mr-auto" />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
