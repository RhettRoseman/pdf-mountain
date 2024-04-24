import React from 'react';
import { Document, Page, PDFViewer, Text, Image } from '@react-pdf/renderer';

// Create a component for the PDF document
const MyDocument = () => (
  <Document style={{backgroundColor: 'green',}} >
    <Page size="A4">
      <Text style={{textAlign: 'center', margin: '10px'}}></Text>
      <Image src='/assets/resume1.png'/>
      <Image src='/assets/resume2.png'/>
    </Page>
  </Document>
);

// Use the PDFViewer component to display the PDF document in your React component
const App = () => (
  <div style={{  height: '100vh', width: '100vw',   display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
    <PDFViewer width="70%" height="70%">
      <MyDocument />
    </PDFViewer>
    
  </div>)
   document.getElementById('root')
;

export default App;