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
      image: "/images/blog/author-01.png",
      designation: "Math Tutor",
    },
    tags: ["algebra", "tutoring"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "5 Techniques to Ace Geometry",
    paragraph:
      "Geometry can be fun! Check out these five techniques that can help you tackle geometry problems with confidence.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Cauchy Math",
      image: "/images/blog/author-02.png",
      designation: "Math Tutor",
    },
    tags: ["geometry", "skills"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Calculus Made Easy: A Quick Guide",
    paragraph:
      "Calculus can seem tricky, but it’s manageable! This guide breaks down the basics to help you get started.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Cauchy Math",
      image: "/images/blog/author-03.png",
      designation: "Math Tutor",
    },
    tags: ["calculus", "beginner"],
    publishDate: "2025",
  },
];

export default blogData;
