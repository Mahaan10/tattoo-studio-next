"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(
        "w-full overflow-hidden rounded-xl border border-snow/20 bg-onyx",
        className,
      )}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border-b border-snow/20 px-2 text-alabaster/75 transition-colors duration-300 last:border-b-0 hover:bg-carbon-black/30",
        className,
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex w-full flex-1 items-center justify-between gap-6 py-6 text-left text-base font-medium tracking-tight text-foreground transition-colors duration-300 outline-none md:py-7 md:text-lg",
          "hover:text-foreground/70",
          "focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring/50",
          "disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        <span>{children}</span>

        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-snow/20 transition-colors duration-300 group-hover:border-snow/40 group-data-[state=open]:border-snow/40">
          <ChevronDownIcon
            className="size-4 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden="true"
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-base text-muted-foreground",
        "data-[state=closed]:animate-accordion-up",
        "data-[state=open]:animate-accordion-down",
      )}
      {...props}
    >
      <div className={cn("max-w-2xl pb-7 pr-10 leading-7 md:pb-8", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
