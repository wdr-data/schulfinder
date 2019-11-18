import React, { useReducer } from "react";
import { graphql } from "gatsby";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import SchoolCard from "../components/school-card/school-card";
import SchoolSuggest from "../components/school-suggest/school-suggest";
import 'pure-react-carousel/dist/react-carousel.es.css';
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

export const useSchoolList = () => {
  const [schoolList = {}, dispatch] = useReducer((state = {}, action) => {
    switch (action.type) {
      case "add":
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
    }
    return state;
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
    schoolList: Object.values(schoolList)
  };
};

const SchoolTemplate = ({ data, pageContext }) => {
  const { schoolList = [], addSchool, delSchool } = useSchoolList();
  var idx = 0;
  return (
    <>
    
    
    <div className={"cards cards_amount_"+schoolList.length}>

    <CarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={500}
        totalSlides={schoolList.length+1} 
      >
 
      <Slider>
       <Slide index={idx++}><SchoolCard  delSchoolCard={delSchool} idx={idx}  data={data.schulfinderRecordsJson} /></Slide>
     
      
      {
        schoolList.map(school => (
          <Slide index={idx++}><SchoolCard data={school} idx={idx} delSchoolCard={delSchool} /></Slide>
      ))
      
      }
       </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
   </CarouselProvider>
   </div>
 
   <SchoolSuggest addSchoolCard={addSchool}  />
   
 </>
  );
}
export default SchoolTemplate;
