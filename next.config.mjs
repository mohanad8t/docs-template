import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
});

// Export the combined configuration
export default withNextra({
  // Disable Next.js dev indicators
  devIndicators: false,
  
  // Your existing redirects
  async redirects() {
    return [
      {
        source: "/",
        destination: "/get-started",
        permanent: true,
      },
    ];
  },

  // You can add other Next.js config options here as needed
});