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
            Testi<span className="text-green-500">monials</span>
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
      </div>
      <AutoplaySlider
        className="h-[300px]"
        organicArrows={true}
        bullets={false}
        mobileTouch={true}
        play={true}
        interval={3000}
      >
        <div className="bg-white w-full">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <p className="my-4">
              I have been amazed by the variety of recipes on Recipe Website. As a food blogger, I am always looking for inspiration, and this site has been a goldmine of creative dishes that my readers love. Thank you for making my content more exciting!
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-gray-700">Sarah Martinez</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Food Blogger
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="bg-white w-full">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <p className="my-4">
              Recipe Website has transformed the way I cook at home. The diverse range of recipes and easy-to-follow instructions have helped me improve my culinary skills.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-gray-700">Alice Johnson</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Home Cook Enthusiast
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="bg-white w-full">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <p className="my-4">
              I was always intimidated by cooking, but Recipe Website changed that. The step-by-step guides and beginner-friendly recipes gave me the confidence to start experimenting in the kitchen. Now, I look forward to trying new recipes every week!
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-gray-700">Emily Turner</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                New Cook
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
