import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { FaExclamation } from "react-icons/fa";

const ErrorCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col items-center gap-2">
          <span>Oops! Something went wrong!</span>
          <FaExclamation className="text-destructive" />
        </div>
      </CardHeader>
      <CardFooter>
        <Link className="w-full" href={"/auth/login"}>
          <Button variant={"ghost"} className={"w-full"}>
            Back to login
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
