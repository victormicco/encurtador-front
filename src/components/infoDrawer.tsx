import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Info } from "lucide-react";

export default function InfoDrawer() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          {" "}
          <Info className="h-5 w-5" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex justify-center flex-col items-center">
            <DrawerTitle>Onde está meu ID curto?</DrawerTitle>
            <DrawerDescription>
              Seu ID será copiado para o clipboard assim que você enviar o
              domínio no formulário
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Fechar Info</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
