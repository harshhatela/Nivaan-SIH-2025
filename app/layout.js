// app/layout.js
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Nivaan - Every Mind Deserves a New Dawn',
  description:
    'We partner with schools and colleges to provide culturally responsive and accessible mental health support for students.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.png" type="image/png" />
      </head>
      <body className={`${poppins.variable} font-poppins`}>{children}</body>
    </html>
  );
}
