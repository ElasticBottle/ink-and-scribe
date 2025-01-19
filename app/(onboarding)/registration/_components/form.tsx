"use client";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { CloudUpload, Paperclip } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { type InferOutput, boolean, object, string } from "valibot";
import { Button } from "~/components/ui/button";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "~/components/ui/file-upload";
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
import { toast } from "~/components/ui/sonner";
import { Switch } from "~/components/ui/switch";

const formSchema = object({
  name: string(),
  email: string(),
  "business-owner": boolean(),
  "logo-mark": string(),
  "word-mark": string(),
});

export function BasicForm() {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const form = useForm<InferOutput<typeof formSchema>>({
    resolver: valibotResolver(formSchema),
  });

  function onSubmit(values: InferOutput<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>,
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-3xl space-y-8 py-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Aaron Yeo" type="text" {...field} />
              </FormControl>
              <FormDescription>
                Your name as it appears in your ID
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="aaronyeo@trademark.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                The email you want to receive status updates
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="business-owner"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel>I am the business owner</FormLabel>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled
                  aria-readonly
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="logo-mark"
          render={() => (
            <FormItem>
              <FormLabel>Select Logo Mark</FormLabel>
              <FormControl>
                <FileUploader
                  value={files}
                  onValueChange={setFiles}
                  dropzoneOptions={dropZoneConfig}
                  className="relative rounded-lg bg-background p-2"
                >
                  <FileInput
                    id="fileInput"
                    className="outline-dashed outline-1 outline-slate-500"
                  >
                    <div className="flex w-full flex-col items-center justify-center p-8 ">
                      <CloudUpload className="h-10 w-10 text-gray-500" />
                      <p className="mb-1 text-gray-500 text-sm dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                        &nbsp; or drag and drop
                      </p>
                      <p className="text-gray-500 text-xs dark:text-gray-400">
                        SVG, PNG, JPG or GIF
                      </p>
                    </div>
                  </FileInput>
                  <FileUploaderContent>
                    {files &&
                      files.length > 0 &&
                      files.map((file, i) => (
                        <FileUploaderItem key={file.name} index={i}>
                          <Paperclip className="h-4 w-4 stroke-current" />
                          <span>{file.name}</span>
                        </FileUploaderItem>
                      ))}
                  </FileUploaderContent>
                </FileUploader>
              </FormControl>
              <FormDescription>
                This is the logo that you'll like to trademark
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="word-mark"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Word Mark</FormLabel>
              <FormControl>
                <Input
                  placeholder="your brand name here"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is the written trademark that you'll like to apply for
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
