export type TModelSpaceInput = {
  name: string;
  description: string;
  type: "text" | "number" | "bool" | "audio" | "image";
  required: boolean;
  default: "text" | "number" | number | "bool" | "audio" | "image" | null;
};

export type TModelSpaceOutput = {
  name: string;
  description: string;
  type: "text" | "number" | "bool" | "audio" | "image" | "images";
};

export type TModelSpace = {
  name: string;
  id: string;
  description: string;
  avatar: string;
  inputs: TModelSpaceInput[];
  outputs: TModelSpaceOutput[];
};


