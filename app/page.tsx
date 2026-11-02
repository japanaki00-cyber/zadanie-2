import ProfileHeader from "@/components/profile/ProfileHeader";
import StatsBlock from "@/components/profile/StatsBlock";
import AboutSection from "@/components/profile/AboutSection";
import ContentTabs from "@/components/profile/ContentTabs";

export default function ProfilePage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8">
      <ProfileHeader />
      <StatsBlock />
      <AboutSection />
      <ContentTabs />
    </div>
  );
}