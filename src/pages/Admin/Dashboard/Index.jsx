import { useEffect } from "react";

function Index() {
  useEffect(() => {
    document.title = "Admin Dashboard";
  });
  return <div>Dashboard</div>;
}

export default Index;
