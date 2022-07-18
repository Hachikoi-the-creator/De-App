import { useQuery } from "@apollo/client";
import { recommendProfiles } from "../queries/recommendedProfilesQuery";
import Profile from "../components/Profile.js";

export default function Home() {
  const { loading, error, data } = useQuery(recommendProfiles);

  if (loading) return "Loading..";
  if (error) return `Error! ${error.message}`;
  console.log(data);

  return (
    <div>
      {data.recommendedProfiles.map((profile, index) => {
        if (index < 2) {
          console.log(`Profile ${index}:`, profile);
        }

        return <Profile profile={profile} displayFullProfile={false} />;
      })}
    </div>
  );
}
