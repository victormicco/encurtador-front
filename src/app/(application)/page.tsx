import { LinkForm } from "@/components/formLink";
import Image from "next/image";
import { RedirectForm } from "../../components/formRedirect";

export default function Home() {
  return (
    <div className="flex content-center justify-center items-center h-screen w-screen gap-14">
      <LinkForm />
      <hr />
      <RedirectForm />
    </div>
  );
}
