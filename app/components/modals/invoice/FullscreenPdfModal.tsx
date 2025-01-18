import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface FullscreenPdfModalProps {
  children: ReactNode
  pdfUrl: string
}

export function FullscreenPdfModal({ children, pdfUrl }: FullscreenPdfModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0">
        <div className="w-full h-[95vh]">
          <iframe
            src={pdfUrl}
            className={cn(
              'w-full h-full',
              'rounded-lg border bg-background'
            )}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
