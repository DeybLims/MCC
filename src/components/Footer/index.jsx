import { Img, Heading, Text } from "components";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center border-gray-900 border-t border-solid bg-[#0A0A0A] py-8 w-full`}
    >
      <div className="w-full max-w-[1844px] px-8">
        <div className="flex flex-col items-center">
          <div className="flex w-full items-start justify-between gap-8 md:flex-col">
            <div className="flex flex-col gap-4 max-w-[400px]">
              <Img src="images/MSL LOGO.png" alt="Footerlogo" className="h-[48px] w-[170px] object-contain" />
              <Text as="p" className="text-[14px] font-normal leading-[140%] !text-white-a700_7f">
                This website is under the use of Moonton Student Leaders Philippines supervised and monitored by the
                SERP Department. For inquiries and website concerns, send it to us using this link or you may contact
                us through contact@moontonslph.org
              </Text>
            </div>
            
            <div className="flex flex-1 justify-end gap-16 md:justify-between md:flex-wrap">
              <div className="flex flex-col items-start gap-4">
                <Heading
                  size="headingmd"
                  as="p"
                  className="text-[10px] font-semibold uppercase tracking-[0.40px] !text-white-a700_7f"
                >
                  Catalog
                </Heading>
                <ul className="flex flex-col items-start gap-0.5">
                  <li>
                    <a href="Events" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[14px] font-normal">
                        Events
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="News" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[14px] font-normal">
                        News
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Program" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[14px] font-normal">
                        Program
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Resources" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[14px] font-normal">
                        Resources
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col items-start gap-4">
                <Heading
                  size="headingmd"
                  as="p"
                  className="text-[10px] font-semibold uppercase tracking-[0.40px] !text-white-a700_7f"
                >
                  About
                </Heading>
                <ul className="flex flex-col items-start gap-0.5">
                  <li>
                    <a href="#">
                      <Text as="p" className="text-[14px] font-normal">
                        Our Story
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Team" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[14px] font-normal">
                        Team
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Partnerships" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[14px] font-normal">
                        Partnerships
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="text-[14px] font-normal">
                        News & Updates
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col items-start gap-4">
                <Heading
                  size="headingmd"
                  as="p"
                  className="text-[10px] font-semibold uppercase tracking-[0.40px] !text-white-a700_7f"
                >
                  Quick Links
                </Heading>
                <ul className="flex flex-col items-start gap-0.5">
                  <li>
                    <a href="#">
                      <Text as="p" className="text-[14px] font-normal">
                        SL Apply
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="text-[14px] font-normal">
                        MCC Registration
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Network" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[14px] font-normal">
                        Network
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col items-start gap-4">
                <Heading
                  size="headingmd"
                  as="p"
                  className="text-[10px] font-semibold uppercase tracking-[0.40px] !text-white-a700_7f"
                >
                  Legal
                </Heading>
                <ul className="flex flex-col items-start gap-0.5">
                  <li>
                    <a href="#">
                      <Text as="p" className="text-[14px] font-normal">
                        Privacy Policy
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="text-[14px] font-normal">
                        Terms of Use
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="w-full h-px bg-gray-900 my-8" />
          
          <div className="flex justify-center items-center gap-12 mb-8">
            <Img src="images/MSL LOGO.png" alt="MSL Logo" className="h-[48px] object-contain" />
            <Img src="images/MLBB NEW LOGO.png" alt="MLBB Logo" className="h-[48px] object-contain" />
          </div>
          
          <div className="flex w-full justify-between items-center">
            <Text size="textmd" as="p" className="text-[10px] font-medium !text-white-a700_7f">
              @ 2025 - Copyright
            </Text>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
