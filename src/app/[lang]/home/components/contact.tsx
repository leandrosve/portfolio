'use client';
import React, { useEffect, useState } from 'react';
import Button from '@/app/components/common/button';
import Modal from '@/app/components/common/modal';
import ContactIcon from '../../../assets/icons/contact-icon.svg';
import { useDictionary } from '@/app/context/dictionary-provider';
import LinkedinIcon from '@/app/assets/icons/linkedin-icon.svg';
import ExternalLinkIcon from '@/app/assets/icons/external-link-icon.svg';
import IconButton from '@/app/components/common/icon-button';
import CopyIcon from '@/app/assets/icons/copy-icon.svg';
import CopyCheckIcon from '@/app/assets/icons/copy-check-icon.svg';
import EmailIcon from '@/app/assets/icons/email-icon.svg';
import CloseIcon from '@/app/assets/icons/close-icon.svg';

import { joinClasses, printIf } from '@/app/components/utils/ClassUtils';
import { Close as CloseButton } from '@radix-ui/react-dialog';

const Contact = () => {
  const dict = useDictionary();
  const [isOpen, setIsOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
    return () => clearTimeout(id);
  }, [emailCopied]);

  return (
    <>
      <Button className='shadow-lg' onClick={() => setIsOpen(true)}>
        <ContactIcon className='w-6 h-6' /> {dict.welcome.contact}
      </Button>
      <Modal open={isOpen} onChange={(v) => setIsOpen(v)}>
        <CloseButton asChild>
          <IconButton variant='ghost' className='absolute top-1 right-1' aria-label='close'>
            <CloseIcon className='h-7 w-7' />
          </IconButton>
        </CloseButton>
        <div className='p-5'>
          <h1 className='text-3xl font-bold'>{dict.contact.title}</h1>
          <h2 className='text-content-300'>{dict.contact.subtitle}</h2>

          <a href='https://www.linkedin.com/in/leandro-svetlich' target='_blank'>
            <Button asSpan className='mt-3 py-4 w-full justify-between rounded-sm pr-5 bg-[#0073b1] hover:bg-[#57b6ea] focus:bg-[#57b6ea]'>
              <div className='flex items-center gap-3'>
                <LinkedinIcon className='h-7 w-7' /> Linkedin
              </div>

              <ExternalLinkIcon />
            </Button>
          </a>

          <div className='flex flex-col items-stretch bg-base-200 mt-4 rounded-sm border border-content-300/20'>
            <div className='flex grow items-center p-2  pl-4 pr-1 justify-between '>
              <div className='flex items-center gap-4 font-bold'>
                <EmailIcon className='h-7 w-7' />
                <span>leandrosvetlich@gmail.com</span>
              </div>
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText('leandrosvetlich@gmail.com');
                  setEmailCopied(true);
                }}
                aria-label='Copy to clipboard'
                variant='ghost'
              >
                {emailCopied ? <CopyCheckIcon /> : <CopyIcon />}
              </IconButton>
            </div>
            <div
              aria-hidden
              className={joinClasses('text-center text-white bg-green-600 overflow-hidden transition-[height] h-6', printIf('h-0', !emailCopied))}
            >
              {dict.contact.copied}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Contact;
