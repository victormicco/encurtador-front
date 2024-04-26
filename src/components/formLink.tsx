"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { linkService } from "@/services"
 
const formSchema = z.object({
  link: z.string().min(0, {
    message: "Username must be at least 2 characters.",
  }),
  // getLink: z.string().min(0, {
  //   message: "Is empty",
  // }),
  
})
 
export function LinkForm() {
  
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          link: "",
        },
      })

      async function redirect(values: z.infer<typeof formSchema>) {
        try {
          const res = await linkService.getShortcuted(values.getLink)
          window.open(res.link)
        } catch(err) {
          console.log(err)
        }
      }

      async function onSubmit(values: z.infer<typeof formSchema>) {
       try {
        const res = await linkService.sendLink(values)
         navigator.clipboard.writeText(res.id);
        toast({
            variant: "default",
            title: "Dados enviados",
            description: "O dominio foi enviado com sucesso, logo voce recebera o link encurtado",
          })

          const resShort = linkService.getLink()
          console.log(resShort)

          return toast({
            title: "Dados encontrados com sucesso"
          })

       } catch(err) {
        console.log(err)
        return toast({
            variant: "destructive",
            title: "Erro",
            description: `${err}`

        })
       }
        console.log(values)
      }
      const getId = form.watch(`getLink`)
  return (  
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dominio</FormLabel>
              <FormControl>
                <Input placeholder="Dominio" {...field} />
              </FormControl>
              <FormDescription>
                Digite Seu Dominio
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         {/* <FormField
          control={form.control}
          name="getLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dominio</FormLabel>
              <FormControl>
                <Input placeholder="Dominio" {...field} />
              </FormControl>
              <FormDescription>
                Seja redirecionado
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit">Buscar</Button>
        {/* <Button onClick={() => {redirect(getId)}}>Seja redirecionado</Button> */}
      </form>
    </Form>
  )
}