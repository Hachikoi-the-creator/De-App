import { useQuery } from "@apollo/client";
import { recommendProfiles } from "../queries/recommendedProfilesQuery";
import Profile from "../components/Profile.js";
import Loading from "../components/Loading.js";
import LoadingError from "../components/LoadingError.js";

export default function Home() {
  const { loading, error, data } = useQuery(recommendProfiles);

  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <LoadingError />;
  }

  return (
    <div className="bg-[#323232]">
      {data.recommendedProfiles.map((profile, index) => {
        // if (index < 2) {
        //   console.log(`Profile ${index}:`, profile);
        // }

        return (
          <Profile key={index} profile={profile} displayFullProfile={false} />
        );
      })}
    </div>
  );
}
