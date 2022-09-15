import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import DesertRunner from "./Data/DesertRunner";
import LibraryProject from "./Data/LibraryProject";

export default function experience() {
  return (
    <MainLayout>
      <div align="center">
        <div>
          <br />
          <h1>Project Experience</h1>
          <br />
        </div>

        <br />

        <span>
          <div>
            <DesertRunner />
          </div>
          <br />
          <div>
            <LibraryProject />
          </div>
        </span>

        <br />
      </div>
    </MainLayout>
  );
}
