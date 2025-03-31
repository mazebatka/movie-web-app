import { MovieZLogo } from "@/components/common";
import { Mail, Phone } from "lucide-react";


export const Footer = () => {
  return (
    <footer className="bg-indigo-700 py-10 px-5 text-sm text-white">
      <div className="mx-auto flex flex-col justify-between gap-y-7 lg:flex-row max-w-screen-xl">
        <div className="space-y-3">
          <MovieZLogo />
          <p>© 2024 Movie Z. All Rights Reserved.</p>
        </div>

        <div className="flex gap-x-12 lg:gap-x-24">
          <div className="space-y-3">
            <h4>Contact Information</h4>

            <div className="space-y-6">
              <div className="flex items-center gap-x-3">
                <Mail size={16} />
                <div>
                  <h5 className="font-medium">Email:</h5>
                  <p>support@movieZ.com</p>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <Phone size={16} />
                <div>
                  <h5 className="font-medium">Phone:</h5>
                  <p>+976 (11) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4>Follow us</h4>
            <div className="flex flex-col gap-3 lg:flex-row">
              <span className="font-medium">Facebook</span>
              <span className="font-medium">Instagram</span>
              <span className="font-medium">Twitter</span>
              <span className="font-medium">YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};