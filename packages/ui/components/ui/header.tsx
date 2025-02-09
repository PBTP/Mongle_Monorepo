import * as React from 'react';

export function Header({ title }: { title: string }) {
  return (
    <header id="header">
      <h1>${title}</h1>
    </header>
  );
}
