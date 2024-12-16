import React, { forwardRef, ReactNode, ForwardedRef } from 'react';

import styles from './ContentField.module.scss';

type ContentFieldProps = {
  children: ReactNode;
  disabled?: boolean;
  border?: boolean;
  className?: string;
  onClick?: () => void;
};

const ContentField = forwardRef<HTMLDivElement, ContentFieldProps>(
  (
    { children, disabled = false, border = false, className, onClick },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={`${styles.ContentFieldWrapper} ${disabled ? styles.Disabled : ''} ${border ? styles.Border : ''} ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

export default ContentField;
