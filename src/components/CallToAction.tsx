
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MotionWrapper from "./MotionWrapper";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-khum-primary to-khum-accent py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <MotionWrapper>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Need Professional Technical or Cleaning Services?
            </h2>
            <p className="text-gray-100 max-w-2xl mb-10 text-lg">
              From air conditioning installation to building cleaning services, our experienced team is ready to help you with all your technical and maintenance needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-khum-primary hover:bg-gray-100 rounded-full px-8 shadow-lg">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10 rounded-full px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
