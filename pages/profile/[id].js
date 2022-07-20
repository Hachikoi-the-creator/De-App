import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { userPosts } from "../../queries/fetchProfilePost";
import Profile from "../../components/Profile.js";
import Post from "../../components/Post.js";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  console.log("fetching profile for", id);
  const { loading, error, data } = useQuery(userPosts, {
    variables: {
      request: { profileId: id },
      publicationsRequest: {
        profileId: id,
        publicationTypes: ["POST"],
      },
    },
  });

  if (loading) return "Loading..";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="flex flex-col p-8 items-center bg-[#323232]">
      <Profile profile={data.profile} displayFullProfile={true} />
      <h2 className="text-xl text-slate-50 drop-shadow-md shadow-blue">Post</h2>
      {data.publications.items.map((post, idx) => {
        return (
          <>
            <Post key={idx} post={post} />
          </>
        );
      })}
    </div>
  );
}
