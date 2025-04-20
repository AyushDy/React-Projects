import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white px-30">
      <div className="py-10 flex justify-evenly">
        {/*Exclusive*/}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold my-5">Exclusive</h2>
          <h3 className="text-2xl font-medium my-3">Subscribe</h3>
          <p className="my-2">Get 10% off your first order</p>
          <div className="border-2 border-white flex rounded p-2">
            <input className="outline-0" type="text" placeholder="Enter your email" />
            <img className="hover:cursor-pointer" src="/footer/footer-send.svg" alt="send" />
          </div>
        </div>

        {/* Support */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-medium my-5">Support</h3>
          <p className="my-2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="my-2">exclusive@gmail.com</p>
          <p className="my-2">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-2xl font-medium my-5">Account</h3>
          <p className="my-2">My Account</p>
          <p className="my-2">Login/Register</p>
          <p className="my-2">Cart</p>
          <p className="my-2">Wishlist</p>
          <p className="my-2">Shop</p>
        </div>

        {/* Quick link */}
        <div>
        <h3 className="text-2xl font-medium my-5">Quick Link</h3>
          <p className="my-2">Privacy Policy</p>
          <p className="my-2">Terms Of Use</p>
          <p className="my-2">FAQ</p>
          <p className="my-2">Contact</p>
        </div>

        {/* Download App */}
        <div>
            <h3 className="text-2xl font-medium my-5">Download App</h3>
            <p className="text-sm font-medium my-1 text-gray-400">Save $3 with App New User Only</p>
            <img src="/footer/footer-qr.svg" alt="QR" />
            <div className="flex justify-between px-4 py-5">
                <img className="hover:cursor-pointer" src="/footer/facebook.svg" alt="facebook" />
                <img className="hover:cursor-pointer" src="/footer/twitter.svg" alt="twitter" />
                <img className="hover:cursor-pointer" src="/footer/insta.svg" alt="insta" />
                <img className="hover:cursor-pointer" src="/footer/linkedin.svg" alt="linkedIn" />
            </div>
        </div>
      </div>
      <div className="py-5 text-center text-lg text-gray-600">
        Copyright Canedy 2022. All right reserved
      </div>
    </div>
  );
};

export default Footer;
