import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { error } = await supabase.from("unidream_submissions").insert([
      {
        first_name: data.firstName,
        last_name: data.lastName,
        country_code: data.countryCode,
        mobile: data.mobile,
        email: data.email,
        courses: data.courses || [],
        degree_level: data.degreeLevel,
        linkedin_url: data.linkedinUrl,
        tiktok_username: data.tiktokUsername,
        instagram_username: data.instagramUsername,
        twitter_username: data.twitterUsername,
        website: data.website,
        student_type: data.studentType,
        educational_course: data.educationalCourse,
        main_motivation: data.mainMotivation,
        applying_apprenticeship: data.applyingApprenticeship,
        university_rank: data.universityRank,
        confidence_level: data.confidenceLevel,
        referral_source: data.referral,
        referred_by_code: data.referrerCode,
        user_referral_code: data.userReferralCode,
        user_referral_link: data.userReferralLink,
        referral_link_copied: data.referralLinkCopied,
        client_timestamp: data.clientTimestamp,
        user_agent: request.headers.get("user-agent"),
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
