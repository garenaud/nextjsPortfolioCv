import Link from 'next/link';
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";

import { Container, Grid, Typography, useTheme } from "@mui/material";

import { routes } from "@/data/routes";
import Social from "@/components/social";

const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: `100%`,
  position: "relative",
  overflow: "hidden",
  marginTop: "6em",
  padding: "2em 0 ",
}));

const LinkTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.25em",
  color: "#fff",
  "&:hover": {
    color: theme.palette.info.main,
  },
}));

const CopylightTypography = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "1em",
  "&:hover": {
    color: theme.palette.info.main,
  },
}));

interface Route {
  name: string;
  link: string;
}

const Footer: React.FC = () => {
  const theme = useTheme();
  const path: Route[] = routes;
  const router = useRouter();
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {path.map(({ name, link }) => (
            <Grid item key={link}>
              <Link href={link}>
                <LinkTypography
                  style={{
                    fontWeight: router.pathname === link ? "bold" : "normal",
                    borderBottom:
                      router.pathname === link ? "1px solid #757ce8" : "none",
                  }}
                >
                  {name}
                </LinkTypography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="column" style={{ margin: "1.2em 0" }}>
          <Social />
        </Grid>
        <Grid
          item
          container
          component={"a"}
          target="_blank"
          rel="noreferrer noopener"
          href="https://engagez-moi.com"
          justifyContent="center"
          style={{
            textDecoration: "none",
          }}
        >
          <CopylightTypography>
            &copy;Gaëtan Renaud {new Date().getFullYear()}
          </CopylightTypography>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
