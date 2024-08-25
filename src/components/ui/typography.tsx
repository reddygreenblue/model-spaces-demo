import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/tailwind-util";

const typographyH1Variants = cva(
  "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
);
const TypographyH1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> &
    VariantProps<typeof typographyH1Variants>
>(({ className, children, ...props }, ref) => (
  <h1 ref={ref} className={cn(typographyH1Variants(), className)} {...props}>
    {children}
  </h1>
));
TypographyH1.displayName = "TypographyH1";

const typographyH2Variants = cva(
  "scroll-m-20 pb-2 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0",
);
const TypographyH2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> &
    VariantProps<typeof typographyH2Variants>
>(({ className, children, ...props }, ref) => (
  <h2 ref={ref} className={cn(typographyH2Variants(), className)} {...props}>
    {children}
  </h2>
));
TypographyH2.displayName = "TypographyH2";

const typographyPVariants = cva("leading-7 [&:not(:first-child)]:mt-6");
const TypographyP = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> &
    VariantProps<typeof typographyPVariants>
>(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn(typographyPVariants(), className)} {...props}>
    {children}
  </p>
));
TypographyP.displayName = "TypographyP";

const typographyLargeVariants = cva("text-lg font-semibold");
const TypographyLarge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof typographyLargeVariants>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(typographyLargeVariants(), className)}
    {...props}
  >
    {children}
  </div>
));
TypographyLarge.displayName = "TypographyLarge";

const typographySmallVariants = cva("text-xs sm:text-sm font-medium leading-none");
const TypographySmall = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> &
    VariantProps<typeof typographySmallVariants>
>(({ className, children, ...props }, ref) => (
  <small
    ref={ref}
    className={cn(typographySmallVariants(), className)}
    {...props}
  >
    {children}
  </small>
));
TypographySmall.displayName = "TypographySmall";

export {
  TypographyH1,
  TypographyH2,
  TypographyLarge,
  TypographyP,
  TypographySmall,
};
