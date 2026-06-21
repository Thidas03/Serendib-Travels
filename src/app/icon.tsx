import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default async function Icon() {
  // Read the logo image from the public folder
  const logoPath = path.join(process.cwd(), "public", "logo.png");
  const logoBuffer = fs.readFileSync(logoPath);
  const base64Image = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          overflow: "hidden",
        }}
      >
        {/* Crop the center square out of the wide logo (2760x1504, aspect ratio 1.835) */}
        <img
          src={base64Image}
          alt="Icon"
          style={{
            width: "183.5%",
            height: "100%",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
