import CreateNft from "@/components/Ui/Homepage/CreateNft/CreateNft";
import HeroSection from "@/components/Ui/Homepage/HeroSection/HeroSection";
import NftGallery from "@/components/Ui/Homepage/NftGallery/NftGallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CreateNft />
      <NftGallery />
    </>
  );
}
