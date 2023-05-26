import React from "react";

function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="about-img ps-5">
                <img
                  src="https://sf.tac-cdn.net/images/v2/products/large/P-353.jpg?auto=webp&quality=70&width=350"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 content">
              <h3 className="pt-4" >Best Online Florist - Order Flowers Online Delivery</h3>
              <p className="fst-italic">
                20% Off All Items - Same Day Delivery - Fast, Easy & Affordable.
                Enjoy Flowers Delivered Today! Send Same Day Flowers For Every
                Occasion Same Day Delivery · 20% Off All Items · From $19.99
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> Best Selling Flowers,
                  Balloons & Plants.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Modern Orange Roses
                  Bouquet
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Pink Rose White Lily
                  Bouquet
                </li>
              </ul>
              <p>
                Most popular flowers for delivery today to celebrate today's
                special occasion. These popular types of flowers & flower
                arrangements are the perfect gift for birthdays, anniversaries
                or just because. Popular flower types for flower delivery by a
                florist, every day
              </p>
            </div>
          </div>
        </div>
      </section>
      <h6 className='text-end px-5'>Devloped By: Shah Nawaz Unar</h6>
    </>
  );
}

export default About;
