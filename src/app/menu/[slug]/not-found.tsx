import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Menu Not Found</CardTitle>
          <CardDescription>
            The menu you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/">
            <Button>Go to Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

