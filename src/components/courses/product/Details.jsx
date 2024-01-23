import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../store";

const Details = () => {
  const course = useSelector((state) => state.selectedCourse);
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);

  const handleClick = () => {
    dispatch(actions.enrollCourse(course));
  };

  const handleTab = () => {
    setTab(!tab);
  };

  return (
    <div className="bg-[#FAD000] px-[10%] py-[2%]">
      <div className="sm:flex">
        <div className="sm:w-1/5 max-sm:my-[5%]">
          <img src={course.thumbnail} alt="thumbnail" className="w-full" />
        </div>
        <div className="sm:w-3/5 font-roboto sm:pl-[2%] max-sm:text-center max-sm:my-[10%]">
          <p className="font-teko text-[37.5px]/[35px] lg:text-[75px]/[70px]">{course.name}</p>
          <p className="lg:text-lg mb-[5px]">{course.description}</p>
          <p>By {course.instructor}</p>
          <p>Enrollment: {course.enrollmentStatus}</p>
          <p>{course.duration} | {course.location} | {course.schedule}</p>
        </div>
        <div className="sm:w-1/5 flex items-center justify-center max-sm:my-[5%]">
          <button onClick={handleClick} className="p-[5%] bg-black text-[#FAD000] shadow-xl">Enroll Now</button>
        </div>
      </div>
      <div className="max-sm:my-[5%] my-[3%]">
        <p className="font-roboto font-bold text-3xl max-sm:my-[5%] my-[2%]">Pre-requisites</p>
        <ul className="pl-[2%] max-sm:mb-[5%]">
          {course.prerequisites.map((item, index) => {
            return <li key={index} className="font-roboto mb-[1%]">{index+1}. {item}</li>;
          })}
        </ul>
        <button className="w-full text-left font-roboto font-bold text-3xl mt-[2%]" onClick={handleTab}>
          Syllabus {tab ? "v" : ">"}
        </button>
        <ul className={`${tab ? "block" : "hidden"} pl-[2%]`}>
          {course.syllabus.map((item, index) => {
            return (
              <div key={index} className="sm:flex max-sm:my-[5%] my-[2%]">
                <div className="font-roboto font-bold text-3xl my-auto">Week {item.week}</div>
                <div className="sm:pl-[2%] font-roboto max-sm:my-[2%]">
                  <p className="font-bold">{item.topic}</p>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Details;
