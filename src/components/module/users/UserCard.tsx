import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle>{user.username}</CardTitle>
        <Button
          variant="link"
          className="p-0 text-red-500"
          onClick={() => dispatch(removeUser(user.id))}
        >
          <Trash2 />
        </Button>
      </CardHeader>
    </Card>
  );
};

export default UserCard;
