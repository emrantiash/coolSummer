import { useSearchParams } from "react-router-dom";

export default function AppDetails() {
  let { userId } = useSearchParams();
  console.log(userId);

  return (
    <div>
      <h1>App Details</h1>
    </div>
  );
}
