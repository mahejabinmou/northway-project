/* eslint-disable react/prop-types */
const Hero = ({ bg, pageName }) => {
    return (
        <div
            className={`bg-[url(/assets/img/contactus/BannerPhone.png)] h-[300px] bg-cover bg-no-repeat bg-center p-[150px]`}
        >
            <div className="flex flex-col md:flex-row items-center justify-between">
                <h2 className="text-white text-[48px] font-semibold leading-[150%]">
                    Contact Us
                </h2>
                <p className="text-white">Home / {pageName}</p>
            </div>
        </div>
    )
}

export default Hero
