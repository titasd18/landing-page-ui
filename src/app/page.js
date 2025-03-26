"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";
import HeroImage from "../../public/images/hero-image.png";
import Playstore from "../../public/images/playstore.svg";
import Appstore from "../../public/images/appstore.svg";
import Fivestar from "../../public/images/fivestar.svg";
import Fourstar from "../../public/images/fourstar.svg";
import Faqone from "../../public/images/faq-one.png";
import Button from "@/component/Button";
import TransferYourBalances from "../../public/images/TransferYourBalances.svg";
import RequestaPayment from "../../public/images/RequestaPayment.svg";
import ReceivingPayments from "../../public/images/ReceivingPayments.svg";
import WithdrawtoYourBank from "../../public/images/WithdrawtoYourBank.svg";
import InstallOurTheApp from "../../public/images/InstallOurTheApp.svg";
import SetUpYourAccount from "../../public/images/SetUpYourAccount.svg";
import SecurePayments from "../../public/images/SecurePayments.svg";
import arrowFirst from "../../public/images/arrowFirst.svg";
import ANewGlobalPaymentSystem from "../../public/images/ANewGlobalPaymentSystem.svg";
import YourMoneyArrivesInstantly from "../../public/images/YourMoneyArrivesInstantly.svg";
import PaymentFasterThanOthers from "../../public/images/PaymentFasterThanOthers.svg";
import faqtwo from "../../public/images/faqtwo.png";
import FaqItem from "@/component/FaqItem";
export default function Home() {
  return (
    <>
      <header className="bg-white">
        <div className="container">
          <div className="flex items-center py-5 justify-between">
            <Link href={"/"}>
              <Image src={Logo} alt="logo" width={100} height={100} />
            </Link>
            <nav>
              <ul className="flex gap-10">
                <li>
                  <Link className="text-[#008AFF]" href={"/"}>
                    Start
                  </Link>
                </li>
                <li>
                  <Link className="text-[#222D39]" href={"/"}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="text-[#222D39]" href={"/"}>
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link className="text-[#222D39]" href={"/"}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="text-[#222D39]" href={"/"}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <Button
              text={
                <span className="font-semibold flex gap-1">
                  Download Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                  </svg>
                </span>
              }
            />
          </div>
        </div>
      </header>
      <section className="bg-[#F7F9FC]">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-1/2">
              <p className="text-[#008AFF] flex text-lg gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
                100% Secure Payments
              </p>
              <h1 className="text-4xl text-[#222D39] leading-[1.25] mt-2 font-medium">
                Make Online Payment
                <br /> Easily And Increase
                <br /> Your Business
              </h1>
              <p className="text-[#8492A7] mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendis varius enim in eros elementum tristique.
              </p>
              <div className="flex gap-3 mt-4">
                <div>
                  <Image src={Playstore} alt="playstore" className="max-w-36" />
                  <div className="inline-flex items-center gap-2 text-[#222D39] mt-5">
                    <Image src={Fivestar} alt="Five Star Rsting" /> (4.9)
                  </div>
                </div>
                <div>
                  <Image src={Appstore} alt="appstore" className="max-w-32" />
                  <div className="inline-flex items-center gap-2 text-[#222D39] mt-5">
                    <Image src={Fourstar} alt="Four Star Rsting" /> (4.5)
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <Image src={HeroImage} alt="logo" className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container">
          <div className="flex gap-4 items-center border-b pb-20">
            <div className="w-1/2 bg-no-repeat bg-contain bg-center">
              <div className="w-96 mx-auto flex items-center justify-center relative">
                <Image
                  src={Faqone}
                  alt="main"
                  className="h-full w-full relative z-[1]"
                />
              </div>
            </div>
            <div className="w-1/2">
              <p className="text-[#008AFF] text-lg">Great Features</p>
              <h2 className="text-3xl text-[#222D39] mt-5">
                What Make’s Us Special
              </h2>
              <div className="flex gap-5 flex-wrap mt-10">
                <div className="max-w-[46%]">
                  <Image
                    src={TransferYourBalances}
                    alt="Transfer Your Balances"
                    className="h-12 w-12"
                  />
                  <h4 className="text-lg text-[#222D39] mt-5">
                    Transfer Your Balances
                  </h4>
                  <p className="mt-2 text-[#8492A7] text-sm">
                    Lorem ipsum dolor sit a Captivate your guests with seamls,
                    browsing experience across all devices.
                  </p>
                </div>
                <div className="max-w-[46%]">
                  <Image
                    src={RequestaPayment}
                    alt="Transfer Your Balances"
                    className="h-12 w-12"
                  />
                  <h4 className="text-lg text-[#222D39] mt-5">
                    Request a Payment
                  </h4>
                  <p className="mt-2 text-[#8492A7] text-sm">
                    Lorem ipsum dolor sit a Captivate your guests with seamls,
                    browsing experience across all devices.
                  </p>
                </div>
                <div className="max-w-[46%]">
                  <Image
                    src={ReceivingPayments}
                    alt="Transfer Your Balances"
                    className="h-12 w-12"
                  />
                  <h4 className="text-lg text-[#222D39] mt-5">
                    Receiving Payments
                  </h4>
                  <p className="mt-2 text-[#8492A7] text-sm">
                    Lorem ipsum dolor sit a Captivate your guests with seamls,
                    browsing experience across all devices.
                  </p>
                </div>
                <div className="max-w-[46%]">
                  <Image
                    src={WithdrawtoYourBank}
                    alt="Transfer Your Balances"
                    className="h-12 w-12"
                  />
                  <h4 className="text-lg text-[#222D39] mt-5">
                    Withdraw to Your Bank
                  </h4>
                  <p className="mt-2 text-[#8492A7] text-sm">
                    Lorem ipsum dolor sit a Captivate your guests with seamls,
                    browsing experience across all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F9FC] py-20">
        <div className="container">
          <p className="text-[#008AFF] text-lg text-center">
            How Does It Works?
          </p>
          <h2 className="text-3xl text-center text-[#222D39] mt-5">
            Follow Some Simple Steps <br />
            For Using Bestkit
          </h2>
          <div className="flex flex-wrap mt-12 relative">
            <div className="absolute flex items-center w-full justify-center gap-24 mt-5">
              <Image src={arrowFirst} alt="main" className="scale-x-80" />
              <Image src={arrowFirst} alt="main" className="scale-x-80" />
            </div>
            <div className="w-1/3 px-10">
              <Image
                src={InstallOurTheApp}
                alt="main"
                className="h-10 w-10 relative z-[1] mx-auto"
              />
              <h2 className="text-xl text-center text-[#222D39] mt-7 px-3">
                Install Our The App
              </h2>
              <p className="text-[#8492A7] text-sm text-center mt-4">
                Use community groups to motivate and inspire, or promote your
                services and drive revenue.
              </p>
            </div>
            <div className="w-1/3 px-10">
              <Image
                src={SetUpYourAccount}
                alt="main"
                className="h-10 w-10 relative z-[1] mx-auto"
              />
              <h2 className="text-xl text-center text-[#222D39] mt-7 px-3">
                Set Up Your Account
              </h2>
              <p className="text-[#8492A7] text-sm text-center mt-4">
                Use community groups to motivate and inspire, or promote your
                services and drive revenue.
              </p>
            </div>
            <div className="w-1/3 px-10">
              <Image
                src={SecurePayments}
                alt="main"
                className="h-10 w-10 relative z-[1] mx-auto"
              />
              <h2 className="text-xl text-center text-[#222D39] mt-7 px-3">
                Secure Payments
              </h2>
              <p className="text-[#8492A7] text-sm text-center mt-4">
                Use community groups to motivate and inspire, or promote your
                services and drive revenue.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F9FC] py-20">
        <div className="container">
          <div className="flex gap-4 items-center border-b pb-20">
            <div className="w-1/2">
              <p className="text-[#008AFF] text-lg">About Bestkit</p>
              <h2 className="text-3xl text-[#222D39] mt-5">
                Connecting All Your Daily Payment Needs Easily With Bestkit
              </h2>
              <div className="flex gap-5 flex-col mt-10">
                <div className="flex gap-2">
                  <Image
                    src={ANewGlobalPaymentSystem}
                    alt="Transfer Your Balances"
                    className="h-24 w-24"
                  />
                  <div>
                    <h4 className="font-medium text-lg text-[#222D39]">
                      A New Global Payment System
                    </h4>
                    <p className="mt-2 text-[#8492A7] text-sm">
                      Lorem ipsum dolor sit a Captivate your guests with seamls,
                      browsing experience across all devices.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={YourMoneyArrivesInstantly}
                    alt="Transfer Your Balances"
                    className="h-24 w-24"
                  />
                  <div>
                    <h4 className="font-medium text-lg text-[#222D39]">
                      Your Money Arrives Instantly
                    </h4>
                    <p className="mt-2 text-[#8492A7] text-sm">
                      Lorem ipsum dolor sit a Captivate your guests with seamls,
                      browsing experience across all devices.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={PaymentFasterThanOthers}
                    alt="Transfer Your Balances"
                    className="h-24 w-24"
                  />
                  <div>
                    <h4 className="font-medium text-lg text-[#222D39]">
                      Payment Faster Than Others
                    </h4>
                    <p className="mt-2 text-[#8492A7] text-sm">
                      Lorem ipsum dolor sit a Captivate your guests with seamls,
                      browsing experience across all devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-no-repeat bg-contain bg-center">
              <div className="w-96 mx-auto flex items-center justify-center relative">
                <Image
                  src={Faqone}
                  alt="main"
                  className="h-full w-full relative z-[1]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-[#F7F9FC]">
        <div className="container bg-white">
          <div className="flex justify-between p-10">
            <div>
              <svg
                className="mx-auto block"
                width="41"
                height="34"
                viewBox="0 0 41 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.9091 32V28.6667C28.9091 26.8986 28.2003 25.2029 26.9387 23.9526C25.6771 22.7024 23.966 22 22.1818 22H8.72727C6.94309 22 5.23198 22.7024 3.97037 23.9526C2.70876 25.2029 2 26.8986 2 28.6667V32"
                  stroke="#008AFF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.4539 15.3333C19.1693 15.3333 22.1812 12.3486 22.1812 8.66667C22.1812 4.98477 19.1693 2 15.4539 2C11.7385 2 8.72662 4.98477 8.72662 8.66667C8.72662 12.3486 11.7385 15.3333 15.4539 15.3333Z"
                  stroke="#008AFF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M38.9993 32.0001V28.6668C38.9982 27.1897 38.5021 25.7547 37.5889 24.5873C36.6757 23.4199 35.3971 22.5861 33.9539 22.2168"
                  stroke="#008AFF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.2273 2.2168C28.6744 2.58397 29.9569 3.41796 30.8729 4.58731C31.7888 5.75666 32.2859 7.19485 32.2859 8.67513C32.2859 10.1554 31.7888 11.5936 30.8729 12.7629C29.9569 13.9323 28.6744 14.7663 27.2273 15.1335"
                  stroke="#008AFF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <b className="text-2xl text-[#222D39] mt-3 block text-center">
                47,595
              </b>
              <span className="text-[#8492A7] block text-xs text-center mt-2">
                Users
              </span>
            </div>
            <div className="w-px bg-[#DEE7EE] h-24"></div>
            <div>
              <svg
                className="mx-auto block"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 32C25.2843 32 32 25.2843 32 17C32 8.71573 25.2843 2 17 2C8.71573 2 2 8.71573 2 17C2 25.2843 8.71573 32 17 32Z"
                  stroke="#008AFF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 20C11 20 13.25 23 17 23C20.75 23 23 20 23 20"
                  stroke="#008AFF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 12.5H12.515"
                  stroke="#008AFF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.5 12.5H21.515"
                  stroke="#008AFF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <b className="text-2xl text-[#222D39] mt-3 block text-center">
                34,797
              </b>
              <span className="text-[#8492A7] block text-xs text-center mt-2">
                Happy Clients
              </span>
            </div>
            <div className="w-px bg-[#DEE7EE] h-24"></div>
            <div>
              <svg
                className="mx-auto block"
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 2L22.2895 11.8738L33 13.4669L25.25 21.1483L27.079 32L17.5 26.8738L7.921 32L9.75 21.1483L2 13.4669L12.7105 11.8738L17.5 2Z"
                  stroke="#008AFF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <b className="text-2xl text-[#222D39] mt-3 block text-center">
                895
              </b>
              <span className="text-[#8492A7] block text-xs text-center mt-2">
                Reviews
              </span>
            </div>
            <div className="w-px bg-[#DEE7EE] h-24"></div>
            <div>
              <svg
                className="mx-auto block"
                width="41"
                height="34"
                viewBox="0 0 41 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7827 25.3376L20.5061 32L27.2294 25.3376"
                  stroke="#008AFF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.5057 17.0098V32.0001"
                  stroke="#008AFF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35.4301 27.1531C36.8914 26.1349 37.9872 24.6817 38.5586 23.0044C39.1299 21.3271 39.1471 19.5131 38.6075 17.8255C38.0679 16.138 36.9997 14.6647 35.5579 13.6195C34.1161 12.5743 32.3757 12.0116 30.5893 12.0129H28.4714C27.9659 10.0607 27.02 8.24745 25.705 6.70984C24.3899 5.17222 22.74 3.95026 20.8794 3.13594C19.0188 2.32162 16.9961 1.93617 14.9634 2.00861C12.9308 2.08104 10.9412 2.60948 9.14442 3.55412C7.34767 4.49877 5.7906 5.83502 4.59042 7.46226C3.39025 9.08951 2.57824 10.9654 2.21553 12.9486C1.85282 14.9318 1.94886 16.9707 2.49643 18.9118C3.04399 20.853 4.02881 22.6457 5.37674 24.1551"
                  stroke="#008AFF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <b className="text-2xl text-[#222D39] mt-3 block text-center">
                50,927
              </b>
              <span className="text-[#8492A7] block text-xs text-center mt-2">
                App Download
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F9FC] py-20">
        <div className="container">
          <div className="flex gap-4 items-center border-b pb-20">
            <div className="w-1/2 bg-no-repeat bg-contain bg-center">
              <div className="w-96 mx-auto flex items-center justify-center relative">
                <Image
                  src={faqtwo}
                  alt="main"
                  className="h-full w-full relative z-[1]"
                />
              </div>
            </div>
            <div className="w-1/2">
              <h2 className="text-3xl text-[#222D39] mt-5">
                Easy to Sign Up & Can Make Transactions Yourself
              </h2>
              <p className="mt-4 text-[#8492A7]">
                We design & build brand, campaigns & digital projects for
                business large & small with customer experiences. Due to its fo
                widespread use as filler text for layouts, non-readability is of
                great importance human perception.
              </p>
              <p class="text-[#222D39] flex gap-2 mt-5">
                <svg
                className="mt-1"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#36CD77" />
                  <path
                    d="M13.3337 7.5L8.75033 12.0833L6.66699 10"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Manage tasks with task lists without changing the overall
                project schedule.
              </p>
              <p class="text-[#222D39] flex gap-2 mt-2">
                <svg
                className="mt-1"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#36CD77" />
                  <path
                    d="M13.3337 7.5L8.75033 12.0833L6.66699 10"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Your team members can view their tasks, update their progress
              </p>
              <Button
              className=" mt-10"
              text={
                <span className="font-semibold flex gap-1">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                  </svg>
                </span>
              }
            />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F9FC] py-20">
        <div className="container">
          <div className="flex gap-4 items-center border-b pb-20">
            
            <div className="w-2/5">
            <p class="text-[#008AFF] text-lg">Answer To</p>
              <h2 className="text-3xl text-[#222D39] mt-5">
              Frequently Asked
              Questions
              </h2>
              <p className="mt-4 text-[#8492A7]">
              There are many variation of passage of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
              </p>
              
              <Button
              className=" mt-10"
              text={
                <span className="font-semibold flex gap-1">
                  Contact Us
                  
                </span>
              }
            />
            </div>
            <div className="w-3/5 bg-no-repeat bg-contain bg-center">
              <FaqItem title={`Professional & Experienced Team Member`} desc={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters opposed to using`} />
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#F7F9FC] py-20">
        <div className="container">
          <div className="flex justify-between">
            <div className="w-2/6 px-5">
              <Link href={"/"}>
                <Image src={Logo} alt="logo" width={100} height={100} />
              </Link>
              <p className="text-[#8492A7] mt-10">
                In the fast-paced world of modern technology, many leadership
                executives and organizations understand that building.
              </p>
              <b className="text-[#222D39] font-semibold mt-5 block">
                Get Our Apps From:
              </b>
              <div className="flex gap-3 mt-5">
                <Button
                  text={
                    <span className="font-medium flex items-center gap-2">
                      Download Now
                      <svg
                        className="inline-block mb-1"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_668)">
                          <path
                            d="M12.3744 0C11.4148 0.0663746 10.2932 0.680621 9.63954 1.48049C9.04329 2.20611 8.5528 3.28386 8.74404 4.33122C9.79253 4.36385 10.8759 3.73498 11.5036 2.92161C12.0909 2.16449 12.5353 1.09349 12.3744 0Z"
                            fill="white"
                          />
                          <path
                            d="M16.1666 6.03924C15.2453 4.88388 13.9504 4.21338 12.7275 4.21338C11.1132 4.21338 10.4303 4.98625 9.30868 4.98625C8.15219 4.98625 7.27357 4.21563 5.87745 4.21563C4.50609 4.21563 3.04585 5.05375 2.11998 6.48699C0.818359 8.50523 1.04111 12.2998 3.15047 15.5319C3.90534 16.6884 4.91333 17.9889 6.23183 18.0002C7.40519 18.0114 7.73594 17.2476 9.32556 17.2397C10.9152 17.2307 11.2167 18.0103 12.3878 17.9979C13.7074 17.9878 14.7705 16.5467 15.5254 15.3902C16.0665 14.5611 16.2679 14.1437 16.6875 13.2077C13.6354 12.0456 13.146 7.70536 16.1666 6.03924Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_668">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  }
                />
                <Button
                  className="border-[#008AFF] border-2 !bg-transparent !text-[#008AFF]"
                  text={
                    <span className="font-medium flex items-center gap-2">
                      Play Store
                      <svg
                        className="inline-block"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_663)">
                          <path
                            d="M16.3131 7.71686L3.15286 0.194229C2.92597 0.0646286 2.67337 0 2.42077 0C2.41563 0 2.41057 0.000685714 2.40551 0.000685714C2.37157 0.00102857 2.33771 0.00274286 2.30394 0.0054C2.28868 0.0066 2.27351 0.00822857 2.25826 0.00994286C2.23186 0.0128571 2.20554 0.0165429 2.17931 0.0209143C2.1698 0.0225429 2.1602 0.0230571 2.15068 0.0248571L2.1512 0.0255429C1.98723 0.0558 1.8272 0.113571 1.67848 0.199886C1.223 0.464143 0.942627 0.950914 0.942627 1.47746V16.5226C0.942627 17.0492 1.223 17.5359 1.67848 17.8002C1.82711 17.8865 1.98714 17.9444 2.15111 17.9746L2.15068 17.9752C2.15926 17.9769 2.16791 17.9774 2.1764 17.9787C2.2046 17.9835 2.23288 17.9875 2.26126 17.9905C2.27548 17.992 2.28963 17.9936 2.30386 17.9947C2.3372 17.9973 2.37046 17.9989 2.40388 17.9993C2.40954 17.9994 2.41511 18.0001 2.42077 18.0001C2.67337 18.0001 2.92597 17.9355 3.15286 17.8059L16.3131 10.2831C16.7732 10.0201 17.0572 9.53083 17.0572 9.00069C17.0572 9.00069 17.0572 9.00043 17.0572 9.00034C17.0572 9.00034 17.0572 9.00008 17.0572 9C17.0572 9 17.0572 8.99974 17.0572 8.99966C17.0572 8.99966 17.0572 8.9994 17.0572 8.99931C17.0572 8.46926 16.7732 7.98 16.3131 7.71686ZM11.1087 6.22294L9.80017 7.93954L6.47103 3.57189L11.1087 6.22294ZM15.675 9.16689L6.47103 14.4281L12.2339 6.8676L15.6749 8.83449C15.7345 8.86851 15.7715 8.93229 15.7715 9.0006C15.7715 9.06917 15.7344 9.13294 15.675 9.16689Z"
                            fill="#008AFF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_663">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  }
                />
              </div>
            </div>
            <div className="w-1/6 px-5">
              <h4 className="text-[#222D39] font-semibold text-xl">
                Quick Links
              </h4>
              <ul className="mt-5 space-y-3">
                <li>
                  <Link href={"/"} className="text-[#8492A7]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-[#8492A7]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-[#8492A7]">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-[#8492A7]">
                    Privacy Poilcy
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-[#8492A7]">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-[#8492A7]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/6 px-5">
              <h4 className="text-[#222D39] font-semibold text-xl">Services</h4>
              <ul className="mt-5 space-y-3">
                <li>
                  <Link href={"/"} className="text-[#8492A7]">
                    Online Payments
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-[#8492A7]">
                    Balance Transfer
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-[#8492A7]">
                    Payment Request
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-[#8492A7]">
                    Bank Withdraw
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-[#8492A7]">
                    Send Money
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-[#8492A7]">
                    Recieve Money
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-2/6 px-5">
              <h4 className="text-[#222D39] font-semibold text-xl">
                Newsletter
              </h4>
              <p className="mt-5 space-y-3 text-[#8492A7]">
                Sign up and receive the latest tips via email.
              </p>
              <div className="relative mt-5">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-full bg-white outline-none py-3 pr-2 pl-12 text-[#222D39] placeholder:text-[#8492A7]"
                />
                <svg
                  className="absolute top-1/2 transform -translate-y-1/2 left-4"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33329 3.3335H16.6666C17.5833 3.3335 18.3333 4.0835 18.3333 5.00016V15.0002C18.3333 15.9168 17.5833 16.6668 16.6666 16.6668H3.33329C2.41663 16.6668 1.66663 15.9168 1.66663 15.0002V5.00016C1.66663 4.0835 2.41663 3.3335 3.33329 3.3335Z"
                    stroke="#8492A7"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3333 5L9.99996 10.8333L1.66663 5"
                    stroke="#8492A7"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <Button
                className="w-full mt-5"
                text={
                  <span className="font-medium flex items-center gap-2">
                    Subscribe Now
                    <svg
                      className="inline-block mb-1"
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.7633 0.10334C17.5908 -0.0189101 17.3643 -0.0354101 17.1768 0.0628399L0.301795 8.87534C0.102295 8.97959 -0.0154549 9.19259 0.00104508 9.41684C0.0182951 9.64184 0.167545 9.83384 0.379795 9.90659L5.07105 11.5101L15.0618 2.96759L7.3308 12.2818L15.193 14.9691C15.2515 14.9886 15.313 14.9991 15.3745 14.9991C15.4765 14.9991 15.5778 14.9713 15.667 14.9173C15.8095 14.8303 15.9063 14.6841 15.931 14.5198L17.9935 0.64484C18.0243 0.43484 17.9358 0.22634 17.7633 0.10334Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                }
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
