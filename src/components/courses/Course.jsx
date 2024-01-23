import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";
import { Link } from "react-router-dom";
import bgImg from "../../assets/bgImage.png";

const Course = () => {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((res) => {
        dispatch(actions.setCourses(res));
        setFilteredData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    const filtered = courses.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.instructor.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleShow = (x) => {
    const product = filteredData.filter((item, index) => index === x);
    dispatch(actions.showCourse(product[0]));
  };

  return (
    <div className="bg-[#FAD000]">
      <div className="sm:flex px-[10%] py-[5%] sm:py-[2%]">
        <div className="sm:w-1/2 sm:my-auto max-sm:text-center">
          <p className="font-teko text-[50px]/[45px] lg:text-[100px]/[90px]">Find Yourself <br/>the Best Course</p>
          <p className="font-roboto lg:text-xl mt-[2%] mb-[10%] font-bold">From the Experts Around the World</p>
          <div className="flex max-sm:justify-center">
            <input
              onChange={handleSearch}
              name="search"
              value={search}
              placeholder="Enter Course/Instructor Name"
              className="w-1/2 px-[5%] py-[2%] rounded-tl-2xl rounded-br-2xl shadow-xl font-roboto text-black"
            />
            <button
              className="w-1/4 bg-black text-[#FAD000] ml-[10px] rounded-tl-2xl rounded-br-2xl shadow-xl font-roboto"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </div>
        <div className="sm:w-1/2">
          <img src={bgImg} alt="Hero Banner" />
        </div>
      </div>
      <div className="px-[10%] py-[2%]">
        <ul className="max-h-[500px] overflow-auto no-scrollbar">
          {filteredData.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => handleShow(index)}
                className="mb-10"
              >
                <Link to={`/course/${item.path}`}>
                  <div className="bg-white flex p-[1%] rounded-tl-2xl rounded-br-2xl shadow-xl">
                    <div className="w-1/5">
                      <img src={item.thumbnail} alt="thumbnail" className="rounded-tl-2xl rounded-br-2xl" />
                    </div>
                    <div className="w-4/5 my-auto font-roboto pl-[2%]">
                      <p className="font-bold">{item.name}</p>
                      <p>{item.description}</p>
                      <p>By {item.instructor}</p>
                      <p className="mt-[10px]">
                        {item.duration} | {item.location}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Course;
