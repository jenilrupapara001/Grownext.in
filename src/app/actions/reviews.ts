'use server'

export interface GoogleReview {
    author_name: string;
    profile_photo_url: string;
    author_url: string;
    rating: number;
    text: string;
    relative_time_description: string;
}

export async function getGoogleReviews(): Promise<GoogleReview[]> {
    const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

    // Fallback mock data — uses ui-avatars.com for proper portrait-quality initials avatars
    const mockReviews: GoogleReview[] = [
        {
            author_name: "Rakesh Patel",
            profile_photo_url: "https://ui-avatars.com/api/?name=Rakesh+Patel&background=FF6A00&color=fff&size=128&bold=true",
            author_url: "",
            rating: 5,
            text: "Within 3 months of onboarding with Grownext, we started receiving verified inquiries from the Middle East and Europe. Their knowledge of Western India's industrial landscape is unmatched.",
            relative_time_description: "2 months ago"
        },
        {
            author_name: "Amit Sharma",
            profile_photo_url: "https://ui-avatars.com/api/?name=Amit+Sharma&background=2B2B2B&color=fff&size=128&bold=true",
            author_url: "",
            rating: 5,
            text: "The account management team at Grownext handled everything from listing to lead generation. Our exports have grown by 40% in just six months since joining the platform.",
            relative_time_description: "4 months ago"
        },
        {
            author_name: "Suresh Mehra",
            profile_photo_url: "https://ui-avatars.com/api/?name=Suresh+Mehra&background=58595B&color=fff&size=128&bold=true",
            author_url: "",
            rating: 4,
            text: "Excellent service for Alibaba sellers. They guided us through the IEC and GST process effectively. Highly recommended for new exporters.",
            relative_time_description: "1 month ago"
        },
        {
            author_name: "Priya Mehta",
            profile_photo_url: "https://ui-avatars.com/api/?name=Priya+Mehta&background=FF6A00&color=fff&size=128&bold=true",
            author_url: "",
            rating: 5,
            text: "Grownext is the best partner for anyone looking to scale globally. Practical and result-oriented approach. Very professional team.",
            relative_time_description: "2 weeks ago"
        },
        {
            author_name: "Nikhil Joshi",
            profile_photo_url: "https://ui-avatars.com/api/?name=Nikhil+Joshi&background=2B2B2B&color=fff&size=128&bold=true",
            author_url: "",
            rating: 5,
            text: "Grownext helped us penetrate the US and Canada market through Alibaba.com. Their end-to-end support on account setup and buyer communication is outstanding.",
            relative_time_description: "3 weeks ago"
        }
    ];

    if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
        console.warn("Google Places API Key or Place ID missing. Using mock data.");
        return mockReviews;
    }

    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=name,reviews&key=${GOOGLE_PLACES_API_KEY}&reviews_sort=most_relevant`;
        const response = await fetch(url, { next: { revalidate: 3600 * 24 } }); // Cache for 24h
        const data = await response.json();

        if (data.status === 'OK' && data.result?.reviews?.length > 0) {
            return data.result.reviews;
        }

        console.warn(`Google API returned status: ${data.status} — falling back to mock data.`);
        return mockReviews;
    } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        return mockReviews;
    }
}
