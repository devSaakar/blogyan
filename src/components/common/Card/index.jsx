import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DefaultImage from "../../../assets/user.png";

const Card = ({ item,image }) => {
  const { name, id, branch, course, year, phoneNumber } = item;
  const tags = [branch, course, year];
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    if (id) {
      const storage = getStorage();
      const starsRef = ref(storage, `/students/${id}/profile`);
      getDownloadURL(starsRef).then((url) => {
        setProfile(url);
      });
    }
  }, [id]);

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg text-center bg-yellow-300 ">
      <div className=" my-3 mx-6 grid grid-cols-2 justify-between items-center">
        <div className="Card-image relative w-32 h-32 rounded-lg overflow-hidden">
          <Image
            className=""
            src={profile ? profile : image ? image : DefaultImage}
            layout="fill"
            objectFit="cover"
            alt="card.png"
          />
        </div>
        <div className="font-bold text-xl mb-2 text-blue-500">{name}</div>
      </div>
      <div className="px-6 py-2">
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags?.length &&
          tags.map((tag) =>
            tag ? (
              <span
                key={tag}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{tag}
              </span>
            ) : null
          )}
      </div>
    </div>
  );
};

export default Card;
