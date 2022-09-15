import react from "react";

export default function Card2() {
  return (
    <div>
      <div class="card mb-3" style={{ maxWidth: " 800px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/306773389_802559497828294_6851948598124413477_n.jpg?stp=dst-jpg_p960x960&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHqehE7bcglxbFdq-wd_kluYmAJyLV7AE1iYAnItXsATfIdRsmqSpKBgsK5JdwuzBrXPcFbE22dk4pBhvfvHDT_&_nc_ohc=1dyXbImCb_8AX_u21dN&_nc_ht=scontent-sin6-1.xx&oh=00_AT_ptV2cIdrucJl734YjIUjhvdfMwyy_Y9Bfe66jzgXgpw&oe=63286DDF"
              class="img-fluid rounded-start"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body" align="left">
              <h5 class="card-title">Drawing</h5>
              <p class="card-text">
                Drawing is one of my favorite hobbies. Drawing help me to export
                picture in my head to shere to other people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
