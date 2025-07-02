import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";

const User = () => {
  const users = useAppSelector(selectUser);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex flex-end"></div>
      <div className="mt-5 gap-3">
        {/* {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))} */}
      </div>
    </div>
  );
};

export default User;
