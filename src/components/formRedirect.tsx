"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { linkService } from "@/services";

const setRedirectSchema = z.object({
  id: z.string().min(0, {
    message: "Escreva Algo",
  }),
});

export function RedirectForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof setRedirectSchema>>({
    resolver: zodResolver(setRedirectSchema),
    defaultValues: {
      id: "",
    },
  });

  async function onSubmit(values: z.infer<typeof setRedirectSchema>) {
    try {
      const res = await linkService.getShortcuted(values.id);
      window.open(res.link);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold"> Seja Redirecionado</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID Copiado</FormLabel>
                <FormControl>
                  <Input placeholder="ID" {...field} />
                </FormControl>
                <FormDescription>Digite Seu ID</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Redirecionar</Button>
        </form>
      </Form>
    </div>
  );
}
