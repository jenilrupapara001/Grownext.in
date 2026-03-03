"use client";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";

const sampleMarkers: GlobeMarker[] = [
    {
        lat: 20.91667,
        lng: 73.05,
        src: "/favicon.ico",
        label: "Surat, Gujarat",
    },
];

export default function Globe3DDemo() {
    return (
        <Globe3D
            markers={sampleMarkers}
            config={{
                atmosphereColor: "#4da6ff",
                atmosphereIntensity: 20,
                bumpScale: 5,
                autoRotateSpeed: 0.3,
            }}
            onMarkerClick={(marker) => {
                console.log("Clicked marker:", marker.label);
            }}
            onMarkerHover={(marker) => {
                if (marker) {
                    console.log("Hovering:", marker.label);
                }
            }}
        />
    );
}
