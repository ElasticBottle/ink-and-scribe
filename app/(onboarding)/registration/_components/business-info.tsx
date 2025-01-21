"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  type InferOutput,
  boolean,
  object,
  optional,
  pipe,
  string,
  transform,
} from "valibot";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Switch } from "~/components/ui/switch";
import { Textarea } from "~/components/ui/textarea";

const formSchema = pipe(
  object({
    haveSocials: boolean(),
    website: optional(string(), ""),
    instagram: optional(string(), ""),
    facebook: optional(string(), ""),
    productDescription: optional(string(), ""),
  }),
  transform((input) => {
    if (!input.haveSocials && !input.productDescription?.trim()) {
      throw new Error(
        "Please provide a description of your products or services",
      );
    }
    if (
      input.haveSocials &&
      !input.website?.trim() &&
      !input.instagram?.trim() &&
      !input.facebook?.trim()
    ) {
      throw new Error(
        "Please provide at least one social media link or website",
      );
    }
    return input;
  }),
);

type FormData = InferOutput<typeof formSchema>;

export function BusinessInfoForm() {
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: valibotResolver(formSchema),
    defaultValues: {
      haveSocials: true,
      website: "",
      instagram: "",
      facebook: "",
      productDescription: "",
    },
  });

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("businessInfo");
    if (savedData) {
      form.reset(JSON.parse(savedData));
    }
  }, [form]);

  // Save to localStorage on form changes
  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value) {
        localStorage.setItem("businessInfo", JSON.stringify(value));
      }
    });
    return () => {
      if (subscription?.unsubscribe) {
        subscription.unsubscribe();
      }
    };
  }, [form]);

  // Warn on tab close if form is dirty
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (form.formState.isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [form.formState.isDirty]);

  function onSubmit(values: FormData) {
    localStorage.setItem("businessInfo", JSON.stringify(values));
    router.push("/registration?step=2");
  }

  const haveSocials = form.watch("haveSocials");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-3xl space-y-8"
      >
        <FormField
          control={form.control}
          name="haveSocials"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel>I have an active social media or website</FormLabel>
                <FormDescription>
                  Toggle this if your business doesn't have any online presence
                  yet
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {haveSocials && (
          <>
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com"
                      type="url"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Your business website URL</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram Handle</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="@yourbusiness"
                      type="url"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Your Instagram handle</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook Page</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="facebook.com/yourbusiness"
                      type="url"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Your Facebook page URL</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {!haveSocials && (
          <FormField
            control={form.control}
            name="productDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product/Service Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your products or services in detail"
                    className="min-h-[120px] resize-y"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Please describe what products or services your business offers
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
}
