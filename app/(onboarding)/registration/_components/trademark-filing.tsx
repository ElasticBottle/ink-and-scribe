"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { CloudUpload, HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { type InferOutput, array, boolean, object, string } from "valibot";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import {
  type BusinessInfo,
  type RegistrationData,
  type TrademarkOwner,
  saveRegistrationDetails,
} from "../_lib/save-details.action";

const formSchema = object({
  isWordMark: boolean(),
  wordMark: string(),
  countries: array(string()),
});

type FormData = InferOutput<typeof formSchema>;

// List of countries a Singapore-based company can help register trademarks in
const AVAILABLE_COUNTRIES = [
  "Singapore",
  "Malaysia",
  "Indonesia",
  "Thailand",
  "Vietnam",
  "Philippines",
  "Brunei",
  "Cambodia",
  "Laos",
  "Myanmar",
];

const HELPER_INFO = `In general, registering your brand name in plain fonts, such as Arial font, would give you broader rights. This is so as it would give you rights over the words themselves rather than the logo in a particular stylisation. Most of the time, customers are more likely to remember your brand name more strongly compared to how the logo has been stylised. As such, it is usually more important to protect the brand name.
However, if your stylised logo contains a graphic or icon that is separate from the brand name, for example, the Nike swoosh, you may wish to file for the logo that incorporates the graphic and brand name as a single trademark. This is a good option, especially if you are sure that your company will not change the logo anytime soon.
If you also intend to use the graphical element in your logo on its own in some of your marketing collaterals, registering the graphical element as a separate trademark will be a good idea as well.`;

export function TrademarkFilingForm() {
  const router = useRouter();
  const [files, setFiles] = useState<File[] | null>(null);

  const form = useForm<FormData>({
    resolver: valibotResolver(formSchema),
    defaultValues: {
      isWordMark: true,
      wordMark: "",
      countries: [],
    },
  });

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("trademarkFiling");
    if (savedData) {
      form.reset(JSON.parse(savedData));
    }
  }, [form]);

  // Save to localStorage on form changes
  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value) {
        localStorage.setItem("trademarkFiling", JSON.stringify(value));
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

  async function onSubmit(values: FormData) {
    try {
      // Get all form data from localStorage
      const businessInfo = localStorage.getItem("businessInfo");
      const trademarkOwner = localStorage.getItem("trademarkOwner");

      if (!businessInfo || !trademarkOwner) {
        throw new Error("Missing required information");
      }

      // Prepare the registration data
      const registrationData: RegistrationData = {
        businessInfo: JSON.parse(businessInfo) as BusinessInfo,
        trademarkOwner: JSON.parse(trademarkOwner) as TrademarkOwner,
        trademarkFiling: values,
        ...(files?.[0] && { logoFile: files[0] }),
        submittedAt: new Date().toISOString(),
      };

      // Save to Google Sheets
      const result = await saveRegistrationDetails(registrationData);

      if (!result.success) {
        throw new Error(result.error);
      }

      // Clear localStorage after successful submission
      localStorage.removeItem("businessInfo");
      localStorage.removeItem("trademarkOwner");
      localStorage.removeItem("trademarkFiling");

      // Redirect to success page
      router.push(
        `/registration/success?registrationId=${result.registrationId}`,
      );
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  }

  const isWordMark = form.watch("isWordMark");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-3xl space-y-8"
      >
        <div className="flex items-center justify-between rounded-lg border p-4">
          <FormField
            control={form.control}
            name="isWordMark"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between space-x-4">
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <FormLabel>Word Mark Registration</FormLabel>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 p-0"
                        >
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">About word marks</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            About Word Marks vs Logo Marks
                          </DialogTitle>
                          <DialogDescription className="pt-4 text-justify">
                            {HELPER_INFO}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <FormDescription>
                    Toggle this if you want to register a word mark instead of a
                    logo
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
        </div>

        {isWordMark ? (
          <FormField
            control={form.control}
            name="wordMark"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Word Mark</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your word mark" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the exact text you want to trademark
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <FormItem>
            <FormLabel>Logo Mark</FormLabel>
            <FormControl>
              <FileUploader
                value={files}
                onValueChange={setFiles}
                dropzoneOptions={{
                  maxFiles: 1,
                  maxSize: 1024 * 1024 * 4,
                  multiple: false,
                }}
                className="relative rounded-lg bg-background p-2"
              >
                <FileInput
                  id="fileInput"
                  className="outline-dashed outline-1 outline-slate-500"
                >
                  <div className="flex w-full flex-col items-center justify-center p-8">
                    <CloudUpload className="h-10 w-10 text-gray-500" />
                    <p className="mb-1 text-gray-500 text-sm dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span>
                      &nbsp; or drag and drop
                    </p>
                    <p className="text-gray-500 text-xs dark:text-gray-400">
                      SVG, PNG, JPG or GIF (max. 4MB)
                    </p>
                  </div>
                </FileInput>
                <FileUploaderContent>
                  {files &&
                    files.length > 0 &&
                    files.map((file, i) => (
                      <FileUploaderItem key={file.name} index={i}>
                        <CloudUpload className="h-4 w-4 stroke-current" />
                        <span>{file.name}</span>
                      </FileUploaderItem>
                    ))}
                </FileUploaderContent>
              </FileUploader>
            </FormControl>
            <FormDescription>
              Upload your logo in high resolution
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}

        <FormField
          control={form.control}
          name="countries"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Countries for Registration</FormLabel>
              <FormControl>
                <Select
                  value={field.value[0] ?? ""}
                  onValueChange={(value) => field.onChange([value])}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select countries" />
                  </SelectTrigger>
                  <SelectContent>
                    {AVAILABLE_COUNTRIES.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Select the countries where you want to register your trademark
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/registration?step=2")}
          >
            Previous
          </Button>
          <Button type="submit">Submit Application</Button>
        </div>
      </form>
    </Form>
  );
}
