import Link from "next/link";

export default function Profile({ profile, displayFullProfile, key }) {
  return (
    <div className="p-8 pt-20" key={key}>
      <div className="max-w-md mx-auto bg-[#ffffffc5] rounded-xl shadow-md overflow-hidden md:max-w-2xl shadow-lg shadow-blue-300">
        <div className="md:flex">
          <Link href={`/profile/${profile.id}`}>
            <div className="md:shrink-0">
              {profile.picture ? (
                <img
                  src={
                    profile.picture.original
                      ? profile.picture.original.url
                      : profile.picture.uri
                  }
                  className="h-48 w-full object-cover md:h-full md:w-48 cursor-pointer"
                />
              ) : (
                <div
                  style={{
                    backgrondColor: "gray",
                  }}
                  className="h-48 w-full object-cover md:h-full md:w-48 bg-slate-800 cursor-pointer"
                />
              )}
            </div>
          </Link>

          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {profile.handle}
              {displayFullProfile && profile.name && " (" + profile.name + ")"}
            </div>
            <div className="block mt-1 text-sm leading-tight font-medium text-black hover:underline whitespace-pre-line">
              {profile.bio}
            </div>
            <div className="mt-2 text-sm text-slate-900">{profile.ownedBy}</div>
            <p className="mt-2 text-xs text-slate-500">
              following: {profile.stats.totalFollowing} followers:{" "}
              {profile.stats.totalFollowers}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
