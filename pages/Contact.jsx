import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import ProfilePic from "./Data/profilePic";
import ContactData from "./Data/contactData";

export default function contact() {
  return (
    <MainLayout>
      <div>
        <br />
        <div align="center">
          <h1>Contact me</h1>
        </div>

        <div className="d-flex justify-content-center gap-5 mx-auto">
          <span>
            <br />
            <br />
            <ProfilePic />
          </span>
          <span>
            <ContactData />
          </span>
        </div>

        <br />
      </div>
    </MainLayout>
  );
}
