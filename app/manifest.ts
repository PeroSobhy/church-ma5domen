import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "St.Mary",
        short_name: "St.Mary",
        description: "St.Mary Church",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
            {
                src: "/st.mary.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/st.mary.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
