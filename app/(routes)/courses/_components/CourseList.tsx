"use client";
import axios from "axios";
import { index } from "drizzle-orm/gel-core";
import { ChartNoAxesColumnIncreasingIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Course = {
  id: number;
  courseId: number;
  title: string;
  desc: string;
  level: string;
  bannerImage: string;
  tag: string;
};

const CourseList = () => {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetAllCourses();
  }, []);

  const GetAllCourses = async () => {
    setLoading(true);
    const result = await axios.get("/api/courses");
    setCourseList(result?.data);
    setLoading(false);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-3">
      {courseList.map((course, index) => (
        <div key={index} className="border-4 rounded-xl bg-zinc-900">
          <Image
            src={course?.bannerImage?.trimEnd()}
            alt={course?.title}
            width={400}
            height={400}
            className="w-full h-50 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="font-game text-2xl ">{course?.title}</h2>
            <p className="font-game  text-xl text-gray-400  line-clamp-2 ">{course?.desc}</p>
            <h2 className="bg-zinc-800 flex font-game gap-2 p-1 mt-3  px-4 rounded-2xl  items-center text-sm w-max">
              <ChartNoAxesColumnIncreasingIcon className="h-4 w-4"/> {course?.level}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
