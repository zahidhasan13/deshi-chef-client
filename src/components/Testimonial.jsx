import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
const Testimonial = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-4 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Testimonials
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
      </div>
      <AutoplaySlider
        className="h-[400px]"
        organicArrows={true}
        bullets={false}
        mobileTouch={true}
        play={true}
        interval={3000}
      >
        <div className="bg-white w-full">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900">
                Speechless with how easy this was to integrate
              </h3>
              <p className="my-4">
                I recently got my hands on Flowbite Pro, and holy crap, I am
                speechless with how easy this was to integrate within my
                application. Most templates are a pain, code is scattered, and
                near impossible to theme.
              </p>
              <p className="my-4">
                Flowbite has code in one place and I am not joking when I say it
                took me a matter of minutes to copy the code, customise it and
                integrate within a Laravel + Vue application.
              </p>
              <p className="my-4">
                If you care for your time, I hands down would go with this.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-gray-700">Bonnie Green</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="bg-white w-full">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900">
                Speechless with how easy this was to integrate
              </h3>
              <p className="my-4">
                I recently got my hands on Flowbite Pro, and holy crap, I am
                speechless with how easy this was to integrate within my
                application. Most templates are a pain, code is scattered, and
                near impossible to theme.
              </p>
              <p className="my-4">
                Flowbite has code in one place and I am not joking when I say it
                took me a matter of minutes to copy the code, customise it and
                integrate within a Laravel + Vue application.
              </p>
              <p className="my-4">
                If you care for your time, I hands down would go with this.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-gray-700">Bonnie Green</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="bg-white w-full">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900">
                Speechless with how easy this was to integrate
              </h3>
              <p className="my-4">
                I recently got my hands on Flowbite Pro, and holy crap, I am
                speechless with how easy this was to integrate within my
                application. Most templates are a pain, code is scattered, and
                near impossible to theme.
              </p>
              <p className="my-4">
                Flowbite has code in one place and I am not joking when I say it
                took me a matter of minutes to copy the code, customise it and
                integrate within a Laravel + Vue application.
              </p>
              <p className="my-4">
                If you care for your time, I hands down would go with this.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-gray-700">Bonnie Green</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </AutoplaySlider>
    </>
  );
};

export default Testimonial;
