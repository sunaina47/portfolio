import "./globals.css";

export const metadata = {
  title: "Sunaina Kharangate",
  description: "Created by Sunaina",
  icons: {
    icon: "/images/profile.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
