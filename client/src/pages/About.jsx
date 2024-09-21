import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about_img"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Izorish, where fashion is forever in style. At Izorish,
            we believe that clothing is more than just fabric—it's a way to
            express who you are. That's why we bring you the latest trends,
            classic essentials, and unique pieces that help you stand out.
          </p>
          <p>
            Our mission is simple: to make high-quality fashion accessible to
            everyone. We carefully curate our collection to ensure every item
            reflects our commitment to style, comfort, and affordability.
            Whether you're dressing up for a special occasion or looking for
            everyday essentials, Izorish has something for you.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Izorish, our mission is to make high-quality fashion accessible
            to everyone. We believe in empowering people to express their unique
            style with clothing that's both trendy and timeless. Through careful
            curation and a commitment to affordability, we aim to be your go-to
            destination for fashion that makes you feel confident every day.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We ensure every piece of clothing is meticulously selected and
            inspected for craftsmanship, durability, and comfort, delivering
            exceptional quality and lasting satisfaction.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Covenience:</b>
          <p className="text-gray-600">
            We prioritize your shopping convenience with easy online browsing,
            secure checkout, fast shipping, simple returns, and responsive
            support, ensuring a smooth and effortless experience.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            We provide exceptional customer service with personalized support,
            prompt assistance, and a commitment to exceeding your expectations
            from start to finish.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
