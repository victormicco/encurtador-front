"use client";

import { LinkForm } from "@/components/formLink";
import { RedirectForm } from "../../components/formRedirect";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import InfoDrawer from "../../components/infoDrawer";

export default function Home() {
  const [type, setType] = useState("link");

  return (
    <div className="flex content-center justify-center items-center h-screen w-screen gap-14 flex-col">
      {type === "link" ? (
        <div>
          <InfoDrawer />
          <LinkForm />
        </div>
      ) : (
        <RedirectForm />
      )}

      <Button
        variant={"ghost"}
        onClick={() => {
          type === "link" ? setType("short") : setType("link");
        }}
      >
        {type === "link"
          ? "Formulário de Redirecionar"
          : "Formulário de Encurtar"}
      </Button>
    </div>
  );
}
