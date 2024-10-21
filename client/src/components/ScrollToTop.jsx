import { BsArrowUp } from "react-icons/bs";
import ScrollToTop from "react-scroll-to-top";

const ScrollTop = () => {
  return (
    <ScrollToTop
      smooth
      component={
        <span className="flex justify-center text-2xl">
          <BsArrowUp />
        </span>
      }
    />
  );
};

export default ScrollTop;
