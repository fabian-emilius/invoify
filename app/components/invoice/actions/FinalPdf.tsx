"use client";

import { useState, useEffect } from 'react';

// ShadCn
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Components
import { BaseButton, SendPdfToEmailModal, Subheading } from "@/app/components";

// Contexts
import { useInvoiceContext } from "@/contexts/InvoiceContext";

// Icons
import {
    BookmarkIcon,
    DownloadCloudIcon,
    Eye,
    Mail,
    Maximize2,
    MoveLeft,
    Printer,
} from "lucide-react";

export default function FinalPdf() {
    const {
        pdfUrl,
        removeFinalPdf,
        previewPdfInTab,
        downloadPdf,
        printPdf,
        saveInvoice,
        sendPdfToMail,
    } = useInvoiceContext();

    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        const iframe = document.querySelector('iframe');
        if (!iframe) return;

        if (!isFullscreen) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(document.fullscreenElement !== null);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    return (
        <>
            <Subheading>Final PDF:</Subheading>
            <div className="flex items-center mb-3">
                <BaseButton
                    variant={"ghost"}
                    size="sm"
                    onClick={removeFinalPdf}
                >
                    <MoveLeft className="w-5 h-5" />
                    Back to Live Preview
                </BaseButton>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 my-1">
                <BaseButton
                    tooltipLabel="Preview invoice in new tab"
                    onClick={previewPdfInTab}
                    size="sm"
                    variant={"outline"}
                >
                    <Eye className="w-5 h-5" />
                    Preview
                </BaseButton>
                <BaseButton
                    tooltipLabel="Download invoice PDF"
                    onClick={downloadPdf}
                    size="sm"
                    variant={"outline"}
                >
                    <DownloadCloudIcon className="w-5 h-5" />
                    Download
                </BaseButton>

                <BaseButton
                    tooltipLabel="Print invoice"
                    onClick={printPdf}
                    size="sm"
                    variant={"outline"}
                >
                    <Printer className="w-5 h-5" />
                    Print
                </BaseButton>

                <BaseButton
                    tooltipLabel="Save invoice in website"
                    onClick={saveInvoice}
                    size="sm"
                    variant={"outline"}
                >
                    <BookmarkIcon className="w-5 h-5" />
                    Save
                </BaseButton>

                <SendPdfToEmailModal sendPdfToMail={sendPdfToMail}>
                    <BaseButton
                        tooltipLabel="Send invoice PDF to mail"
                        size="sm"
                        variant={"outline"}
                    >
                        <Mail className="w-5 h-5" />
                        Send to mail
                    </BaseButton>
                </SendPdfToEmailModal>
                <BaseButton
                    tooltipLabel="Toggle fullscreen"
                    onClick={toggleFullscreen}
                    size="sm"
                    variant={"outline"}
                >
                    <Maximize2 className="w-5 h-5" />
                    Fullscreen
                </BaseButton>
            </div>
            <AspectRatio ratio={1 / 1.4}>
                <iframe
                    className="h-full w-full rounded-xl"
                    src={`${pdfUrl}#toolbar=0`}
                />
            </AspectRatio>
        </>
    );
}
