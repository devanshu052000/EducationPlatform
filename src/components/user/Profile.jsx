import React, { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const courses = useSelector((state) => state.userCourses);
  const [completedCourses, setCompletedCourses] = useState([]);

  const handleMarkAsCompleted = (courseId) => {
    setCompletedCourses((prevCompletedCourses) => [
      ...prevCompletedCourses,
      courseId,
    ]);
  };

  const isCourseCompleted = (courseId) => completedCourses.includes(courseId);

  return (
    <div className="bg-[#FAD000] px-[10%] py-[2%]">
      <p className="font-teko text-[50px]/[45px] max-sm:text-center max-sm:py-[5%]">Courses Enrolled</p>
      <ul className="my-[2%]">
        {courses.map((item, index) => {
          return (
            <li key={index} className="mb-10">
              <div className="bg-white sm:flex p-[1%] max-sm:py-[5%] rounded-tl-2xl rounded-br-2xl shadow-xl">
                <div className="sm:w-1/5 max-sm:flex max-sm:justify-center">
                  <img src={item.thumbnail} alt="thumbnail" className="rounded-tl-2xl rounded-br-2xl" />
                </div>
                <div className="sm:w-3/5 my-auto font-roboto pl-[2%] max-sm:text-center">
                  <p className="font-bold">{item.name}</p>
                  <p>By {item.instructor}</p>
                  <p>Due 30th January</p>
                  <progress className="mt-[10px]" value="60" max="100"></progress>
                </div>
                <div className="sm:w-1/5 flex items-center justify-center">
                  <button
                    onClick={() => handleMarkAsCompleted(item.id)}
                    disabled={isCourseCompleted(item.id)}
                    className="shadow-xl font-roboto bg-black text-[#FAD000] p-[5%]"
                  >
                    {isCourseCompleted(item.id)
                      ? "Completed"
                      : "Mark as Completed"}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profile;
