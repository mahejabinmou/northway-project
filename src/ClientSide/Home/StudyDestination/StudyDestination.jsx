import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const StudyDestination = () => {
  const boxRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const sectionRef = useRef();

  const animateBox = (ref, x, y, delay, duration = 3) => {
    gsap.from(ref.current, {
      x: x || 0,
      y: y || 0,
      opacity: 1,
      duration,
      delay,
      ease: "power2.out",
    });
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Triggers animations whenever the section comes in the viewport
        animateBox(boxRefs[0], -200, undefined, 1);
        animateBox(boxRefs[1], -200, undefined, 1);
        animateBox(boxRefs[2], 200, undefined, 1);
        animateBox(boxRefs[3], 200, undefined, 1);
        animateBox(boxRefs[4], undefined, 200, 0.3);
        animateBox(boxRefs[5], undefined, -200, 0.3);
        animateBox(boxRefs[6], -200, undefined, 1);
        animateBox(boxRefs[7], -200, undefined, 1);
        animateBox(boxRefs[8], 200, undefined, 1);
        animateBox(boxRefs[9], 200, undefined, 1);
        animateBox(boxRefs[10], undefined, 200, 0.3);
        animateBox(boxRefs[11], undefined, -200, 0.3);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div className="sectionGap overflow-hidden">
      {/* header for mobile */}
      <div className="md:hidden block ">
        <h1 className="text-[#1E1E1E] xs:text-[30px] xs:leading-[36px] xs:pb-[20px] font-helvetica font-bold text-center">
          <span className="text-[#F6941E] ">Study </span> Destination
        </h1>
        <p className="text-[#1E1E1E]/[.8] xs:pb-[30px] text-center font-normal font-helvetica xs:text-[14px] xs:leading-[21px]">
          Discover your ideal study destination with our expert guidance. We
          help you navigate the best global educational opportunities, tailored
          to your goals and ambitions. Start your journey towards academic
          success today!
        </p>
      </div>

      {/* header for large */}
      <div className="hidden md:block text-center">
        <h1 className=" studyDestinationHeading lg:pb-[20px] md:pb-[20px] xl:pb-[20px] pb-[20px] xs:pb-[20px] text-[#1E1E1E]">
          <span className="text-[#F6941E] ">Study </span> Destination
        </h1>

        <p className=" text-[#1E1E1E]/[.8] max-w-[750px] mx-auto xl:pb-[30px] pb-[30px] xs:pb-[30px] EveryPara">
          Discover your ideal study destination with our expert guidance. We
          help you navigate the best global educational opportunities, tailored
          to your goals and ambitions. Start your journey towards academic
          success today!
        </p>

        <p className="md:hidden block text-[#1E1E1E]/[.8] xl:mr-[563px] 2xl:mr-[563px] lg:mr-[320px] md:mr-[120px] xl:pb-[30px] 2xl:pb-[30px] pb-[30px] xs:pb-[30px]">
          Discover your ideal study destination with our expert guidance. We
          help you navigate the best global educational opportunities, tailored
          to your goals and ambitions. Start your journey towards academic
          success today!
        </p>
      </div>

      {/* boxes for large */}
      <div className="hidden md:block">
        <div
          className="grid md:grid-cols-3 grid-cols-1 md:gap-[25px]"
          ref={sectionRef}
        >
          <div ref={boxRefs[6]} className="relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/JkjRg9s/frame-18-2-66e0a3febd983.webp"
              alt="United States"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="united">United States</h1>
              <Link to="/studyDistention">
                <button className="flex items-center justify-center readMore ">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div ref={boxRefs[10]} className=" relative group w-full h-[267px] ">
            <img
              src="/chinaGreatWall.jpg"
              alt="United States"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="united">China</h1>
              <Link to="/studyDistention?country=China">
                <button className="flex items-center justify-center readMore ">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          <div ref={boxRefs[8]} className="relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/6sLjbDZ/image-8-2-66e0a5ce77b18.webp"
              alt="United States"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="united">Australia</h1>
              <Link to="/studyDistention">
                <button className="flex items-center justify-center readMore ">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          <div ref={boxRefs[7]} className="relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/C1KQqK6/pexels-vincent-albos-322257-1750754.webp"
              alt="United States"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="united">Canada</h1>
              <Link to="/studyDistention">
                <button className="flex items-center justify-center readMore ">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          <div ref={boxRefs[11]} className="relative group w-full h-[267px]">
            <img
              src="https://i.ibb.co.com/GPmQbs2/ireland-6717714b87c95.webp"
              alt="United States"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="united">Ireland</h1>
              <Link to="/studyDistention">
                <button className="flex items-center justify-center readMore ">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          <div ref={boxRefs[9]} className="relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/DzDqDPW/europ-671771c9cc68d.webp"
              alt="United States"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="united">Germany</h1>
              <Link to="/studyDistention?country=Germany">
                <button className="flex items-center justify-center readMore ">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* boxes for mobile */}
      <div className="md:hidden block">
        <div
          ref={sectionRef}
          className="grid 
 grid-cols-1 xs:grid-cols-1 "
        >
          <div>
            <div
              ref={boxRefs[5]}
              className="relative group w-full h-[267px] pb-[20px]"
            >
              <img
                src="https://i.ibb.co.com/JkjRg9s/frame-18-2-66e0a3febd983.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <Link to="/studyDistention?country=USA">
                  <button className="flex items-center justify-center readMore gap-x-[10px]">
                    Read more <MdArrowRightAlt />
                  </button>
                </Link>
              </div>
            </div>

            <div
              ref={boxRefs[1]}
              className="relative group w-full h-[267px] pb-[20px]"
            >
              <img
                src="/chinaGreatWall.jpg"
                alt="UAE"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">China</h1>
                <Link to="/studyDistention?country=China">
                  <button className="flex items-center justify-center readMore gap-x-[10px]">
                    Read more <MdArrowRightAlt />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div
              ref={boxRefs[2]}
              className="relative group w-full h-[267px] pb-[20px]"
            >
              <img
                src="https://i.ibb.co.com/6sLjbDZ/image-8-2-66e0a5ce77b18.webp"
                alt="Australia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">Australia</h1>
                <Link to="/studyDistention?country=Australia">
                  <button className="flex items-center justify-center readMore gap-x-[10px]">
                    Read more <MdArrowRightAlt />
                  </button>
                </Link>
              </div>
            </div>

            <div
              ref={boxRefs[4]}
              className=" relative group w-full h-[267px] pb-[20px]"
            >
              <img
                src="https://i.ibb.co.com/C1KQqK6/pexels-vincent-albos-322257-1750754.webp"
                alt="Canada"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">Canada</h1>
                <Link to="/studyDistention?country=Canada">
                  <button className="flex items-center justify-center readMore gap-x-[10px]">
                    Read more <MdArrowRightAlt />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div
              ref={boxRefs[3]}
              className="relative group w-full h-[267px] pb-[20px]"
            >
              <img
                src="https://i.ibb.co.com/GPmQbs2/ireland-6717714b87c95.webp"
                alt="Ireland"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">Ireland</h1>
                <Link to="/studyDistention?country=Ireland">
                  <button className="flex items-center justify-center readMore gap-x-[10px]">
                    Read more <MdArrowRightAlt />
                  </button>
                </Link>
              </div>
            </div>
            <div
              ref={boxRefs[0]}
              className="relative group w-full h-[267px] pb-[20px]"
            >
              <img
                src="https://i.ibb.co.com/DzDqDPW/europ-671771c9cc68d.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">Germany</h1>
                <Link to="/studyDistention?country=Germany">
                  <button className="flex items-center justify-center readMore gap-x-[10px]">
                    Read more <MdArrowRightAlt />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyDestination;
