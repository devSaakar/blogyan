import Image from "next/image";
import mobileHome from "../src/assets/LANDING_PAGE.png";
import background from "../src/assets/Home_Bg.png";
import phoneBg from "../src/assets/phone_transparent.png";

export default function Home() {
  return (
    <div className="homepage__container relative lg:-mt-16 overflow-hidden transfor">
      {/* <div className="mt-4 grid grid-cols-2 gap-4 min-w-full bg-purple-500 relative h-85vh">
        <div className="absolute -top-40 bg-primary rotate-3 min-w-full h-screen">xyzz lorem450</div>
        <div className="flex justify-center items-center">
          <div className="relative mt-20 bg-yellow-300 h-96 w-96">
            <Image src={phoneBg} layout="fill" alt="phone.png" />
          </div>
        </div>
      </div> */}
      {/* <div className="relative min-h-screen">
      <Image src={background} layout="fill" objectFit="cover" alt="bg.png"  />
      </div> */}
      <Image src={mobileHome} layout="responsive" objectFit="cover" alt="banner"/>
    </div>
  );
}
