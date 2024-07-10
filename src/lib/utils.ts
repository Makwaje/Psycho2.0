import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function postData(url: string, data: {}) {
  const response = await fetch(url, {
    method: "POST", // Specify the HTTP method
    headers: { "Content-Type": "application/json" }, // Set headers (optional)
    body: JSON.stringify(data), // Convert data to JSON string for body
  });
  return await response.json(); // Parse the response as JSON
}
