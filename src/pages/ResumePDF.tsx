import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";

// Register system fonts (no CORS issues!)
Font.register({
  family: "Times New Roman",
  fonts: [
    { src: "Times-Roman" }, // Built-in PDF font
    { src: "Times-Bold", fontWeight: "bold" },
    { src: "Times-Italic", fontStyle: "italic" },
  ],
});

Font.register({
  family: "Arial",
  fonts: [
    { src: "Helvetica" }, // Arial equivalent in PDF
    { src: "Helvetica-Bold", fontWeight: "bold" },
    { src: "Helvetica-Oblique", fontStyle: "italic" },
  ],
});

Font.register({
  family: "Calibri",
  fonts: [
    { src: "Helvetica" }, // Closest to Calibri
    { src: "Helvetica-Bold", fontWeight: "bold" },
    { src: "Helvetica-Oblique", fontStyle: "italic" },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
  },
  // Header styles
  header: {
    marginBottom: 6,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 8,
  },
  contactBorder: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#9ca3af",
    paddingVertical: 4,
  },
  contactText: {
    fontSize: 10,
    textAlign: "center",
    lineHeight: 1.4,
  },
  bold: {
    fontWeight: "bold",
  },

  // Section styles
  sectionTitle: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#9ca3af",
    paddingVertical: 4,
    marginTop: 12,
    marginBottom: 8,
  },
  sectionTitleSimple: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderColor: "#9ca3af",
    paddingBottom: 4,
    marginTop: 8,
    marginBottom: 8,
  },

  // Text styles
  textJustify: {
    fontSize: 10,
    textAlign: "justify",
    lineHeight: 1.5,
    marginBottom: 4,
  },

  // Skills grid
  skillsGrid: {
    flexDirection: "row",
    gap: 32,
    paddingLeft: 16,
    marginTop: 4,
  },
  skillsColumn: {
    flex: 1,
  },

  // List styles
  listItem: {
    fontSize: 10,
    marginBottom: 2,
    marginLeft: 20,
    flexDirection: "row",
  },
  bulletPoint: {
    width: 15,
    fontSize: 10,
  },
  listItemText: {
    fontSize: 10,
    flex: 1,
    lineHeight: 1.4,
  },

  // Experience styles
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  experienceTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  experiencePeriod: {
    fontSize: 11,
    fontWeight: "bold",
  },
  experienceSubheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  experienceCompany: {
    fontSize: 11,
    fontWeight: "bold",
  },
  experienceLocation: {
    fontSize: 11,
    fontWeight: "bold",
  },
  experienceDetails: {
    marginLeft: 20,
  },

  // Education styles
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  educationDegree: {
    fontSize: 11,
    fontWeight: "bold",
  },
  educationDate: {
    fontSize: 11,
    fontWeight: "bold",
  },
  educationSubheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  educationSchool: {
    fontSize: 11,
    fontStyle: "italic",
  },
  educationLocation: {
    fontSize: 11,
  },

  // Personal info
  personalInfo: {
    fontSize: 10,
    marginBottom: 4,
  },

  italic: {
    fontStyle: "italic",
  },

  // Add spacing utility
  spacer4: {
    marginBottom: 4,
  },
  spacer8: {
    marginBottom: 8,
  },
  spacer12: {
    marginBottom: 12,
  },
  spacer16: {
    marginBottom: 16,
  },
});

interface ResumePDFProps {
  formData: any;
  fontChoice?: "Times New Roman" | "Arial" | "Calibri";
}

const ResumePDF: React.FC<ResumePDFProps> = ({
  formData,
  fontChoice = "Times New Roman",
}) => {
  // Update font family based on choice
  const getFontFamily = () => {
    switch (fontChoice) {
      case "Arial":
        return "Arial";
      case "Calibri":
        return "Calibri";
      case "Times New Roman":
      default:
        return "Times New Roman";
    }
  };

  // Helper function to render bullet list
  const renderBulletPoints = (text: string) => {
    return text
      .split("\n")
      .filter((line) => line.trim())
      .map((line, i) => {
        const cleanLine = line.trim().startsWith("•")
          ? line.trim().substring(1).trim()
          : line.trim();

        return (
          <View key={i} style={styles.listItem}>
            <Text style={[styles.bulletPoint, { fontFamily: getFontFamily() }]}>
              •
            </Text>
            <Text
              style={[styles.listItemText, { fontFamily: getFontFamily() }]}
            >
              {cleanLine}
            </Text>
          </View>
        );
      });
  };

  return (
    <Document>
      <Page size="A4" style={[styles.page, { fontFamily: getFontFamily() }]}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { fontFamily: getFontFamily() }]}>
            {formData.fullName}
          </Text>
          <View style={styles.contactBorder}>
            <Text style={[styles.contactText, { fontFamily: getFontFamily() }]}>
              {formData.location} | {formData.phone} | {formData.email} |{" "}
              <Text style={[styles.bold, { fontFamily: getFontFamily() }]}>
                WWW:
              </Text>{" "}
              <Link
                src={
                  formData.website.startsWith("http")
                    ? formData.website
                    : `https://${formData.website}`
                }
                style={{ color: "#000000", textDecoration: "underline" }}
              >
                {formData.website}
              </Link>
            </Text>
            <Text style={[styles.contactText, { fontFamily: getFontFamily() }]}>
              <Text style={[styles.bold, { fontFamily: getFontFamily() }]}>
                WWW:
              </Text>{" "}
              <Link
                src={
                  formData.github1.startsWith("http")
                    ? formData.github1
                    : `https://${formData.github1}`
                }
                style={{ color: "#000000", textDecoration: "underline" }}
              >
                {formData.github1.replace(/^https?:\/\//, "")}
              </Link>{" "}
              |{" "}
              <Text style={[styles.bold, { fontFamily: getFontFamily() }]}>
                WWW:
              </Text>{" "}
              <Link
                src={
                  formData.github1.startsWith("http")
                    ? formData.github1
                    : `https://${formData.github2}`
                }
                style={{ color: "#000000" }}
              >
                {formData.github2.replace(/^https?:\/\//, "")}
              </Link>
            </Text>
          </View>
        </View>

        {/* Personal Summary */}
        <View>
          <Text
            style={[
              {
                fontSize: 12,
                textAlign: "center",
                fontWeight: "bold",
                textTransform: "uppercase",
                borderBottomWidth: 1,
                borderColor: "#9ca3af",
                paddingBottom: 4,
                marginTop: "2px !important",
                marginBottom: 8,
              },
              { fontFamily: getFontFamily() },
            ]}
          >
            Personal Summary
          </Text>
          <Text style={[styles.textJustify, { fontFamily: getFontFamily() }]}>
            {formData.summary}
          </Text>
        </View>

        {/* Skills */}
        <View>
          <Text style={[styles.sectionTitle, { fontFamily: getFontFamily() }]}>
            Skills
          </Text>
          <View style={styles.skillsGrid}>
            <View style={styles.skillsColumn}>
              {formData.skills1.split(",").map((skill: string, i: number) => (
                <View key={i} style={styles.listItem}>
                  <Text
                    style={[
                      styles.bulletPoint,
                      { fontFamily: getFontFamily() },
                    ]}
                  >
                    •
                  </Text>
                  <Text
                    style={[
                      styles.listItemText,
                      { fontFamily: getFontFamily() },
                    ]}
                  >
                    {skill.trim()}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.skillsColumn}>
              {formData.skills2.split(",").map((skill: string, i: number) => (
                <View key={i} style={styles.listItem}>
                  <Text
                    style={[
                      styles.bulletPoint,
                      { fontFamily: getFontFamily() },
                    ]}
                  >
                    •
                  </Text>
                  <Text
                    style={[
                      styles.listItemText,
                      { fontFamily: getFontFamily() },
                    ]}
                  >
                    {skill.trim()}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Work Experience */}
        <View>
          <Text style={[styles.sectionTitle, { fontFamily: getFontFamily() }]}>
            Work Experience
          </Text>

          {/* Experience 1 */}
          <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <Text
                style={[
                  styles.experienceTitle,
                  { fontFamily: getFontFamily() },
                ]}
              >
                {formData.experience1.role}
              </Text>
              <Text
                style={[
                  styles.experiencePeriod,
                  { fontFamily: getFontFamily() },
                ]}
              >
                {formData.experience1.period}
              </Text>
            </View>
            <View style={styles.experienceSubheader}>
              <Text
                style={[
                  styles.experienceCompany,
                  { fontFamily: getFontFamily() },
                ]}
              >
                {formData.experience1.company}
              </Text>
              <Text
                style={[
                  styles.experienceLocation,
                  { fontFamily: getFontFamily() },
                ]}
              >
                {formData.experience1.location}
              </Text>
            </View>
            <View style={styles.experienceDetails}>
              {renderBulletPoints(formData.experience1.details)}
            </View>
          </View>

          {/* Experience 2 */}
          <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <Text
                style={[
                  styles.experienceTitle,
                  { fontFamily: getFontFamily() },
                ]}
              >
                {formData.experience2.role}
              </Text>
              <Text
                style={[
                  styles.experiencePeriod,
                  { fontFamily: getFontFamily() },
                ]}
              >
                {formData.experience2.period}
              </Text>
            </View>
            <View style={styles.experienceSubheader}>
              <Text
                style={[
                  styles.experienceCompany,
                  { fontFamily: getFontFamily() },
                ]}
              >
                {formData.experience2.company}
              </Text>
              <Text
                style={[
                  styles.experienceLocation,
                  { fontFamily: getFontFamily() },
                ]}
              >
                {formData.experience2.location}
              </Text>
            </View>
            <View style={styles.experienceDetails}>
              {renderBulletPoints(formData.experience2.details)}
            </View>
          </View>
          {/* Experience 3 */}
          <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <Text
                style={[
                  styles.experienceTitle,
                  { fontFamily: getFontFamily() },
                ]}
              >
                {formData.experience3.role}
              </Text>
              <Text
                style={[
                  styles.experiencePeriod,
                  { fontFamily: getFontFamily() },
                ]}
              >
                {formData.experience3.period}
              </Text>
            </View>
            <View style={styles.experienceSubheader}>
              <Text
                style={[
                  styles.experienceCompany,
                  { fontFamily: getFontFamily() },
                ]}
              >
                {formData.experience3.company}
              </Text>
              <Text
                style={[
                  styles.experienceLocation,
                  { fontFamily: getFontFamily() },
                ]}
              >
                {formData.experience3.location}
              </Text>
            </View>
            <View style={styles.experienceDetails}>
              {renderBulletPoints(formData.experience3.details)}
            </View>
          </View>
        </View>

        {/* Education */}
        <View>
          <Text style={[styles.sectionTitle, { fontFamily: getFontFamily() }]}>
            Education and Training
          </Text>
          <View style={styles.educationHeader}>
            <Text
              style={[styles.educationDegree, { fontFamily: getFontFamily() }]}
            >
              {formData.education.degree}
            </Text>
            <Text
              style={[styles.educationDate, { fontFamily: getFontFamily() }]}
            >
              {formData.education.date}
            </Text>
          </View>
          <View style={styles.educationSubheader}>
            <Text
              style={[styles.educationSchool, { fontFamily: getFontFamily() }]}
            >
              {formData.education.school}
            </Text>
            <Text
              style={[
                styles.educationLocation,
                { fontFamily: getFontFamily() },
              ]}
            >
              {formData.education.location}
            </Text>
          </View>
        </View>

        {/* Personal Information */}
        <View>
          <Text style={[styles.sectionTitle, { fontFamily: getFontFamily() }]}>
            Personal Information
          </Text>
          <Text style={[styles.personalInfo, { fontFamily: getFontFamily() }]}>
            Title: {formData.personalInfoTitle}
          </Text>
        </View>

        {/* Languages */}
        <View>
          <Text style={[styles.sectionTitle, { fontFamily: getFontFamily() }]}>
            Languages
          </Text>
          {formData.languages.split(",").map((lang: string, i: number) => (
            <View key={i} style={styles.listItem}>
              <Text
                style={[styles.bulletPoint, { fontFamily: getFontFamily() }]}
              >
                •
              </Text>
              <Text
                style={[styles.listItemText, { fontFamily: getFontFamily() }]}
              >
                {lang.trim()}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
