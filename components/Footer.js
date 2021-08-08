import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luke</p>
      </div>

      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real estate</p>
        <p>See Authorized Retailers</p>
        <p>Join Now</p>
        <p>Press Releases</p>
      </div>

      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Lean More</p>
        <p>Product Support</p>
        <p>Newsletter</p>
        <p>Bestsellers</p>
        <p>Git Cards</p>
      </div>

      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi!</p>
        <p>Easter Eggs</p>
        <p>For the Win!</p>
      </div>
    </div>
  );
};

export default Footer;
