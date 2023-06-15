import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
  center: {
    margin: "auto",
    width: "50%",
  },
  title: {
    fontSize: 30,
    margin: 20,
  },
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  tablemain: {
    borderStyle: "solid",
    border: 5,
    borderBottom: 0,
  },
  table: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: 5,
  },
  tablechild: {
    margin: 3,
  },
});

const getProgram = () => {
  return JSON.parse(localStorage.getItem("program"));
};

const getParameters = () => {
  return JSON.parse(localStorage.getItem("programParameters"));
};

// Create Document Component
const ProgramPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View>
          <Text style={styles.title}>{getParameters().name}</Text>
          <Text>Door: Bram Ekelschot</Text>
          <Text>Thema: {getParameters().theme}</Text>
        </View>
        <Text style={styles.title}>Program: </Text>

        <View style={styles.body}>
          <View style={styles.tablemain}>
            {getProgram().openingTime && (
              <View style={styles.table}>
                <Text style={styles.tablechild}>Opening</Text>
                <Text style={styles.tablechild}>
                  {getProgram().openingTime}
                </Text>
              </View>
            )}
            {getProgram().firstHalf.map((activity) => (
              <View style={styles.table}>
                <Text style={styles.tablechild}>{activity.name}</Text>
                <Text style={styles.tablechild}>{activity.time}</Text>
              </View>
            ))}
            {getProgram().breakTime && (
              <View style={styles.table}>
                <Text style={styles.tablechild}>Break</Text>
                <Text style={styles.tablechild}>{getProgram().breakTime}</Text>
              </View>
            )}
            {getProgram().secondHalf.map((activity) => (
              <View style={styles.table}>
                <Text style={styles.tablechild}>{activity.name}</Text>
                <Text style={styles.tablechild}>{activity.time}</Text>
              </View>
            ))}
            {getProgram().closingTime && (
              <View style={styles.table}>
                <Text style={styles.tablechild}>Closing</Text>
                <Text style={styles.tablechild}>
                  {getProgram().closingTime}
                </Text>
              </View>
            )}
            {getProgram().corveeTime && (
              <View style={styles.table}>
                <Text style={styles.tablechild}>Corvee</Text>
                <Text style={styles.tablechild}>{getProgram().corveeTime}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default ProgramPDF;
