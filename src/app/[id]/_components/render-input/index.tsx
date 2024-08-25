import React from "react";
import { toast } from "sonner";
import { Input, InputProps } from "~/components/ui/input";
import { FileType, isValidFileType } from "~/lib/is-valid-file-type";
import { setfiles } from "../../store/actions";
import { TModelSpaceInput } from "../../types";

export const RenderInput = React.forwardRef<
  HTMLInputElement,
  InputProps & {
    fieldtype: TModelSpaceInput["type"];
  }
>(({ className, fieldtype, ...props }, ref) => {
  let type: React.HTMLInputTypeAttribute = fieldtype;
  if (fieldtype === "audio" || fieldtype === "image") {
    type = "file";

    return (
      <Input
        {...props}
        type={type}
        ref={ref}
        onChange={(e) => {
          if (
            e.target?.files?.[0] &&
            !isValidFileType(
              e.target?.files?.[0],
              fieldtype === "audio" ? FileType.Audio : FileType.Image,
            )
          ) {
            toast.error("Invalid File Format");
            e.target.value = "";
            return;
          }

          setfiles(props?.name!, e.target.files);
          props?.onChange?.(e);
        }}
      />
    );
  }
  return <Input type={type} {...props} ref={ref} />;
});
