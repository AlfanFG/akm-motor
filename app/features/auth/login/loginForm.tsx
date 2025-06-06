"use client";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { login } from "@/actions/login";
import FormError from "@/components/form-error";
import { useState, useTransition } from "react";
import FormSuccess from "@/components/form-success";
import Social from "@/app/auth/social";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values).then((data) => {
        console.log("data", data);
        console.log("values", values);
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };
  return (
    <Card className="w-96">
      <CardHeader>
        <span className="text-2xl mb-4">Login</span>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="john.doe@example.com"
                        type="text"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your password"
                        type="password"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormError message={error || urlError} />
              <FormSuccess message={success} />
              <Button
                disabled={isPending}
                type="submit"
                className="mt-6 w-full"
              >
                Login
              </Button>
              <Social />
              <Link
                href={"/auth/register"}
                className="flex justify-center text-xs"
              >
                Don't Have any Account
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
