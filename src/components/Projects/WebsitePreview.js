import React from "react";

const WebsitePreview = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block", // Makes the anchor tag behave like a block container
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px", // Compact outer container width
          margin: "0 auto",
          padding: "8px", // Reduced padding
          textAlign: "center",
        }}
      >
        {/* Compact Outer Frame */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 10", // Laptop screen aspect ratio
            border: "1px solid #d1d5db",
            borderRadius: "8px", // Slightly smaller border radius
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", // Reduced shadow for a cleaner look
            position: "relative",
            cursor: "pointer", // Indicates clickable behavior
          }}
        >
          {/* Scaled Laptop View Inside Iframe */}
          <iframe
            src={url}
            style={{
              width: "1280px", // Fixed width for laptop design
              height: "800px", // Fixed height for laptop design
              border: "none",
              transform: "scale(0.375)", // Smaller scale for a more compact frame
              transformOrigin: "top left", // Anchor scaling to the top-left
              pointerEvents: "none", // Disable interaction within the iframe to prevent click interception
            }}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            title="Website Preview"
          ></iframe>
        </div>
      </div>
    </a>
  );
};

export default WebsitePreview;
