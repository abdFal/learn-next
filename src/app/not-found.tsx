import { CircleAlertIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <div className="w-3/5 mx-auto my-5">
      <Alert>
        <CircleAlertIcon className="h-4 w-4" />
        <AlertTitle>Ooops! Page Not Found</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
