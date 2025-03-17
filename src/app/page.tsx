// src/app/page.tsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Consequat
                <br />
                Suspendisse
              </h1>
              {/* Underline Image */}
              <div className="relative h-4 w-3/4 mt-2">
                <Image
                  src="/images/underline.png"
                  alt="Decorative underline"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left" }}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Splash Image */}
          <div className="relative h-64 md:h-96">
            <Image
              src="/images/landpage_splash.png"
              alt="Colorful abstract splash"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Want to join us? */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Want to join us?</h2>
            <p className="text-gray-600">
              Faucibus integer eget aenean porta. Leo nunc magna fringilla
              mattis lacus. Tincidunt massa risus quam quisque adipiscing.
            </p>
          </div>

          {/* Right Column - Start here with Airplane */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-bold">Start here</h2>
              <div className="relative w-16 h-16">
                <Image
                  src="/images/airplane.png"
                  alt="Paper airplane"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <p className="text-gray-600">
              Enter your email to subscribe to our newsletter.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              {/* <Input
                type="email"
                placeholder="Enter Address"
                className="rounded-full bg-white border-gray-200"
              /> */}
              <Button className="rounded-full bg-black text-white hover:bg-gray-800">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
