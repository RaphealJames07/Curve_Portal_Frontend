import OwlCarousel from "react-owl-carousel";
import kora from '../../../assets/logo-kora-516fd710.svg'
import fincra from '../../../assets/fincra-1744acb3.png'
import afiari from '../../../assets/afiari-1e980f15.png'
import irukka from '../../../assets/irukka_online_limited_logo.jpeg'
import google from '../../../assets/google.png'

const Partners = () => {
    const carouselOptions = {
        loop: true,
        autoWidth: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 7000,
        mergeFit: true,
        stagePadding: 0,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        dots: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: false,
            },
            600: {
                items: 2,
                dots: false,
            },
            1000: {
                items: 5,
                dots: false,
                nav: false,
            },
        },
    };
    return (
        <div className="w-full h-max px-40 phone:px-4 pt-20 phone:pt-16 flex flex-col items-center gap-5">
            <p className="text-3xl font-semibold">
                Trusted{" "}
                <span className="highlighted-text5 relative ">Partners</span>
            </p>
            <p className="text-center">
                Our credibility and reliability has earned us trusted partners
                worldwide
            </p>
            <div className="w-full h-40 mt-5 ">
                <OwlCarousel
                    {...carouselOptions}
                    dotsEach={true}
                    className="w-full h-max flex gap-5"
                >
                    <div className="item w-40 h-max">
                        <img
                            src={kora}
                            alt="Partner 1"
                            className="w-32 h-20 object-contain"
                        />
                    </div>
                    <div className="item w-40 h-max">
                        <img
                            src={fincra}
                            alt="Partner 2"
                            className="w-32 h-20 object-contain"
                        />
                    </div>
                    <div className="item w-40 h-max">
                        <img
                            src={irukka}
                            alt="Partner 3"
                            className="w-32 h-20 object-contain"
                        />
                    </div>
                    <div className="item w-40 h-max">
                        <img
                            src={google}
                            alt="Partner 4"
                            className="w-32 h-20 object-contain"
                        />
                    </div>
                    <div className="item w-40 h-max">
                        <img
                            src={afiari}
                            alt="Partner 5"
                            className="w-32 h-20 object-contain"
                        />
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Partners;
