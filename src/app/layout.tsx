import React, {ReactNode} from "react";
import './globals.css'

type Props = {
    children: ReactNode;
}

export default function RootLayout(props: Props) {
  const {children} = props;

  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
