import officeData from "../../constant/ourOfficesData"

const OurOffices = () => {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="max-w-[1140px]">
                    <h2 className="text-[48px] font-semibold leading-[120%] text-center">
                        Our <span className="text-[#F6941E]">offices</span>
                    </h2>
                    <div className=" flex flex-wrap gap-[22px]  items-center justify-center mt-[50px]">
                        {officeData.map((office) => (
                            <div
                                key={office.name}
                                className="w-[268px] bg-white py-5 flex items-center
                                 justify-center border-custom border-[1px] shadow-officeShadow"
                            >
                                <div className="flex items-center gap-2">
                                    <img
                                        src={office.flag}
                                        alt="Country flag where office is situated"
                                    />
                                    <p>{office.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurOffices
