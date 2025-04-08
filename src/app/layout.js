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
        <link
          href="https://fonts.googleapis.com/css2?family=Geist&family=Geist+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
