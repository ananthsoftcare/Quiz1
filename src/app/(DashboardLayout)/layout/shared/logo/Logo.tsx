import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";
import studentimage from './student.png'
import studentimage1 from './student1.png'
import studentimage2 from './student2.png'
import studentimage3 from './student3.png'
import studentimage4 from './student4.png'

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    // <LinkStyled href="/">
    <div style={{ margin: 10, marginBottom: 30, marginTop: 15, textAlign: 'center' }}>
      <Image src={studentimage} alt="logo" height={40} width={185} />
    </div>
    /* </LinkStyled> */
  );
};

export default Logo;
