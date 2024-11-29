import { useNavigate } from "react-router-dom"
import { distensionInfo } from "../../../../Constants/exports"
import { LazyLoadImage } from "react-lazy-load-image-component"

const StudyTenDestention = ({ toggleDropdown2 }) => {
    const navigatge = useNavigate()
    const handleNavigate = (location) => {
        navigatge(location)
        toggleDropdown2()
    }
    return (
        <div
            className=" grid lg:grid-cols-5 grid-cols-1 ml-5 mb-2 lg:mb-0 lg:ml-0 lg:gap-10 justify-items-start 
"
        >
            {distensionInfo.map((country) => (
                <div
                    key={country.id}
                    className="flex items-center justify-center flex-wrap  bg-white cursor-pointer"
                    onClick={() =>
                        handleNavigate(
                            `/studyDistention?country=${country.country}`
                        )
                    }
                >
                    <LazyLoadImage
                        src={country.flag}
                        className="h-[20px] w-[28px]"
                        alt={country.country}
                    />
                    <p className="text-[#1E1E1E] text-[16px] font-bold ml-[15px]">
                        {country.country}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default StudyTenDestention
