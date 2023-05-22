import React, { useState } from "react";
import Image from "next/image";
import ellipse from "../../../assets/ellipse.png";
import Arrow from "../../../assets/digital/arrow.png";
import Modal from "@/components/reusable/Modal";

export default function GetInTouch() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    mail: "",
    text: "",
    name: "",
    success: "",
  });

  const handleNameChange = (e) => {
    if (e.target.value) {
      setName(e.target.value);
      setError((prev) => {
        return { ...prev, name: "" };
      });
    } else {
      setError((prev) => {
        return { ...prev, name: "Name field is required" };
      });
      setName("");
    }
  };

  const handleEmailChange = (e) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmail(e.target.value);
    if (e.target.value.match(mailformat)) {
      setError((prev) => {
        return { ...prev, mail: "" };
      });
    } else if (!e.target.value) {
      setError((prev) => {
        return { ...prev, mail: "Mail field is required" };
      });
      setEmail("");
    } else {
      setError((prev) => {
        return { ...prev, mail: "Mail is not valid" };
      });
    }
  };

  const handleMessageChange = (e) => {
    if (e.target.value) {
      setMessage(e.target.value);
      setError((prev) => {
        return { ...prev, text: "" };
      });
    } else {
      setError((prev) => {
        return { ...prev, text: "Message field is required" };
      });
      setMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Object.values(error).some((item) => item)) {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });

        if (response.ok) {
          setMessage("");
          setEmail("");
          setName("");
          setError({
            mail: "",
            text: "",
            name: "",
            success: "Email was successfuly sent!",
          });
          setOpen(true);
          setTimeout(() => {
            setError({
              mail: "",
              text: "",
              name: "",
              success: "",
            });
            setOpen(false);
          }, 3000);
        } else {
          setMessage("");
          setEmail("");
          setName("");
          setError((prev) => {
            return { ...prev, text: "Failed to send email" };
          });
        }
      } catch (error) {
        setMessage("");
        setEmail("");
        setName("");
      }
    } else {
      return;
    }
  };

  return (
    <main>
      <div className="lg:min-h-[950px] h-full bg-gradient-image bg-no-repeat bg-full lg:px-36 md:px-20 px-10 pt-20 md:pt-[114px] pb-14 md:pb-[104px]">
        <div className="relative h-full flex justify-start items-center">
          <Image
            src={ellipse}
            alt="ellipse"
            className="absolute top-[-86px] left-[-61px] md:left-[-73px] md:-top-[121px] lg:top-[-111px] lg:left-[-82px] w-[150px] h-[130px] md:w-[200px] md:h-[200px]"
          />
          <h2 className="text-[22px] md:text-4xl lg:text-7xl text-white font-bold h-20 absolute z-1">
            Get in touch
          </h2>
        </div>
        <div className="mt-1 md:mt-16 lg:mt-24">
          <p className="text-xs sm:text-xl text-white leading-4 md:leading-8 lg:leading-[50px] lg:text-3xl text-center max-w-[455px] font-bold font-poppins m-auto lg:max-w-[1023px]">
            Contact Us
          </p>
        </div>
        <div>
          <p className="text-xs leading-5 md:text-base lg::text-2xl title-gradient w-max mx-auto text-center font-light">
            Don’t be shy, we are happy to chat
          </p>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="max-w-[300px] gap-5 md:gap-12 lg:gap-16 md:max-w-[450px] mx-auto flex flex-col justify-center items-center lg:max-w-[800px] mt-5 md:mt-10 lg:mt-12"
          >
            <div className="w-full">
              <input
                type="text"
                value={name}
                className="bg-transparent outline-none border-none h-14 w-full text-sm placeholder:text-sm md:text-base md:placeholder:text-base lg:text-xl lg:placeholder:text-xl placeholder:text-white text-white"
                placeholder="Your Name"
                onChange={handleNameChange}
              />
              <div className="border-b h-[2px] border-transparent bg-gradient-to-r w-full from-green-400 via-blue-500 to-purple-600 focus:border-green-400 focus:bg-gradient-to-r focus:from-green-400 focus:via-blue-500 focus:to-purple-600"></div>
              {!!error.name && (
                <span className="text-xs lg:text-sm text-[#FF0000] text-left">
                  {error.name}
                </span>
              )}
            </div>
            <div className="w-full">
              <input
                type="email"
                value={email}
                className="bg-transparent outline-none border-none h-14 w-full text-sm placeholder:text-sm md:text-base md:placeholder:text-base lg:text-xl lg:placeholder:text-xl placeholder:text-white text-white"
                placeholder="Your Email"
                onChange={handleEmailChange}
              />
              <div className="border-b h-[2px] border-transparent bg-gradient-to-r w-full from-green-400 via-blue-500 to-purple-600 focus:border-green-400 focus:bg-gradient-to-r focus:from-green-400 focus:via-blue-500 focus:to-purple-600"></div>
              {!!error.mail && (
                <span className="text-xs lg:text-sm text-[#FF0000] text-left">
                  {error.mail}
                </span>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                value={message}
                className="bg-transparent outline-none border-none h-14 w-full text-sm placeholder:text-sm md:text-base md:placeholder:text-base lg:text-xl lg:placeholder:text-xl placeholder:text-white text-white"
                placeholder="Your Message"
                onChange={handleMessageChange}
              />
              <div className="border-b h-[2px] border-transparent bg-gradient-to-r w-full from-green-400 via-blue-500 to-purple-600 focus:border-green-400 focus:bg-gradient-to-r focus:from-green-400 focus:via-blue-500 focus:to-purple-600"></div>
              {!!error.text && (
                <span className="text-xs lg:text-sm text-[#FF0000] text-left">
                  {error.text}
                </span>
              )}
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                disabled={
                  Object.values(error).some((item) => item) ||
                  !message ||
                  !email ||
                  !name
                }
              >
                <div className="h-10 btn-gradient-2 relative px-2 md:w-[180px] md:h-[50px] lg:w-[210px] rounded-full lg:h-[60px] flex gap-2 justify-center items-center">
                  <span className="text-[#8E6DFD] md:text-base lg:text-lg text-xs">
                    Send
                  </span>
                  <Image
                    priority={true}
                    src={Arrow}
                    width={10}
                    height={10}
                    alt="ellipse"
                    className="w-[7px] h-[10px]"
                  />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} text={error.success} />
    </main>
  );
}
