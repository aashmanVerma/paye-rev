"use client"
import { SignUp } from "@clerk/nextjs";

export default function page() {
  return (
    <>
    <SignUp path="/signup" />
    </>
  );
}