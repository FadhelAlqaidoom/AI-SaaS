"use client";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { MAX_FREE_COUNTS } from "@/constans";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";

interface FreeCounterProps {
  apiLimitCount: number;
  isPro: boolean
}

const FreeCounter = ({
  apiLimitCount = 0,
  isPro = false,
}: FreeCounterProps) => {
  const proModal = useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])
  if (!mounted) {
    return null;
  }

  if (isPro) {
    return null
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-2">
          <div className="text-center text-sm text-white mb-4 space-y-3">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              className="h-3 my-4" // Add vertical margin directly here
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
            <Button onClick={proModal.onOpen} className="w-full" variant="premiume">
              Upgrade
              <Zap className="w-4 h-4 ml-2 fill-white" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

  );
}

export default FreeCounter;