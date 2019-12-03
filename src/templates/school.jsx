import React, { useReducer } from "react";
import { graphql } from "gatsby";
import SchoolCard from "../components/school-card/school-card";
import SchoolSuggest from "../components/school-suggest/school-suggest";
import Carousel from "react-multi-carousel";
import WdrPlayer from "../components/video/video.jsx";
import "react-multi-carousel/lib/styles.css";
import Tour from "reactour";
export const query = graphql`
  query($schoolnumber: Int) {
    schulfinderRecordsJson(num: { eq: $schoolnumber }) {
      id
      abi
      c_abi
      c_changed
      c_changed__7_9
      c_fachabi
      c_haupt
      c_haupt_10
      c_inclusion
      c_migration
      c_new
      c_real
      c_repeat
      c_students
      c_students_per_fulltime
      c_students_per_teacher
      c_without_grade
      changed
      changed_7_9
      fachabi
      form
      fulltime
      graduates
      haupt
      haupt_10
      inclusion
      migration
      name
      new
      num
      number_to_compare
      parttime
      real
      repeat
      status
      students
      students_per_fulltime
      students_per_teacher
      teacher
      typ
      without_grade
    }
  }
`;
var schoolcounter = 0;
const useSchoolList = () => {
  const [schoolList = {}, dispatch] = useReducer((state = {}, action) => {
    const max_schools = 5;
    switch (action.type) {
      case "add":
        if (schoolcounter > max_schools) {
          alert(
            "Es können maximal " +
              max_schools +
              " Schulen verglichen werden. Bitte löschen Sie zuvor eine Schule."
          );
          return state;
        }
        if (action.payload.num in state) {
          return state;
        }
        return {
          ...state,
          [action.payload.num]: action.payload
        };
      case "del":
        const { [action.payload]: _, ...rest } = state;
        return rest;
      default:
        return state;
    }
  });

  return {
    addSchool: async id => {
      const res = await fetch(`/page-data/school/${id}/page-data.json`);
      if (res.ok) {
        const school = await res.json();
        dispatch({
          type: "add",
          payload: school.result.data.schulfinderRecordsJson
        });
      }
    },
    delSchool: id => {
      dispatch({
        type: "del",
        payload: id
      });
    },
    closeTour: () => {
      document.getElementById("___reactour").style.display = "none";
    },
    schoolList: Object.values(schoolList)
  };
};

const SchoolTemplate = ({ data, pageContext }) => {
  const { schoolList = [], addSchool, delSchool, closeTour } = useSchoolList();
  schoolcounter = schoolList.length + 1;
  var idx = 0;
  var firstVisit = localStorage.getItem("first-visit2");
  var steps = [];
  if (typeof firstVisit === "undefined" || firstVisit == null) {
    steps = [
      {
        selector: "#step0",
        content: <>Hier steht etwas über den 1. STep</>
      },
      {
        selector: "#step0",
        content: (
          <>
            STEP 1 der erste Schritt
            <WdrPlayer
              videoSrc="https://wdradaptiv-vh.akamaihd.net/i/medp/ondemand/weltweit/fsk0/184/1841840/,1841840_21642113,1841840_21642108,1841840_21642110,1841840_21642109,1841840_21642112,1841840_21642111,.mp4.csmil/master.m3u8"
              videoPoster="https://www1.wdr.de/fernsehen/abenteuer-erde/kuestenotter-100~_v-gseapremiumxl.jpg"
            />
          </>
        )
      },
      {
        selector: "#step1",
        content: <>Hier steht etwas über den 2. STep</>
      },
      {
        selector: "#step1",
        content: (
          <>
            STEP 2 Hier kommt eine Erkläreung
            <WdrPlayer
              videoSrc="//wdradaptiv-vh.akamaihd.net/i/medp/ondemand/weltweit/fsk0/205/2050365/,2050365_25107644,2050365_25107640,2050365_25107642,2050365_25107641,2050365_25107643,.mp4.csmil/master.m3u8"
              videoPoster="https://www1.wdr.de/fernsehen/abenteuer-erde/kuestenotter-100~_v-gseapremiumxl.jpg"
            />
          </>
        )
      },

      {
        selector: "#step2",
        content: <>Hier steht etwas über den 3. STep</>
      },
      {
        selector: "#step2",
        content: (
          <>
            STEP 3
            <WdrPlayer
              videoSrc="//wdradaptiv-vh.akamaihd.net/i/medp/ondemand/weltweit/fsk0/205/2056884/,2056884_25217709,2056884_25217704,2056884_25217706,2056884_25217705,2056884_25217708,2056884_25217707,.mp4.csmil/master.m3u8"
              videoPoster="https://www1.wdr.de/fernsehen/abenteuer-erde/kuestenotter-100~_v-gseapremiumxl.jpg"
            />
          </>
        )
      },
      {
        selector: "#step3",
        content: <>Hier steht etwas über den 4. STep</>
      },
      {
        selector: "#step3",
        content: (
          <>
            STEP 4
            <WdrPlayer
              videoSrc="//wdradaptiv-vh.akamaihd.net/i/medp/ondemand/weltweit/fsk0/200/2001360/,2001360_24257844,2001360_24257839,2001360_24257841,2001360_24257840,2001360_24257843,2001360_24257842,.mp4.csmil/master.m3u8"
              videoPoster="https://www1.wdr.de/fernsehen/abenteuer-erde/kuestenotter-100~_v-gseapremiumxl.jpg"
            />
          </>
        )
      },

      {
        selector: "#step4",
        content: <>Hier steht etwas über den 5. STep</>
      },
      {
        selector: "#step4",
        content: (
          <>
            STEP 5
            <WdrPlayer
              videoSrc="//wdradaptiv-vh.akamaihd.net/i/medp/ondemand/weltweit/fsk0/205/2058230/,2058230_25240679,2058230_25240674,2058230_25240676,2058230_25240675,2058230_25240678,2058230_25240677,.mp4.csmil/master.m3u8"
              videoPoster="https://www1.wdr.de/fernsehen/abenteuer-erde/kuestenotter-100~_v-gseapremiumxl.jpg"
            />
          </>
        )
      }
    ];
    ////wdradaptiv-vh.akamaihd.net/i/medp/ondemand/weltweit/fsk0/205/2058230/,2058230_25240679,2058230_25240674,2058230_25240676,2058230_25240675,2058230_25240678,2058230_25240677,.mp4.csmil/master.m3u8
    ////wdradaptiv-vh.akamaihd.net/i/medp/ondemand/weltweit/fsk0/200/2001360/,2001360_24257844,2001360_24257839,2001360_24257841,2001360_24257840,2001360_24257843,2001360_24257842,.mp4.csmil/master.m3u8
  }
  localStorage.setItem("first-visit", 1);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1440, min: 1004 },
      items: 3,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 1004, min: 768 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 768, min: 480 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  return (
    <>
      <Tour onRequestClose={closeTour} isOpen={true} steps={steps} />
      <SchoolSuggest addSchoolCard={addSchool} />

      <div className={"cards cards_amount_" + schoolList.length}>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={schoolcounter > 1}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <SchoolCard
            delSchoolCard={delSchool}
            idx={idx}
            data={data.schulfinderRecordsJson}
            origin={1}
          />
          {schoolList.map(school => (
            <SchoolCard
              data={school}
              origin={0}
              idx={idx++}
              delSchoolCard={delSchool}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default SchoolTemplate;
