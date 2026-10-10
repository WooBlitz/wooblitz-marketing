"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AnnouncementBar03 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
            opacity: { duration: 0.2, ease: "easeInOut" as const },
          }}
          className="relative flex w-full items-center overflow-hidden bg-foreground px-4 py-3 sm:px-6"
        >
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-5 text-center sm:flex-row sm:px-0">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <Badge
                variant="outline"
                className="shrink-0 border-primary bg-primary/15 text-primary"
              >
                Closed beta
              </Badge>
              <p className="text-sm text-background">
                Not publicly available yet. It runs for a small number of
                founding stores, and parts of the platform are still being
                built.
              </p>
            </div>
            <Button
              render={
                <a href="mailto:hello@wooblitz.com?subject=Closed%20beta%20access" />
              }
              nativeButton={false}
              size="xs"
              className="group h-auto border-0 shrink-0 gap-1.5 rounded-full bg-background px-2 py-0.5 text-xs font-medium text-foreground hover:bg-background/80 cursor-pointer"
            >
              Request access
              <ArrowRight className="size-3 transition-all duration-300 group-hover:translate-x-0.5" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={() => setVisible(false)}
            aria-label="Dismiss announcement"
            className="absolute top-3 right-4 shrink-0 rounded-md text-background/50 hover:bg-transparent dark:hover:bg-transparent hover:text-background sm:static sm:top-auto sm:right-auto cursor-pointer"
          >
            <X className="size-4! shrink-0" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar03;
