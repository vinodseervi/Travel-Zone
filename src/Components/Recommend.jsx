import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import info4 from "../assets/info4.png";
import { useState } from "react";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "SWIFT DZIRE",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      place1: "Airport Transfer",
      price1: "Rs. 900",
      place2: "8 hr / 80 KM",
      price2: "Rs. 1,800",
      place3: "Full Day / 200 KM",
      price3: "Rs. 2,200",
      place4: "Outstation Run (Min.250KM/DAY)",
      price4: "Rs. 15 / KM",
    },
    {
      image: Destination2,
      title: "HONDA AMAZE",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      place1: "Airport Transfer",
      price1: "Rs. 1,000",
      place2: "8 hr / 80 KM",
      price2: "Rs. 2,000",
      place3: "Full Day / 200 KM",
      price3: "Rs. 2,400",
      place4: "Outstation Run (Min.250KM/DAY)",
      price4: "Rs. 15 / KM",
    },
    {
      image: Destination3,
      title: "MARUTI ERTIGA",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      place1: "Airport Transfer",
      price1: "Rs. 1,200",
      place2: "8 hr / 80 KM",
      price2: "Rs. 2,200",
      place3: "Full Day / 200 KM",
      price3: "Rs. 3,000",
      place4: "Outstation Run (Min.250KM/DAY)",
      price4: "Rs. 20 / KM",
    },
    {
      image: Destination4,
      title: "BOLERO NEO",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      place1: "Airport Transfer",
      price1: "Rs. 1,200",
      place2: "8 hr / 80 KM",
      price2: "Rs. 2,200",
      place3: "Full Day / 200 KM",
      price3: "Rs. 3,000",
      place4: "Outstation Run (Min.250KM/DAY)",
      price4: "Rs. 20 / KM",
    },
    {
      image: Destination5,
      title: "INNOVA CRYSTA",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      place1: "Airport Transfer",
      price1: "Rs. 1,400",
      place2: "8 hr / 80 KM",
      price2: "Rs. 2,400",
      place3: "Full Day / 200 KM",
      price3: "Rs. 3,600",
      place4: "Outstation Run (Min.250KM/DAY)",
      price4: "Rs. 18 / KM",
    },
    {
      image: Destination6,
      title: "TEMPO TRAVELLER",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      place1: "Airport Transfer",
      price1: "Rs. 2,500",
      place2: "8 hr / 80 KM",
      price2: "Rs. 4,000",
      place3: "Full Day / 200 KM",
      price3: "Rs. 5,000",
      place4: "Outstation Run (Min.250KM/DAY)",
      price4: "Rs. 25 / KM",
    },
  ];
  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];
  const [active, setActive] = useState(1);

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                key={index}
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination, index) => {
          return (
            <div key={index} className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              {/* <p>{destination.subTitle}</p> */}
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                  <img src={info4} alt="" />
                </div>
               {/* <h4>{destination.cost}</h4> */}
              </div>
              <div className="distance">
                <span>{destination.place1}</span>
                <span>{destination.price1}</span>
              </div>
              <div className="distance">
                <span>{destination.place2}</span>
                <span>{destination.price2}</span>
              </div>
              <div className="distance">
                <span>{destination.place3}</span>
                <span>{destination.price3}</span>
              </div><div className="distance">
                <span>{destination.place4}</span>
                <span>{destination.price4}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: white;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
