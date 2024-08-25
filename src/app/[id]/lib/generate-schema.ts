import { z } from "zod";
import { type TModelSpaceInput } from "~/app/[id]/types";

export const generateSchema = (fields: TModelSpaceInput[]) => {
  const schemaObj = fields.reduce<Record<string, z.ZodType<any, any, any>>>(
    (schema, field) => {
      let fieldSchema: z.ZodType<any, any, any>;

      switch (field.type) {
        case "number":
          fieldSchema = z.any();
          break;
        case "bool":
          fieldSchema = z.boolean();
          break;
        case "audio":
        case "image":
          fieldSchema = z.any();
          break;
        case "text":
        default:
          fieldSchema = z.string();
          break;
      }

      if (field.required) {
        fieldSchema = fieldSchema.refine(
          (val) => val !== undefined && val !== null && val !== "",
          {
            message: `${field.name} is required`,
          },
        );
      } else {
        fieldSchema = fieldSchema.optional();
      }

      schema[field.name] = fieldSchema;

      return schema;
    },
    {},
  );

  return z.object(schemaObj);
};
