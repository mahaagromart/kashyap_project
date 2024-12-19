import React from 'react';

const FeatureSection = () => {
  return (
    <section className="flex flex-col mt-20 px-5">
      <p className="font-semibold text-2xl md:text-3xl text-center text-dark-green">
        Our Outstanding Achievements
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 place-items-center w-full mx-auto max-w-7xl">
        {/* Card 1 */}
        <div className="flex flex-col justify-center items-center bg-[#D8F5E2] h-[150px] sm:h-[180px] md:h-[200px] w-full max-w-[280px] rounded-lg shadow-md">
          <div className="flex flex-row justify-center items-center">
            <svg
              className="w-[35px] md:w-[50px] h-[35px] md:h-[50px]"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.37 18.432c0 3.058-.906 5.862-2.466 8.203a14.728 14.728 0 0 1-10.079 6.367c-.717.127-1.455.19-2.214.19-.759 0-1.497-.063-2.214-.19a14.728 14.728 0 0 1-10.078-6.368 14.692 14.692 0 0 1-2.467-8.202c0-8.16 6.6-14.76 14.76-14.76s14.759 6.6 14.759 14.76Z"
                stroke="#4CAF50"
                strokeWidth="3.473"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-bold text-3xl md:text-4xl leading-9 text-primary ml-2">75K+</p>
          </div>
          <p className="font-medium text-sm md:text-lg mt-4 text-center text-dark-green">
            Expert Chat &amp; Call Minutes
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center items-center bg-[#D8F5E2] h-[150px] sm:h-[180px] md:h-[200px] w-full max-w-[280px] rounded-lg shadow-md">
          <div className="flex flex-row justify-center items-center">
            <svg
              className="w-[35px] md:w-[50px] h-[35px] md:h-[50px]"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.91 5.776 36.325 28.7a1.56 1.56 0 0 0-2.295 1.677l-9.86-5.982a1.53 1.53 0 0 0-1.59 0L13.33 40.3a1.544 1.544 0 0 1-2.295-1.677l2.609-11.296a1.56 1.56 0 0 0-.49-1.523l-8.705-7.593a1.544 1.544 0 0 1 .876-2.715l11.474-.992a1.544 1.544 0 0 0 1.287-.942L26.91 5.776Z"
                stroke="#4CAF50"
                strokeWidth="3.473"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-bold text-3xl md:text-4xl leading-9 text-primary ml-2">4.9</p>
          </div>
          <p className="font-medium text-sm md:text-lg mt-4 text-center text-dark-green">
            Average Expert Rating
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center items-center bg-[#D8F5E2] h-[150px] sm:h-[180px] md:h-[200px] w-full max-w-[280px] rounded-lg shadow-md">
          <div className="flex flex-row justify-center items-center">
            <svg
              className="w-[35px] md:w-[50px] h-[35px] md:h-[50px]"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.811 39.091c-1.775-1.775-.598-5.505-1.5-7.69-.939-2.255-4.377-4.089-4.377-6.5 0-2.413 3.438-4.246 4.376-6.502.903-2.182-.274-5.914 1.501-7.69 1.776-1.775 5.508-.598 7.69-1.5 2.266-.939 4.09-4.377 6.501-4.377 2.412 0 4.246 3.438 6.501 4.376 2.185.903 5.915-.274 7.69 1.501 1.776 1.776.598 5.506 1.502 7.69.937 2.266 4.376 4.09 4.376 6.501 0 2.412-3.439 4.246-4.377 6.501-.903 2.185.274 5.915-1.5 7.69-1.776 1.776-5.506.598-7.69 1.501-2.256.938-4.09 4.377-6.502 4.377s-4.245-3.439-6.5-4.377c-2.183-.903-5.915.275-7.69-1.5Z"
                stroke="#4CAF50"
                strokeWidth="3.473"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-bold text-3xl md:text-4xl leading-9 text-primary ml-2">8900+</p>
          </div>
          <p className="font-medium text-sm md:text-lg mt-4 text-center text-dark-green">
            Sessions Completed
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col justify-center items-center bg-[#D8F5E2] h-[150px] sm:h-[180px] md:h-[200px] w-full max-w-[280px] rounded-lg shadow-md">
          <div className="flex flex-row justify-center items-center">
            <svg
              className="w-[35px] md:w-[50px] h-[35px] md:h-[50px]"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.571 12.006 27.046 30.531l-7.719-7.718L5.434 36.706"
                stroke="#4CAF50"
                strokeWidth="4.341"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-bold text-3xl md:text-4xl leading-9 text-primary ml-2">1.5M+</p>
          </div>
          <p className="font-medium text-sm md:text-lg mt-4 text-center text-dark-green">
            App Downloads
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
