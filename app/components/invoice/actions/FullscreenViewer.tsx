import React from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useInvoiceContext } from '@/contexts/InvoiceContext';
import { DynamicInvoiceTemplate } from '@/app/components/templates/invoice-pdf/DynamicInvoiceTemplate';

interface FullscreenViewerProps {
  open: boolean;
  onClose: () => void;
}

export const FullscreenViewer: React.FC<FullscreenViewerProps> = ({ open, onClose }) => {
  const { formValues } = useInvoiceContext();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'grey.500',
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <div style={{ width: '100%', maxWidth: '1000px', backgroundColor: 'white', padding: '2rem', borderRadius: '8px' }}>
          <DynamicInvoiceTemplate data={formValues} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
