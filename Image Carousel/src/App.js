import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const images = [
  "https://cdn.leonardo.ai/users/1b1666a6-7f92-4c3b-913b-ed663b2d102e/generations/a1373289-9487-4e7b-9f22-6c143f4c905a/variations/Default_Create_an_image_of_a_young_man_sitting_behind_his_lapt_3_a1373289-9487-4e7b-9f22-6c143f4c905a_1.jpg?w=512",
  "https://cdn.leonardo.ai/users/ca25163c-0be7-4ac4-abd3-ceab5b72bf57/generations/f249f070-1cda-4b52-931b-de5ff4b9b146/variations/Default_Create_cool_Asian_Design_red_white_black_with_tress_an_1_f249f070-1cda-4b52-931b-de5ff4b9b146_1.jpg?w=512",
  "https://cdn.leonardo.ai/users/bae6981c-a49f-4f25-bf4b-68917ce10e78/generations/07f24877-5dde-4473-96bd-db9e9b97c759/variations/Default_Pirate_ship_sailing_into_a_bioluminescence_sea_with_a_1_07f24877-5dde-4473-96bd-db9e9b97c759_1.jpg?w=512",
  "https://cdn.leonardo.ai/users/ea69d84f-1b4b-4522-90b4-ade62ab452d8/generations/ea10de49-0b26-4b3b-a0dc-29b7c61a0c23/variations/Default_Backdrop_pantone_colors_navy_blue_purple_pink_glowy_ed_1_ea10de49-0b26-4b3b-a0dc-29b7c61a0c23_1.jpg?w=512",
];

function App() {
  const [current, setCurrent] = useState(0);

  function nextPic() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }
  function prevPic() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div className="body" style={styles.body}>
      <h1 style={styles.h1}>Project 1: carousel</h1>
      <div className="carousel" style={styles.carousel}>
        <div className="leftslide" style={styles.pointcursor} onClick={prevPic}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            beat
            style={{ color: "#ffffff", width: "40px" }}
          />
        </div>

        {images.map(
          (image, index) =>
            current === index && (
              <div key={image}>
                <img src={image} style={styles.img} />
              </div>
            )
        )}

        <div
          className="rightslide"
          style={styles.pointcursor}
          onClick={nextPic}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            beat
            style={{ color: "#ffffff", width: "40px" }}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  h1: {
    margin: 0,
    color: "White",
    fontFamily: "Arial",
    paddingTop: "20px",
  },

  body: {
    width: "100%",
    height: "100vh",
    backgroundColor: "black",
    textAlign: "center",
  },
  pointcursor: {
    backgroungColor: "black",
    border: "none",
    fontSize: "50px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  img: {
    borderRadius: "10px",
    height: "500px",
    width: "300px",
  },
  carousel: {
    display: "flex",
    placeItems: "center",
    justifyContent: "center",
    paddingTop: "90px",
  },
};

export default App;
