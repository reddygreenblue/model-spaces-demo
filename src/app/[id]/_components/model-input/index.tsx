"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Loader2 } from "lucide-react";
import type * as z from "zod";
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
import { ScrollBar } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { Skeleton } from "~/components/ui/skeleton";
import { fileToBase64 } from "~/lib/file-to-base64";
import {
  inputsSelector,
  useModelSpaceQuery,
} from "../../hooks/useModelSpaceQuery";
import { usePredictModelSpace } from "../../hooks/usePredictModelSpace";
import { generateSchema } from "../../lib/generate-schema";
import { useModelSpaceStore } from "../../store";
import { RenderInput } from "../render-input";

export default function ModelInput({ id }: { id: string }) {
  inputsSelector;
  const {
    data: formFields = [],
    isLoading,
  } = useModelSpaceQuery({ id, select: inputsSelector });

  const mutation = usePredictModelSpace({ id });

  const schema = generateSchema(formFields);

  const files = useModelSpaceStore((state) => state.fileInputs);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: formFields.reduce<Record<string, string | number>>(
      (values, field) => {
        values[field.name] = field.default ?? "";
        return values;
      },
      {},
    ),
  });

  const onValidSubmission = async (data: z.infer<typeof schema>) => {
    try {
      const requestBody: Record<string, string> = {};
      for (const key in data) {
        if (key in files && files[key]?.[0]) {
          requestBody[key] = await fileToBase64(files[key][0]);
        } else {
          requestBody[key] = data[key];
        }
      }
      mutation.mutate(requestBody);
    } catch (err) {
      console.log("err", err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-full flex-col gap-4 border bg-neutral-50 py-[15px] dark:bg-neutral-950">
        <div className="flex flex-col gap-6 px-5 py-[15px]">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onValidSubmission)}
        className="flex h-full flex-col gap-4 border bg-neutral-50 py-[15px] dark:bg-neutral-950"
      >
        <ScrollArea.Root className="h-full w-full overflow-hidden rounded">
          <ScrollArea.Viewport className="h-full w-full rounded">
            <div className="flex flex-col gap-6 px-5 py-[15px]">
              {formFields.map((formField) => (
                <FormField
                  key={formField.name}
                  control={form.control}
                  name={formField.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required={formField.required}>
                        {formField.name}
                      </FormLabel>
                      <FormControl>
                        <RenderInput
                          {...field}
                          placeholder={formField.description}
                          fieldtype={formField.type}
                        />
                      </FormControl>
                      <FormDescription>{formField.description}</FormDescription>
                      <FormMessage />
                      <Separator />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </ScrollArea.Viewport>
          <ScrollBar />
        </ScrollArea.Root>

        <Button
          disabled={mutation.isPending}
          className="mx-5 justify-end self-end"
        >
          <>
            {mutation.isPending ? "Predicting..." : "Predict"}
            {mutation.isPending && (
              <Loader2 className="ml-2 h-4 w-4 animate-spin" />
            )}
          </>
        </Button>
      </form>
    </Form>
  );
}
