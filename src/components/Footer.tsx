import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        // ... properti Row lainnya
      >
        {/* Blok Teks Baru */}
        <Text variant="body-default-s" onBackground="neutral-strong">
          © {currentYear} / {person.name}
        </Text>
        {/* ... bagian social media ... */}
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};