import react from "react";

export default function Card1() {
  return (
    <div>
      <div class="card mb-3" style={{ maxWidth: " 800px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/306948582_802559281161649_5033288270926735013_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEkfK3BSK-owiYMkFiDl9j4QOAVyO1yogZA4BXI7XKiBjoQ2h4LagxqwOOMKu4pGHXftidLV8D_dMr-EZIWzorF&_nc_ohc=EWGOgxuzft8AX9oATU2&_nc_ht=scontent.fbkk10-1.fna&oh=00_AT8gLbXj2te7r38Qbmq5qGR4KDHVS16pBnXKYTEgZrpRxg&oe=6328D9C0"
              class="img-fluid rounded-start"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body" align="left">
              <h5 class="card-title">Programing</h5>
              <p class="card-text">
                Coding is very fun! I can coding in C and C++ languages. And
                now, I'm learning in html and Java too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
