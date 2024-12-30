import { CiCalendar } from "react-icons/ci";
import ActionButtons from "../ActionButtons/ActionButtons";
import PlatformMetrics from "../PlatformMetrics/PlatformMetrics";
import TeamMemberCell from "../TeamMemberCell/TeamMemberCell";
import GetGrowthByTeam from "../../../Hooks/GrowtHooks/GetGrowthByTeam";
import { FaSpinner } from "react-icons/fa";
import useApproveGrowthReview from "../../../Hooks/GrowtHooks/ApproveGrowthReview";
import { IoAlertCircleOutline } from "react-icons/io5";

export default function GrowthTable() {
  const { GetGrowthByTeamTEData, GetGrowthByTeamTELoading } = GetGrowthByTeam();
  const { ApproveGrowthReview, isloading } = useApproveGrowthReview();

  return (
    <div className="p-6 max-w-6xl mx-auto max-lg:pb-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[--text-color] mb-2">
          Social Media Growth Reviews
        </h1>
        <p className="text-[--text-color]">
          Review and manage team members' social media performance metrics
        </p>
      </div>

      {GetGrowthByTeamTELoading ? (
        <div className="flex w-full h-full items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : GetGrowthByTeamTEData && GetGrowthByTeamTEData.length > 0 ? (
        <div className="space-y-8">
          {GetGrowthByTeamTEData?.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-[--rightSide-bg-color] text-[--text-color] rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6 border-b border-gray-300">
                  <div className="flex justify-between items-start">
                    <TeamMemberCell member={item} />
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-500">
                        <CiCalendar className="h-4 w-4 mr-2" />
<<<<<<< HEAD
                        <span className="text-sm">
=======
                        <span className="text-xs">
>>>>>>> 1c510ab (Sockets and Updates)
                          {item?.growth_data[0]?.created_at?.slice(0, 10)}
                        </span>
                      </div>
                      <ActionButtons
                        isloading={isloading}
                        onAction={(action) =>
<<<<<<< HEAD
                          ApproveGrowthReview(item.growth_data[0].id, action)
=======
                          ApproveGrowthReview(item.growth_data[0].id, action, item.id)
>>>>>>> 1c510ab (Sockets and Updates)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {item?.growth_data?.map((metric, index) => (
                      <PlatformMetrics key={index} metrics={metric} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="px-6 py-4 max-w-lg mx-auto  rounded-lg">
        {/* Alert */}
        <div className="flex items-start bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-6">
          <IoAlertCircleOutline  className="h-5 w-5 text-yellow-500 mr-3" />
          <div>
            <h3 className="font-medium text-yellow-700">No Data Found</h3>
            <p className="text-sm text-yellow-700 mt-1">
              We couldn't find any metrics for your teams's account at this time.
            </p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
