// src/pages/UserPage.tsx

import { useParams } from "react-router-dom";
import { Skeleton } from "antd";
import { useSingleUser } from "../../hooks/queries/useSingleUser";

const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, isLoading } = useSingleUser(id || "");

  if (isLoading || !user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Skeleton.Avatar active size="large" />
        <div className="ml-4">
          <Skeleton.Input style={{ width: 200 }} active size="large" />
          <Skeleton.Input style={{ width: 100 }} active size="small" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center gap-6">
        <img
          src={user.profile_photo}
          alt={user.name}
          className="w-[100px] h-[100px] rounded-full border object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name} {user.surname}</h1>
          <p className="text-gray-500">Followers: {user.followers?.length || 0}</p>
          <p className="text-gray-600 mt-2">{user.bio || "No bio available"}</p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
