import { FaStar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import { GiLightningFlame } from "react-icons/gi";
import { TeamLeader } from "../../../types/types";
import { useTranslation } from "react-i18next";

interface Props {
  data: TeamLeader[];
}

export default function TeamLeaderTable({ data }: Props) {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[--rightSide-bg-color] rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600">
        <h2 className="text-2xl font-bold text-white">{t('teamLeadershipBoard')}</h2>
        <p className="text-emerald-100">
        {t('topPerformingTeamLeaders')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 p-6">
        {data.map((leader, index) => (
          <div
            key={leader.id}
            className={`relative rounded-lg p-6 ${
              index === 0
                ? "bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200"
                : "bg-gray-50 hover:bg-gray-100"
            } transition-all`}
          >
            {index === 0 && (
              <div className="absolute top-4 right-4">
                <FaStar className="w-6 h-6 text-amber-400 fill-amber-400" />
              </div>
            )}

            <div className="flex items-center gap-6">
              <div className="relative hidden md:block">
                <img
                  src={leader.avatar}
                  alt={leader.name}
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xs lg:text-lg font-semibold text-gray-900">
                  {t(leader.name)}
                </h3>
                <p className="text-xs lg:text-lg  text-gray-500">
                  {t(leader.role)}
                </p>
              </div>

              <div className="grid grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full bg-purple-100">
                    <GiLightningFlame className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-xs lg:text-lg  font-medium text-gray-900">
                    {leader.productivity}%
                  </div>
                  <div className="text-xs text-gray-500">{t('productivity')}</div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full bg-blue-100">
                    <FaStar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-xs lg:text-lg  font-medium text-gray-900">
                    {leader.leadershipScore}%
                  </div>
                  <div className="text-xs text-gray-500">{t('leadership')}</div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full bg-green-100">
                    <FiTrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-xs lg:text-lg  font-medium text-gray-900">
                    {leader.socialScore}%
                  </div>
                  <div className="text-xs text-gray-500">{t('social')}</div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full bg-orange-100">
                    <FaUsers className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-xs lg:text-lg  font-medium text-gray-900">
                    {leader.teamSize}
                  </div>
                  <div className="text-xs text-gray-500">{t('teamSize')}</div>
                </div>
              </div>
            </div>

            <div className="mt-4 w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1.5 rounded-full"
                style={{
                  width: `${
                    (leader.productivity +
                      leader.leadershipScore +
                      leader.socialScore) /
                    3
                  }%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
