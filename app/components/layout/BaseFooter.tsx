"use client";

import { useTranslationContext } from "@/contexts/TranslationContext";

// Variables
import { AUTHOR_GITHUB } from "@/lib/variables";
import { Footer } from "react-day-picker";

const BaseFooter = () => {
  // const { _t } = useTranslationContext();

  return (
    // <footer className="container py-10">
    //     <p>
    //         {_t("footer.developedBy")}{" "}
    //         <a
    //             href={AUTHOR_GITHUB}
    //             target="_blank"
    //             style={{ textDecoration: "underline" }}
    //         >
    //             Ali Abbasov
    //         </a>
    //     </p>
    // </footer>
    <footer></footer>
  );
};

export default BaseFooter;
