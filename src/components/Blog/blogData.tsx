import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Mastering Algebra: Essential Tips",
    paragraph:
      "Algebra doesn't have to be hard! Here are some simple tips to help you understand key concepts and boost your grades.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Cauchy Math",
      image: "/images/blog/author.png",
      designation: "Math Tutor",
    },
    tags: ["algebra", "tutoring"],
    publishDate: "2024",
  },
];

export default blogData;
