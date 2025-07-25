
import { useNavigate } from "react-router-dom";
import { Skeleton } from "antd";
import { useSingleUser } from "../../hooks/queries/useSingleUser";
import { useAddFollow, useRemoveFollow } from "../../hooks/queries/useUserActions";
import { useEffect, type FC } from "react";
import { useAuth } from "../context/AuthContext";

interface CommentNavbarProps {
  authorId: string;
}

const CommentNavbar: FC<CommentNavbarProps> = ({ authorId }) => {

  const { data, isLoading } = useSingleUser(authorId);
useEffect(() => {
  console.log("Fetched user data:", data);
}, [data]);
  const navigate = useNavigate();
  const { user: loggedInUser } = useAuth(); 
  const { mutate: followUser } = useAddFollow();
  const { mutate: unfollowUser } = useRemoveFollow();

  const isCurrentUser = loggedInUser?._id === authorId;
  const isFollowing = loggedInUser?.followers?.includes(authorId);

  if (isLoading || !data) {
    return (
      <div className="flex items-center gap-3">
        <Skeleton.Avatar active size="large" />
        <Skeleton.Input active size="small" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between py-4">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate(`/user/${data._id}`)}
      >
        <img onClick={() => navigate(`/user/${data._id}`)}
          src={data.profile_photo}
          alt="User"
          className="w-[45px] h-[45px] rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-[16px]">
            {data.name} {data.surname}
          </h3>
          <p className="text-[12px] text-gray-500">
            Followers: {data.followers?.length ?? 0}
          </p>
        </div>
      </div>
      <div>
        {isCurrentUser ? (
          <button className="bg-[#46A358] text-white px-4 py-1 rounded-md">You</button>
        ) : isFollowing ? (
          <button
            onClick={() => unfollowUser({ id: authorId })}
            className="bg-red-500 text-white px-4 py-1 rounded-md"
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => followUser({ id: authorId })}
            className="bg-[#46A358] text-white px-4 py-1 rounded-md"
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentNavbar;
