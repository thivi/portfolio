import { FC, ReactElement } from "react";

const Footer: FC = (): ReactElement => {
    return <footer className="footer">© { new Date().getFullYear() } Theviyanthan K.</footer>;
};

export default Footer;
