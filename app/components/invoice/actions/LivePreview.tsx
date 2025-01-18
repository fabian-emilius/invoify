import { useState } from 'react';
import { IconButton } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

// Components
import { DynamicInvoiceTemplate, Subheading } from '@/app/components';
import { FullscreenViewer } from './FullscreenViewer';

// Types
import { InvoiceType } from '@/types';

type LivePreviewProps = {
    data: InvoiceType;
};

export default function LivePreview({ data }: LivePreviewProps) {
    const [isFullscreen, setIsFullscreen] = useState(false);

    return (
        <>
            <div className="flex items-center justify-between">
                <Subheading>Live Preview:</Subheading>
                <IconButton
                    onClick={() => setIsFullscreen(true)}
                    size="small"
                    title="View fullscreen"
                >
                    <FullscreenIcon />
                </IconButton>
            </div>
            <div className="border dark:border-gray-600 rounded-xl my-1">
                <DynamicInvoiceTemplate {...data} />
            </div>
            <FullscreenViewer
                open={isFullscreen}
                onClose={() => setIsFullscreen(false)}
            />
        </>
    );
}
