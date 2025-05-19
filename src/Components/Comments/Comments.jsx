import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchComments } from "../../Redux/Comments/CommentsSlice";
import Comment from "./Comment";

function Comments() {
  const nazar = useSelector((state) => state.comment.comment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  console.log("Nazar: ", nazar); // دیباگ: بررسی مقدار nazar

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed:500
};


  return (
    <div className="slider-container pb-5">
      <Slider {...settings}>
        {nazar?.map((elem)=>{
          return <Comment elem={elem} key={elem.id}/>
        })}
      </Slider>
    </div>
  );
}

export default Comments;
