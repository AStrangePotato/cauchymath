import { Testimonial } from "@/types/testimonial";
import { Star } from "react-feather";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index}>
        {<Star className="fill-orange-300 text-orange-300" />}
      </span>,
    );
  }

  return (
    <div className="w-full">
      <div className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{content}”
        </p>

        <div className="w-full flex items-center space-x-1 -my-3">
          <h3 className="text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
            {name}
          </h3>
          <span className="text-body-color">|</span>
          <p className="text-sm text-body-color">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
