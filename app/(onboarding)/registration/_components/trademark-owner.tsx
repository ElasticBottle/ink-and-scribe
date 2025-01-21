"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { type InferOutput, boolean, object, string } from "valibot";
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

const formSchema = object({
  isCompany: boolean(),
  // Company fields
  companyName: string(),
  registrationCountry: string(),
  registrationNumber: string(),
  // Individual fields
  ownerName: string(),
  nationality: string(),
  residenceCountry: string(),
  // Common fields
  contactName: string(),
  contactEmail: string(),
});

type FormData = InferOutput<typeof formSchema>;

export function TrademarkOwnerForm() {
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: valibotResolver(formSchema),
    defaultValues: {
      isCompany: false,
      companyName: "",
      registrationCountry: "",
      registrationNumber: "",
      ownerName: "",
      nationality: "",
      residenceCountry: "",
      contactName: "",
      contactEmail: "",
    },
  });

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("trademarkOwner");
    if (savedData) {
      form.reset(JSON.parse(savedData));
    }
  }, [form]);

  // Save to localStorage on form changes
  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value) {
        localStorage.setItem("trademarkOwner", JSON.stringify(value));
      }
    });
    return () => subscription.unsubscribe();
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
    localStorage.setItem("trademarkOwner", JSON.stringify(values));
    router.push("/registration?step=3");
  }

  const isCompany = form.watch("isCompany");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-3xl space-y-8"
      >
        <FormField
          control={form.control}
          name="isCompany"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel>Trademark belongs to a company</FormLabel>
                <FormDescription>
                  Toggle this if the trademark will be owned by a company rather
                  than an individual
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

        {isCompany ? (
          <>
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="registrationCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country of Registration</FormLabel>
                  <FormControl>
                    <Input placeholder="Country" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="registrationNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Registration Number"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : (
          <>
            <FormField
              control={form.control}
              name="ownerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trademark Owner Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality</FormLabel>
                  <FormControl>
                    <Input placeholder="Nationality" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="residenceCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country of Residence</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Country of Residence"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <FormField
          control={form.control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Point of Contact Name</FormLabel>
              <FormControl>
                <Input placeholder="Contact Name" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Point of Contact Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="contact@example.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/registration?step=1")}
          >
            Previous
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
}
