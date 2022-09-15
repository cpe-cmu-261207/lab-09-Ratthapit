import react from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import ProfilePic from "./Data/profilePic";
import Card1 from "./indexData/1stCard";
import Card2 from "./indexData/2ndCard";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <br />
        <br />

        <div className="d-flex justify-content-center gap-5 mx-auto">
          <span>
            <ProfilePic />
          </span>
          <span>
            <br /> <h2>Pimpitcha Kanitpanyajaroen</h2>
            <div className="mx-auto" style={{ maxWidth: " 400px" }}>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, my name is Pimpitcha. I am a
                2nd year student in faculty of Engineering at Chiangmai
                University.
              </span>
              <br />
              <span>
                I love programming. I'm interested in play games and one day I
                will create it by myself!
              </span>
            </div>
          </span>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div align="center">
          <h3>My Skills</h3>
        </div>

        <br />

        <div align="center">
          <Card1 />

          <br />
          <Card2 />
          <br />
          <br />
          <br />
        </div>
      </div>
    </MainLayout>
  );
}
