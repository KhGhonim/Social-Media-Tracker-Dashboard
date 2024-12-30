import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function TotalMembers({ FetchTeamMembersTeamLeaders }) {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <h1 className="text-lg lg:text-2xl text-[--text-color] font-bold">
        {t("members")}
      </h1>
      <div className="w-full bg-[--bg-color] rounded-3xl my-3 p-3">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper flex  gap-1 items-center  "
        >
          {FetchTeamMembersTeamLeaders?.map((member, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col cursor-pointer items-center justify-center gap-3 hover:bg-[--rightSide-bg-color] p-2 hover:rounded-xl"
            >
              <img
                src={`${
                  member?.profile_picture ||
                  `https://avatar.iran.liara.run/public/girl`
                } `}
                alt="Avatar"
                loading="lazy"
                className="w-10 h-8 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <p className="text-[8px] mt-1 font-medium text-[--text-color] text-center">
                  {member?.username}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
