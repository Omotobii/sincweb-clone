import Image from "next/image";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

const companies = [
  {
    Location: "/company/1.svg",
  },
  {
    Location: "/company/2.svg",
  },
  {
    Location: "/company/3.svg",
  },
  {
    Location: "/company/4.svg",
  },
  {
    Location: "/company/5.svg",
  },
  {
    Location: "/company/6.svg",
  },
  {
    Location: "/company/7.svg",
  },
  {
    Location: "/company/8.svg",
  },
  {
    Location: "/company/9.svg",
  },
  {
    Location: "/company/10.svg",
  },
  {
    Location: "/company/11.svg",
  },
  {
    Location: "/company/12.svg",
  },
  {
    Location: "/company/13.svg",
  },
  {
    Location: "/company/14.svg",
  },
  {
    Location: "/company/15.svg",
  },
  {
    Location: "/company/16.svg",
  },
  {
    Location: "/company/17.svg",
  },
  {
    Location: "/company/18.svg",
  },
  {
    Location: "/company/19.svg",
  },
  {
    Location: "/company/20.svg",
  },
  {
    Location: "/company/21.svg",
  },
  {
    Location: "/company/22.svg",
  },
  {
    Location: "/company/23.svg",
  },
  {
    Location: "/company/24.svg",
  },
  {
    Location: "/company/25.svg",
  },
  {
    Location: "/company/26.svg",
  },
  {
    Location: "/company/27.svg",
  },
  {
    Location: "/company/28.svg",
  },
  {
    Location: "/company/29.svg",
  },
  {
    Location: "/company/30.svg",
  },
  {
    Location: "/company/31.svg",
  },
  {
    Location: "/company/32.svg",
  },
  {
    Location: "/company/33.svg",
  },
  {
    Location: "/company/34.svg",
  },
  {
    Location: "/company/35.svg",
  },
  {
    Location: "/company/36.svg",
  },
  {
    Location: "/company/37.svg",
  },
  {
    Location: "/company/38.svg",
  },
  {
    Location: "/company/39.svg",
  },
  {
    Location: "/company/40.svg",
  },
  {
    Location: "/company/41.svg",
  },
  {
    Location: "/company/42.svg",
  },
  {
    Location: "/company/43.svg",
  },
  {
    Location: "/company/44.svg",
  },
  {
    Location: "/company/45.svg",
  },
  {
    Location: "/company/46.svg",
  },
  {
    Location: "/company/47.svg",
  },
  {
    Location: "/company/48.svg",
  },
];

const cofound = [
  {
    img: "/svg/no1.svg",
    title: "We Ideate",
    content:
      "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.",
  },
  {
    img: "/svg/no2.svg",
    title: "You Validate",
    content:
      "You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions ",
  },
  {
    img: "/svg/no3.svg",
    title: "You Co-own",
    content:
      "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.",
  },
];

const ent = [
  {
    img: "/svg/doc.svg",
    title: "We Ideate",
    content:
      "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.",
  },
  {
    img: "/svg/sit.svg",
    title: "You Validate",
    content:
      "You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions ",
  },
  {
    img: "/svg/edit.svg",
    title: "You Co-own",
    content:
      "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#F9F9F9]">
      {/* navigation header */}
      <div className="flex items-center sticky top-0 bg-[#F9F9F9] z-50 p-5 sm:px-10 lg:px-24 py-4 justify-between">
        <div className="flex gap-[25px]">
          <div>
            <img src="/logowhite.png" alt="logo" className="w-16" />
          </div>
          <div className="hidden lg:flex items-center gap-[16px]">
            <Link href="/" className="hover:underline">
              About
            </Link>
            <Link href="/" className="hover:underline">
              SIP
            </Link>
            <Link href="/" className="hover:underline">
              Studio
            </Link>
            <Link href="/" className="hover:underline">
              SEEQ
            </Link>
            <Link href="/" className="hover:underline">
              Platforms
            </Link>
            <Link href="/" className="hover:underline">
              Initiatives
            </Link>
            <Link href="/" className="hover:underline">
              More
            </Link>
          </div>
        </div>
        {/* mobile navigation */}
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </div>
        {/* mobile navigation */}
        <div className="hidden lg:flex gap-[12px]">
          <button className="text-[16px] w-max bg-[#20888F] text-white px-3 py-3 rounded-full">
            SINC With Us
          </button>
          <button className="text-[16px] w-max bg-[#303030] text-white px-5 py-3 rounded-full">
            Apply to SIP 1.0
          </button>
        </div>
      </div>
      {/* navigation header */}

      {/* hero */}
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 ">
        <div className="px-5 sm:px-10 lg:pl-24 bg-white">
          <div className="flex flex-col pt-5 lg:pt-[87px] lg:pr-5">
            <h3 className="text-3xl lg:text-[32px] font-semibold text-textPrimary">
              SINC Partners is a service incubation company
            </h3>
            <p className="text-base text-[24px] text-textSecondary">
              Connecting experts in product development and growth marketing
              willing to offer their services to amazing startups in exchange
              for minute equity (usually 0.5% to 2%).
            </p>
            <button className="text-[16px] w-full md:w-max bg-[#303030] text-white px-[32px] py-[15px] my-4 lg:mt-[24px] rounded-full">
              SINC With Us
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/Imagehero.png"
            alt="Next.js Logo"
            width={703}
            height={500}
            priority
          />
        </div>
      </div>
      {/* hero */}

      {/* brief talk */}
      <div className="flex justify-center items-center px-5 sm:px-10 pb-[76px]">
        <div className="lg:w-[883px] lg:h-[235px] bg-white mt-[79px] font-[400] rounded-[32px] text-center py-6 lg:py-[32px] px-4 lg:px-[20px] text-textPrimary">
          <p className="text-[20px]  pb-[32px]">
            "Nigeria and Africa has a massive network effect that have not be
            fully utilized. With Nigerians/Africans in every country and
            territory of the world, we can scale an African business to 100+
            countries in few weeks"
          </p>
          <div className="text-[16px]">
            <h2 className="font-[500]">Daniel Izeghs Oratokhai</h2>
            <p className="text-textSecondary">
              Managing Partner at SINC Partners Ltd
            </p>
          </div>
        </div>
      </div>
      {/* brief talk */}

      {/* network of builders */}
      <div className="flex flex-col items-center px-5 sm:px-10 lg:px-24 pb-[100px]">
        <div className="lg:w-auto flex flex-col gap-[32px]">
          <div>
            <h1 className="text-4xl lg:text-[3.25rem] lg:leading-[3.75rem] font-[500] text-textPrimary lg:text-center">
              Network of builders helping startup scale
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-[32px]">
            <div className="flex flex-col gap-[20px] p-[24px] bg-white rounded-[12px]">
              <h2 className="text-lg lg:text-[24px] font-[500]">
                Work with Service Incubators to expedite your time-to-market
              </h2>
              <div>
                <p className="text-sm lg:text-[17px] text-textSecondary font-[400] leading-[27.2px]">
                  Collaborate with our meticulously chosen service partners,
                  each with a vested interest, ensuring a shared commitment to
                  success in the game of venture building.
                </p>
                <p className="text-sm lg:text-[17px] text-textSecondary font-[600] leading-[27.2px]">
                  For 7.5% equity, you get a product manager, product designer,
                  frontend engineer, software engineer and growth marketer to
                  build the MVP of your app or web application and validate it.
                </p>
              </div>
              <button className="flex gap-2 w-max lg:text-[17px] font-[600] underline">
                Learn More <img src="/svg/arrowright.svg" alt="=>" />
              </button>
            </div>

            <div className="flex flex-col gap-[20px] p-[24px] bg-white rounded-[12px]">
              <h2 className="text-lg lg:text-[24px] font-[500]">
                Access funding after your mvp is validated
              </h2>
              <div>
                <p className="text-sm lg:text-[17px] text-textSecondary font-[400] leading-[27.2px]">
                  Startups that have built and validated their product can take
                  advantage of the financial resources of the SINC Investors
                  Network, elevating their potential for success in the venture
                  capital landscape.
                </p>
                <p className="text-sm lg:text-[17px] text-textSecondary font-[600] leading-[27.2px]">
                  Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12
                  months
                </p>
              </div>
              <button className="flex gap-2 w-max lg:text-[17px] font-[600] underline">
                Learn More <img src="/svg/arrowright.svg" alt="=>" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* network of builders */}

      {/* Area of focus */}
      <div className="flex flex-col gap-[64px] items-center px-5 sm:px-10 lg:px-24 pb-[100px]">
        <div className="lg:w-[628px]">
          <h1 className="text-4xl lg:text-[3.25rem] leading-[3.75rem] font-[500] pb-[24px] text-textPrimary lg:text-center">
            Our Area of Focus
          </h1>
          <p className="lg:text-[17px] lg:text-center text-textSecondary">
            In our quest to help make success available to everyone, we have
            initial strategic direction to focus on these five (5) key areas at
            the lab
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:w-[95%]">
          <div className="w-full lg:w-[20%] h-28 lg:h-[10rem] flex font-[400] lg:flex-col items-center justify-between p-[1rem] bg-[#303030] text-white text-[1rem]">
            <p className="w-1/3 lg:w-full">01</p>
            <p className="w-2/3 lg:w-full">Business Support & Incubation</p>
          </div>
          <div className="w-full lg:w-[20%] h-28 lg:h-[160px] flex font-[400] lg:flex-col items-center justify-between p-[1rem] bg-[#F47733] text-white text-[1rem]">
            <p className="w-1/3 lg:w-full">02</p>
            <p className="w-2/3 lg:w-full">On-Demand & As-A-Service</p>
          </div>
          <div className="w-full lg:w-[20%] h-28 lg:h-[160px] flex font-[400] lg:flex-col items-center justify-between p-[1rem] bg-[#FF78BF] text-white text-[1rem]">
            <p className="w-1/3 lg:w-full">03</p>
            <p className="w-2/3 lg:w-full">Marketplace & Crowdsourcing</p>
          </div>
          <div className="w-full lg:w-[20%] h-28 lg:h-[160px] flex font-[400] lg:flex-col items-center justify-between p-[1rem] bg-[#20888F] text-white text-[1rem]">
            <p className="w-1/3 lg:w-full">04</p>
            <p className="w-2/3 lg:w-full">Aggregation & Shared Economy</p>
          </div>
          <div className="w-full lg:w-[20%] h-28 lg:h-[160px] flex font-[400] lg:flex-col items-center justify-between p-[1rem] bg-[#FF88C6] text-white text-[1rem]">
            <p className="w-1/3 lg:w-full">05</p>
            <p className="w-2/3 lg:w-full">
              Decentralized Economy & Digital Assets
            </p>
          </div>
        </div>
      </div>
      {/* Area of focus */}

      {/* concept innovations */}
      <div className="flex flex-col gap-[64px] items-center px-5 sm:px-10 pb-[100px]">
        <div className="lg:w-[934px]">
          <h1 className="text-4xl lg:text-[3.25rem] leading-[3.75rem] font-[500] pb-[24px] text-textPrimary lg:text-center">
            Our Concept Innovations
          </h1>
          <p className="lg:text-[17px] lg:text-center text-textSecondary">
            We have proprietary concept innovations that will support the
            startup ecosystem, support solution-providers/entrepreneurs and
            ultimately help democratize success;
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-[95%] gap-10 lg:gap-[14]">
          <div className="flex flex-col gap-[36px] items-center p-[20px] lg:w-[99%] lg:h-[auto] bg-white rounded-[12px]">
            <p className="text-center text-[22px] font-[500]">
              Service Incubator
            </p>
            <p className="text-center text-[16px]">
              A service-for-shares model of incubating pre-product startups and
              early-stage companies by building their early stage product and
              MVP
            </p>
          </div>
          <div className="flex flex-col gap-[36px] items-center p-[20px] lg:w-[99%] lg:h-[auto] bg-white rounded-[12px]">
            <p className="text-center text-[22px] font-[500]">Virtualting</p>
            <p className="text-center text-[16px]">
              A resource share model that allows companies share the time of
              resources (employees, consultants, technical advisers or
              influencers) while also splitting the service cost of the resource
            </p>
          </div>
          <div className="flex flex-col gap-[36px] items-center p-[20px] lg:w-[99%] lg:h-[auto] bg-white rounded-[12px]">
            <p className="text-center text-[22px] font-[500]">Diiming</p>
            <p className="text-center text-[16px]">
              A progressive investment model that allows you to put aside income
              (disposable or non-disposable) as investment over a period towards
              an investment or spend of your choice 
            </p>
          </div>
        </div>
      </div>
      {/* concept innovations */}

      {/* service incubation */}
      <div className="flex flex-col gap-[64px] items-center px-5 sm:px-10 lg:px-24 pb-[100px]">
        <div className="lg:w-[934px]">
          <h1 className="text-4xl lg:text-[3.25rem] leading-[3.75rem] font-[500] pb-10 lg:pb-[24px] text-textPrimary lg:text-center">
            Our Service Incubation Model
          </h1>
          <p className="lg:text-[17px] lg:text-center text-textSecondary">
            The Service Incubation model is an alternate funding model for
            startup that allows professionals to offer their services to
            startups in return for a minute equity (usually between 0.5% to
            1.5%) in the startup. As a service incubator, you will see your
            share grow as much as 1000% in 12 - 24 months as been first to
            invest.
          </p>
        </div>
        <div className="w-full">
          <h1 className="text-2xl lg:text-[32px] text-textPrimary pb-[12px] font-[500]">
            Hypothesis
          </h1>
          <p className="lg:text-[17px] font-[400]">
            Just a few reasons we know its time for this model within the
            ecosystem
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-full xl:w-[90%] gap-5 lg:gap-10">
          <div className="flex flex-col gap-[10] items-center p-[20px] lg:w-[100%] lg:h-full bg-white rounded-[12px]">
            <div className="w-full pb-[1.25rem]">
              <img src="/svg/triangle.svg" alt="logo" />
            </div>
            <p className="flex items-baseline text-textSecondary">
              Most early-stage companies and pre-product startups cannot afford
              professional services especially those who don’t have family and
              friends’ network that can support
            </p>
          </div>
          <div className="flex flex-col gap-[10] items-center p-[20px] lg:w-[100%] lg:h-full bg-white rounded-[12px]">
            <div className="w-full pb-[1.25rem]">
              <img src="/svg/rhombus.svg" alt="logo" />
            </div>{" "}
            <p className="flex items-baseline text-textSecondary">
              If startups can seed 5-10% in equity to incubators for $20k to
              $200k funding most times, they will be willing to seed 10% equity
              for a $25k service investment
            </p>
          </div>
          <div className="flex flex-col gap-[10] items-center p-[20px] lg:w-[100%] lg:h-full bg-white rounded-[12px]">
            <div className="w-full pb-[1.25rem]">
              <img src="/svg/pentagon.svg" alt="logo" />
            </div>
            <p className="flex items-baseline text-textSecondary">
              Young professionals who don’t have a lot of money to invest nor an
              accredited investors will have opportunities to take equity at the
              early stage of their career, usually been the first to invest and
              almost guaranteed of return
            </p>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-2xl lg:text-[32px] text-textPrimary pb-[12px] font-[500]">
            Case Study
          </h1>
          <p className="lg:text-[17px] font-[400]">
            See what Service Incubators get, the maths behind Service Equity
            (SEEQ) and what the value of your share equity can be over time
          </p>
        </div>
        <div className="w-full px-5 flex md:flex-row flex-col gap-[12px]">
          <span className="px-[32px] py-[12px] bg-white border border-[#A4A4A4] rounded-full">
            Service Incubator Equity
          </span>
          <span className="px-[32px] py-[12px] bg-white border border-[#A4A4A4] rounded-full">
            SEEQ Maths Equation
          </span>
          <span className="px-[32px] py-[12px] bg-white border border-[#A4A4A4] rounded-full">
            Value of my Equity Over Time
          </span>
        </div>
        <div>
          <button className="flex gap-2 w-max text-[17px] font-[600] underline">
            Become A Service Incubator{" "}
            <img src="/svg/arrowright.svg" alt="=>" />
          </button>
        </div>
      </div>
      {/* service incubation */}

      {/* Studio Portfolio */}
      <div className="flex flex-col gap-[64px] items-center px-5 lg:px-24 sm:px-10 pb-[100px]">
        <div>
          <h1 className="text-4xl lg:text-[3.25rem] leading-[3.75rem] font-[500] pb-[24px] text-textPrimary lg:text-center">
            Our Studio Portfolio
          </h1>
          <p className="lg:text-[17px] lg:text-center text-textSecondary">
            Our 2024 Service Incubator Portfolio Companies
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {companies.map((company) => (
            <div
              key={company.Location}
              className="bg-white rounded-[12px] h-14 object-contain overflow-hidden p-4"
            >
              <Image
                src={company.Location}
                alt="logo"
                width={100}
                height={24}
                priority
              />
            </div>
          ))}
        </div>
        <div>
          <button className="flex gap-2 w-max text-[17px] font-[600] underline">
            View All Companies
            <img src="/svg/arrowright.svg" alt="=>" />
          </button>
        </div>
      </div>
      {/* Studio Portfolio */}

      {/* co-found with us */}
      <div className="flex flex-col gap-[64px] items-center px-5 lg:px-24 sm:px-10 pb-[100px]">
        <div className="lg:w-[934px]">
          <h1 className="text-4xl lg:text-[3.25rem] leading-[3.75rem] font-[500] pb-[24px] text-textPrimary lg:text-center">
            Co-found With Us
          </h1>
          <p className="lg:text-[17px] lg:px-24 lg:text-center text-textSecondary">
            We seek to collaborate with visionary individuals who are solving
            similar problems of helping entrepreneurs succeed
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-[100%] gap-10">
          {cofound.map((item) => (
            <div className="flex flex-col gap-3 p-[20px] lg:w-full text-left lg:h-full bg-white rounded-[12px]">
              <img src={item.img} alt="logo" className="pb-[16px] w-max" />
              <h2 className="text-left text-[22px] font-[500]">{item.title}</h2>
              <p className="text-textSecondary">{item.content}</p>
            </div>
          ))}
        </div>
        <div>
          <button className="flex gap-2 w-max lg:text-[17px] font-[600] underline">
            Build your dream <img src="/svg/arrowright.svg" alt="=>" />
          </button>
        </div>
      </div>
      {/* co-found with us */}

      {/* entreprenuership residence */}
      <div className="flex flex-col gap-[64px] items-center px-5 sm:px-10 lg:px-24 pb-[100px]">
        <div className="lg:w-[1000px]">
          <h1 className="text-4xl lg:text-[3.25rem] leading-[3.75rem] font-[500] pb-[24px] text-textPrimary lg:text-center">
            Join Our Entrepreneur In Residence (EIR) Program
          </h1>
          <p className="lg:text-[17px] lg:px-24 lg:text-center text-textSecondary">
            Our EIR program is our structured 3 months un-paid program designed
            to help us have a pipeline of business and technical cofounders who
            can run the venture of choice as CEO & CTO owning 20% equity each.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-full gap-10">
          {ent.map((item) => (
            <div className="flex flex-col gap-3 p-[20px] lg:w-full lg:h-full bg-white rounded-[12px]">
              <img src={item.img} alt="logo" className="pb-[16px] w-16" />
              <h2 className="text-left text-[22px] font-[500]">{item.title}</h2>
              <p className="text-textSecondary">{item.content}</p>
            </div>
          ))}
        </div>
        <div>
          <button className="flex gap-2 w-max text-[17px] font-[600] underline">
            Support the future <img src="/svg/arrowright.svg" alt="=>" />
          </button>
        </div>
      </div>
      {/* entreprenuership residence */}

      {/* Investor Network */}
      <div className="flex flex-col gap-[44px] items-center px-5 sm:px-10 lg:px-24 pb-[100px]">
        <div className="lg:w-[934px]">
          <h1 className="text-4xl lg:text-[3.25rem] leading-[3.75rem] font-[500] pb-[24px] text-textPrimary lg:text-center">
            SINC Investors Network
          </h1>
          <p className="lg:text-[17px] lg:px-24 lg:text-center text-textSecondary">
            Our deals are structured not just to take in investments but to
            onboard owners passionate about our solutions. Our portfolio
            companies are valued at $50k at start, with these low valuation, you
            are guaranteed at least 2x-5x, usually been the first to invest.
          </p>
          <p className="lg:text-[17px] lg:px-24 text-center text-textSecondary">
            <span className="font-[600]">Disclaimer:</span> These deal flows is
            a statement of our projections and may differ from stage to stage
            and from venture to venture and the guarantee is for deal 1, usually
            the first to invest
          </p>
        </div>
        <div className="w-full px-5 sm:px-10 lg:px-0 lg:text-[20px]">
          <h2>
            <span className="font-[600]">
              Micro Angel Investors & Service incubators
            </span>{" "}
            (Invest from $500 & above)
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full px-5 sm:px-10 lg:px-0">
          <div className="w-full h-auto lg:h-full flex font-[400] flex-col gap-4 p-[20px] border border-collapse lg:text-[20px]">
            <p>Deal 1</p>
            <div>
              <ul className="text-xs lg:text-sm">
                <li>✓ Idea Stage: $5k for 5% Equity</li>
                <li>✓ Expected Revenue at This Stage: $0/mth</li>
                <li>✓ Duration of Raise: 1mth</li>
                <li>
                  ✓ Who Can Invest: People with Domain Expertise and Advisors
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-auto lg:h-full flex font-[400] flex-col gap-4 p-[20px] border border-collapse lg:text-[20px]">
            <p>Deal 2</p>
            <div>
              <ul className="text-xs lg:text-sm">
                <li>✓ Build Stage: $25k worth of service for 10% Equity</li>
                <li>✓ Expected Revenue at This Stage: $100+/mth</li>
                <li>✓ Duration of Raise: 1-3mths</li>
                <li>
                  ✓ Who Can Invest: Developers, Engineers, Growth Marketers
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-auto lg:h-full flex font-[400] flex-col gap-4 p-[20px] border border-collapse lg:text-[20px]">
            <p>Deal 3</p>
            <div>
              <ul className="text-xs lg:text-sm">
                <li>✓ Validation Stage: $50k for 5% Equity</li>
                <li>✓ Expected Revenue at This Stage: $1k+/mth</li>
                <li>✓ Duration of Raise: 3-6mths</li>
                <li>✓ Who Can Invest: Everyone</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-auto lg:h-full flex font-[400] flex-col gap-4 p-[20px] border border-collapse lg:text-[20px]">
            <p>Deal 4</p>
            <div>
              <ul className="text-xs lg:text-sm">
                <li>✓ Traction Stage: $125k worth of service for 5% Equity</li>
                <li>✓ Expected Revenue at This Stage: $5k+/mth</li>
                <li>✓ Duration of Raise: 6-12mths</li>
                <li>
                  ✓ Who Can Invest: Media, Influencers, Celebrity, Platform
                  Owners
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full px-5  sm:px-10 lg:px-0 lg:text-[20px]">
          <h2>
            <span className="font-[600]">
              Angel Investors & Venture Capital
            </span>
            (Invest from $50k and above)
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full px-5 sm:px-10 lg:px-0">
          <div className="w-full h-auto lg:h-full flex font-[400] flex-col gap-4 p-[20px] border border-collapse lg:text-[20px]">
            <p>Deal 5</p>
            <div>
              <ul className="text-xs lg:text-sm">
                <li>✓ Pre-seed Stage: $1.5M for 10% Equity</li>
                <li>✓ Expected Revenue at This Stage: $50k+/mth</li>
                <li>✓ Duration of Raise: 6-18mths</li>
                <li>
                  ✓ Who Can Invest: Angel Investors, VCs, PE, Institutions
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-auto lg:h-full flex font-[400] flex-col gap-4 p-[20px] border border-collapse lg:text-[20px]">
            <p>Deal 6</p>
            <div>
              <ul className="text-xs lg:text-sm">
                <li>✓ Seed Stage: $7.5M for 20% Equity</li>
                <li>✓ Expected Revenue at This Stage: $250k+/mth</li>
                <li>✓ Duration of Raise: 12-24mths</li>
                <li>✓ Who Can Invest: VCs, PE, Institutions</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-auto lg:h-full flex font-[400] flex-col gap-4 p-[20px] border border-collapse lg:text-[20px]">
            <p>Deal 7</p>
            <div>
              <ul className="text-xs lg:text-sm">
                <li>✓ IPO Stage: $1.5B for 20% Equity</li>
                <li>✓ Expected Revenue at This Stage: $1M+/mth</li>
                <li>✓ Duration of Raise: 18-36mths</li>
                <li>✓ Who Can Invest: The Public</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-auto lg:h-full flex font-[400] flex-col gap-4 border border-collapse lg:text-[20px] lg:py-[12px] lg:pl-[20px]">
            <div className="lg:w-[full] h-full lg:h-auto flex flex-col gap-3 justify-end bg-[#101010] text-white py-[18px] px-[20px]">
              <p className="hidden lg:block lg:text-[17px] pb-10">
                Work with Service Incubators (SINC) to expedite your time to
                market
              </p>
              <button className="lg:text-[16px] text-xs bg-[#303030] mt-10 lg:mt-0 rounded-full py-2 lg:py-[15px] px-3 lg:px-[32px]">
                Join SINC Network
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Investor Network */}

      {/* equity jobs */}
      <div className="flex flex-col gap-[64px] items-center px-5 lg:px-24 sm:px-10 pb-[100px]">
        <div className="lg:w-[1000px]">
          <h1 className="text-4xl lg:text-[3.25rem] leading-[3.75rem] font-[500] pb-[24px] text-textPrimary lg:text-center">
            Equity jobs
          </h1>
          <p className="lg:text-[17px] lg:px-24 lg:text-center text-textSecondary">
            See companies and startups offering equity or a mix of cash and
            equity for very important position in their company
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:w-[full] gap-10">
          <div className="flex flex-col gap-4 p-[20px] w-[278px] bg-white rounded-[12px]">
            <img src="/company/21.svg" alt="logo" className="pb-[16px] w-1/2" />
            <p className="text-textSecondary">
              A resource share model that allows companies share the``
            </p>
            <h2>UX Strategist</h2>
            <div>
              <div className="flex justify-between text-gray-400">
                <span>LOCATION</span>
                <span>INDUSTRY</span>
              </div>
              <div className="flex justify-between">
                <span>Abuja, Nigeria</span>
                <span>On-demand print</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-gray-400">
                <span>EQUITY</span>
                <span>STIPEND</span>
              </div>
              <div className="flex justify-between">
                <span>1.2%</span>
                <span>NGN 200,000/mth</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-gray-400">
                <span>DEADLINE</span>
                <span>ROLE TYPE</span>
              </div>
              <div className="flex justify-between">
                <span>24th, January 2024</span>
                <span>Full-time</span>
              </div>
            </div>
            <button className="text-white py-[14px] px-[47px] bg-[#303030] rounded-full">
              View Details
            </button>
          </div>
          <div className="flex flex-col gap-4 p-[20px] w-[278px] bg-white rounded-[12px]">
            <img src="/company/27.svg" alt="logo" className="pb-[16px] w-1/2" />
            <p className="text-textSecondary">
              A resource share model that allows companies share the``
            </p>
            <h2>UX Strategist</h2>
            <div>
              <div className="flex justify-between text-gray-400">
                <span>LOCATION</span>
                <span>INDUSTRY</span>
              </div>
              <div className="flex justify-between">
                <span>Abuja, Nigeria</span>
                <span>E-commerce</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-gray-400">
                <span>EQUITY</span>
                <span>STIPEND</span>
              </div>
              <div className="flex justify-between">
                <span>1.2%</span>
                <span>NGN 200,000/mth</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-gray-400">
                <span>DEADLINE</span>
                <span>ROLE TYPE</span>
              </div>
              <div className="flex justify-between">
                <span>24th, January 2024</span>
                <span>Full-time</span>
              </div>
            </div>
            <button className="text-white lg:w-max py-[14px] px-[47px] bg-[#303030] rounded-full">
              View Details
            </button>
          </div>
          <div className="flex flex-col gap-4 p-[20px] w-[278px] bg-white rounded-[12px]">
            <img src="/company/22.svg" alt="logo" className="pb-[16px] w-1/2" />
            <p className="text-textSecondary">
              A resource share model that allows companies share the``
            </p>
            <h2>UX Strategist</h2>
            <div>
              <div className="flex justify-between text-gray-400">
                <span>LOCATION</span>
                <span>INDUSTRY</span>
              </div>
              <div className="flex justify-between">
                <span>Abuja, Nigeria</span>
                <span>Fintech</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-gray-400">
                <span>EQUITY</span>
                <span>STIPEND</span>
              </div>
              <div className="flex justify-between">
                <span>1.2%</span>
                <span>NGN 200,000/mth</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-gray-400">
                <span>DEADLINE</span>
                <span>ROLE TYPE</span>
              </div>
              <div className="flex justify-between">
                <span>24th, January 2024</span>
                <span>Full-time</span>
              </div>
            </div>
            <button className="text-white lg:w-max py-[14px] px-[47px] bg-[#303030] rounded-full">
              View Details
            </button>
          </div>
          <div className="flex flex-col gap-4 p-[20px] w-[278px] bg-white rounded-[12px]">
            <img src="/company/29.svg" alt="logo" className="pb-[16px] w-1/2" />
            <p className="text-textSecondary">
              A resource share model that allows companies share the``
            </p>
            <h2>UX Strategist</h2>
            <div>
              <div className="flex justify-between text-gray-400">
                <span>LOCATION</span>
                <span>INDUSTRY</span>
              </div>
              <div className="flex justify-between">
                <span>Abuja, Nigeria</span>
                <span>Transportation</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-gray-400">
                <span>EQUITY</span>
                <span>STIPEND</span>
              </div>
              <div className="flex justify-between">
                <span>1.2%</span>
                <span>NGN 200,000/mth</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-gray-400">
                <span>DEADLINE</span>
                <span>ROLE TYPE</span>
              </div>
              <div className="flex justify-between">
                <span>24th, January 2024</span>
                <span>Full-time</span>
              </div>
            </div>
            <button className="text-white lg:w-max py-[14px] px-[47px] bg-[#303030] rounded-full">
              View Details
            </button>
          </div>
        </div>
        <div>
          <button className="flex gap-2 w-max text-[17px] font-[600] underline">
            See More Equity Jobs <img src="/svg/arrowright.svg" alt="=>" />
          </button>
        </div>
      </div>
      {/* equity jobs */}

      {/* blogs */}
      <div className="flex flex-col gap-[64px] items-center px-5 sm:px-10 lg:px-24 pb-[100px]">
        <div className="lg:w-[1000px]">
          <h1 className="text-4xl lg:text-[56px] font-[500] pb-[24px] text-textPrimary lg:text-center">
            Blogs & Resources
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="flex flex-col gap-10 lg:w-full">
            <iframe
              className="w-full h-auto"
              src="https://www.youtube.com/embed/D0UnqGm_miA"
              title="Yop 10 most powerful Startup"
            ></iframe>
            <div className="flex justify-between ">
              <div className="w-2/3">
                <h2 className="text-left text-sm lg:text-lg xl:text-base font-[500]">
                  Top Ten Most Powerful Startup
                </h2>
                <p className="text-left text-sm lg:text-lg xl:text-base text-textSecondary">
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </div>
              <div className="flex justify-end w-1/3">
                <img src="/blog1.png" className="h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:w-full">
            <iframe
              className="w-full h-auto"
              src="https://www.youtube.com/embed/D0UnqGm_miA"
              title="Yop 10 most powerful Startup"
            ></iframe>
            <div className="flex gap-4 justify-between ">
              <div className="w-2/3">
                <h2 className="text-left text-sm lg:text-lg xl:text-base font-[500]">
                  Top Ten Most Powerful Startup
                </h2>
                <p className="text-left text-sm lg:text-lg xl:text-base text-textSecondary">
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </div>
              <div className="flex justify-end w-1/3">
                <img src="/blog2.png" className="h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:w-full">
            <iframe
              className="w-full h-auto"
              src="https://www.youtube.com/embed/D0UnqGm_miA"
              title="Yop 10 most powerful Startup"
            ></iframe>
            <div className="flex gap-4 justify-between ">
              <div className="w-2/3">
                <h2 className="text-left text-sm lg:text-lg xl:text-base font-[500]">
                  Top Ten Most Powerful Startup
                </h2>
                <p className="text-left text-sm lg:text-lg xl:text-base text-textSecondary">
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </div>
              <div className="flex justify-end w-1/3">
                <img src="/blog3.png" className="h-full" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="w-max text-[17px] font-[600] underline">
            See More Blogs and Resources
          </button>
        </div>
      </div>
      {/* blogs */}

      {/* as featured in */}
      <div className="flex flex-col gap-[64px] items-center pb-[100px]">
        <div className="lg:w-[1000px]">
          <h1 className="text-xl lg:text-[24px] font-[600] pb-[56px] text-textPrimary text-center">
            As Featured In
          </h1>
        </div>
        <div className="lg:px-24">
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
            <div className="sm:h-full sm:w-full lg:col-span-2">
              <img
                src="/feature1.png"
                alt="logo"
                className="sm:object-cover h-full w-full pb-[16px]"
              />
            </div>
            <div className="flex flex-col justify-between gap-16 lg:w-[full] lg:h-[full] py-[20px] px-[40px] bg-white">
              <div>
                <div className="pb-3">
                  <img src="/company/3.svg" alt="" />
                </div>
                <div>
                  <h2 className="pb-2">
                    SINC Partners invests over 200 million naira in 5 startups
                  </h2>
                  <p className="text-textSecondary">
                    SINC Partners invests over 200 million naira in 5 startups.
                    SINC Partners invests over 200 million naira in 5 startups
                    SINC Partners invests over 200 million naira in ....
                  </p>
                </div>
              </div>
              <div className="text-textSecondary">
                <p className="pb-5">REPORTED BY:</p>
                <p>Rema Viel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* as featured in */}

      {/* lets build */}
      <div className="flex flex-col gap-5 lg:gap-[64px] items-center px-5 lg:px-24 sm:px-10 pb-[100px]">
        <div className="lg:w-full">
          <h1 className=" text-5xl lg:text-[5rem] font-[500] pb-[24px] text-textPrimary lg:text-center">
            Let's build companies that help everyone succeed
          </h1>
        </div>

        <div className="flex gap-[12px]">
          <button className="text-[16px] w-max border border-[#303030] text-[#303030] px-[24px] py-[15px] rounded-full">
            SINC With Us
          </button>
          <button className="text-[16px] w-max bg-[#303030] text-white px-[24px] py-[15px] rounded-full">
            Apply to SIP 1.0
          </button>
        </div>
      </div>
      {/* lets build */}

      {/* footer */}
      <div className="text-white bg-textPrimary pt-[44px] lg:h-full">
        <div className="flex flex-col gap-4 lg:w-[553px] px-5 sm:px-10 lg:pl-24 lg:h-full pb-10">
          <h1 className="text-[60px]">Newsletter</h1>
          <p>
            Get the latest about SINC Partners, our startup Incubator program,
            Portfolio company offerings - straight into your inbox.
          </p>
          <div className="relative h-max pt-10">
            <form action="" className="h-full">
              <input
                type="text"
                placeholder="Enter your email address"
                className="py-3 px-4 rounded-full bg-transparent border w-full h-full border-textSecondary"
              />
              <button className="absolute right-0 bg-white rounded-full py-3 px-4 text-textPrimary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:flex gap-2lg:w-[65vw] lg:gap-[33px] pt-[46px] px-5 sm:px-10 lg:pl-24 pb-10 border-y border-r border-textSecondary border-collapse">
            <div className="col-span-2  pb-2 lg:w-[220px]">
              <img src="/logoblack.png" alt="" className="pb-3 w-[110px]" />
              <p>
                SINC Partners is a service incubation company connecting experts
                in product development and growth marketing willing to offer
                their services to amazing startups in exchange for minute equity
                (usually 0.5% to 2%)
              </p>
            </div>
            <div>
              <h2 className="pb-[17px] font-[700]">Platforms</h2>
              <ul className="leading-8">
                <a>
                  <li>Kofoundme</li>
                </a>
                <a>
                  <li>InResidency</li>
                </a>
                <a>
                  <li>Service Market</li>
                </a>
                <a>
                  <li>Founders School</li>
                </a>
                <a>
                  <li>Metty</li>
                </a>
                <a>
                  <li>Grantty</li>
                </a>
                <a>
                  <li>Boldtell</li>
                </a>
                <a>
                  <li>Chekwa</li>
                </a>
              </ul>
            </div>
            <div>
              <h2 className="pb-[17px] font-[700]">Initiatives</h2>
              <ul className="leading-8">
                <a>
                  <li>Jabi Plains</li>
                </a>
                <a>
                  <li>Local Pricing Initiative</li>
                </a>
                <a>
                  <li>Scholarship Program</li>
                </a>
                <a>
                  <li>SSMN Pricing</li>
                </a>
                <a>
                  <li>University STEM </li>
                </a>
                <a>
                  <li>University InResidency </li>
                </a>
                <a>
                  <li className="flex gap-1 items-center text-nowrap">
                    1M Nigeria
                    <img src="/svg/ngn.svg" alt="" />
                    Products
                  </li>
                </a>
                <a>
                  <li>Founders Festival </li>
                </a>
              </ul>
            </div>
            <div>
              <h2 className="pb-[17px] font-[700]">About Us</h2>
              <ul className="leading-8">
                <a>
                  <li>Who We Are</li>
                </a>
                <a>
                  <li>Our People</li>
                </a>
                <a>
                  <li>Concept Innovations</li>
                </a>
                <a>
                  <li>Our Process</li>
                </a>
                <a>
                  <li>Investors Network</li>
                </a>
                <a>
                  <li>CSR & Events</li>
                </a>
                <a>
                  <li>Career</li>
                </a>
                <a>
                  <li>Contact</li>
                </a>
              </ul>
            </div>
            <div>
              <h2 className="pb-[17px] font-[700]">More</h2>
              <ul className="leading-8">
                <a>
                  <li>Services</li>
                </a>
                <a>
                  <li>Equity Jobs</li>
                </a>
                <a>
                  <li>EIR Program</li>
                </a>
                <a>
                  <li>Offers</li>
                </a>
                <a>
                  <li>Innovation News</li>
                </a>
                <a>
                  <li>FAQ</li>
                </a>
                <a>
                  <li>Blog & Resources</li>
                </a>
                <a>
                  <li>Press</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="pt-[46px] pb-[17px] pl-[20px] border-y border-l lg:w-[35vw] border-textSecondary">
            <div className="pb-[40px] lg:pb-20 xl:pb-[40px]">
              <h2 className="pb-[17px] font-[700]">Locations</h2>
              <div className="leading-[29px]">
                <p>Abuja, Nigeria </p>
                <p>Lagos, Nigeria </p>
                <p>Philadelphia, USA</p>
              </div>
            </div>
            <div className="flex items-baseline gap-[24px]">
              <div>
                <img src="/biscert.png" className="pb-4 w-[176px]" />
                <p>Trusted Business</p>
              </div>
              <div>
                <img src="/whatsapp.png" className="pb-4 " />
                <p>Chat with US</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 sm:px-10 pt-10 lg:px-24 ">
          <div className="flex flex-col 2xl:flex-row gap-5 items-center text-left lg:text-center">
            <div>
              <p>
                Guaranteed 2x on your service or cash investment, usually been
                the first to invest.
                <span className="font-semibold">
                  Get in early and SINC your guaranty!
                </span>
              </p>
            </div>
            <div className="flex pt-5 flex-col lg:flex-row items-center">
              <img src="/gasus.png" className="w-[120px]" />
              <p>
                We are a business built on the foundation of Christian values
                and belief
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between pt-10 text-sm items-center gap-2">
            <div>
              <p>
                <span>©</span> 2023 SINC Partners Ltd. All rights reserved
              </p>
            </div>
            <div>
              <a href="/">Privacy Policy </a>
              <a href="/">Terms of Service</a>
              <a href="/">Security</a>
            </div>
            <div className="flex gap-4 py-4">
              <a href="/">
                <img src="/social/fb.svg" alt="" />
              </a>
              <a href="/">
                <img src="/social/twitter.svg" alt="" />
              </a>
              <a href="/">
                <img src="/social/ig.svg" alt="" />
              </a>
              <a href="/">
                <img src="/social/in.svg" alt="" />{" "}
              </a>
              <a href="/">
                <img src="/social/medium.svg" alt="" />
              </a>
              <a href="/">
                <img src="/social/yt.svg" alt="" />
              </a>
              <a href="/">
                <img src="/social/chat.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="flex gap-3 pb-4 text-nowrap">
              Web In Nigeria <img src="/svg/ngn.svg" alt="" />
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
    </main>
  );
}
