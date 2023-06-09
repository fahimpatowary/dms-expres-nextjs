import BlogRightSide from "@/components/blogs/blogRightSide";
import HeaderCom from "@/lib/header";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import React from "react";

const TramsAndConditons = [
  {
    id: 1,
    title: "Acceptance of our Terms",
    text: "JAMIDARI has been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 2,
    title: "Acceptance of our Terms",
    text: "JAMIDARI has been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 3,
    title: "Acceptance of our Terms",
    text: "JAMIDARI has been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 4,
    title: "Acceptance of our Terms",
    text: "JAMIDARI has been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <HeaderCom title="PrivacyPolicy" />

      <main>
        <Navber />

        <section className="MainBodyTop HerosSection sectionMarginBot pt-lg-3">
          <div className="container mt-lg-2">
            <div className="row">
              <div className="col-md-8 col-lg-9 AboutUsLeft TermsAndCond">
                {TramsAndConditons.map((item) => (
                  <div className="AboutUsPerDiv" key={item.id}>
                    <h5>{item.title}</h5>

                    <p>{item.text}</p>
                  </div>
                ))}
              </div>

              <BlogRightSide />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
