import React from "react";

const Image = ({ results }) => {
  return (
    <section className="overflow-hidden text-gray-900 dark:text-gray-100 my-10">
      <div className="flex flex-wrap justify-center items-center">
        {results?.map(({ image, link: { href, title } }, index) => {
          return (
            <a
              className="sm:p-3 p-5"
              href={href}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Image;
