import react from "react";
import ProfilePic from "./profilePic";

export default function ContactData() {
  return (
    <span class="mx-auto" style={{ fontSize: "16px", lineHeight: " 43px" }}>
      <div>
        <br />
        <span class="fw-bold">Name : </span>
        <span>Pimpitcha Kanitpanyajaroen</span>
      </div>
      <div>
        <span class="fw-bold">Nickname : </span>
        <span>Pim</span>
      </div>
      <div>
        <span class="fw-bold">Adress : </span>
        <span>563 หมู่7 ถ.ลำปาง-แม่ทะ ต.พระบาท อ.เมือง จ.ลำปาง 52000 </span>
      </div>
      <div>
        <span class="fw-bold">Facebook : </span>
        <span>
          <a href="https://www.facebook.com/pimpitcha.kanitpanyajaroen">
            https://www.facebook.com/pimpitcha.kanitpanyajaroen
          </a>
        </span>
      </div>
      <div>
        <span class="fw-bold">Email : </span>
        <span>
          <a href="mailto:pimpitcha_kanitpanya@cmu.ac.th" target="_top">
            pimpitcha_kanitpanya@cmu.ac.th
          </a>
        </span>
      </div>
    </span>
  );
}
