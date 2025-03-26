import { useMemo } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Assets
import Logo from "@/public/assets/img/logo.png";

// ShadCn
import { Card } from "@/components/ui/card";

// Components
import { DevDebug, LanguageSelector, ThemeSwitcher } from "@/app/components";

const BaseNavbar = () => {
  const devEnv = useMemo(() => {
    return process.env.NODE_ENV === "development";
  }, []);

  return (
    <header className="lg:container z-[99]">
      <nav>
        <Card className="flex flex-wrap justify-center items-center p-2 mt-4">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Invoify Logo"
              width={250}
              height={200}
              loading="eager"
            />
          </Link>
          {/* ? DEV Only */}
          {/* {devEnv && <DevDebug />} */}
          {/* <LanguageSelector /> */}
          {/* <ThemeSwitcher /> */}
        </Card>
      </nav>
    </header>
  );
};

export default BaseNavbar;
