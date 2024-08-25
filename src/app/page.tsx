"use client";

import { TypographyH2, TypographySmall } from "~/components/ui/typography";
import ModelSpaceCards from "./_components/model-space-cards";
import Search from "./_components/search";

export default function HomePage() {

  return (
    <main className="p-6 sm:p-12">
      <TypographyH2>Explore Model Spaces</TypographyH2>
      <TypographySmall className="text-muted-foreground">
        A model space is a dedicated page for a GenAI model where a user can
        provide inputs (a combination of text, number, boolean, image, and
        audio), predict using the model, and visualize outputs (JSON and
        beautified (combination of text, image(s), number, boolean, audio)) and
        the time taken by the API.
      </TypographySmall>
      <Search />
      <ModelSpaceCards />
    </main>
  );
}
