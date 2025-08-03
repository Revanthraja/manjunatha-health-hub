export interface Test {
  name: string;
  labRate: number;
  mrp?: number;
}

export interface ServiceTests {
  title: string;
  description: string;
  tests: Test[];
}

export const serviceTestData: Record<string, ServiceTests> = {
  hematology: {
    title: "Hematology Tests",
    description: "Complete blood count and blood-related diagnostic tests",
    tests: [
      { name: "CBC (Complete blood Count)", labRate: 150, mrp: 250 },
      { name: "CBC with ESR", labRate: 180, mrp: 350 },
      { name: "Complete Hemogram (CBC, PS)", labRate: 250, mrp: 350 },
      { name: "Peripheral smear", labRate: 150, mrp: 250 },
      { name: "Hb (Hemoglobin)", labRate: 100, mrp: 200 },
      { name: "Packed Cell Volume (PCV)", labRate: 100, mrp: 200 },
      { name: "Platelet Count", labRate: 100, mrp: 200 },
      { name: "Total Count and Differential Count", labRate: 100, mrp: 200 },
      { name: "Reticulocyte Count", labRate: 200, mrp: 300 },
      { name: "Absolute Count (AEC/ANC/ALC)", labRate: 100, mrp: 200 },
      { name: "Erythrocyte Sedimentation Rate (ESR)", labRate: 80, mrp: 200 },
      { name: "Platelet Indices", labRate: 100, mrp: 250 },
      { name: "Coagulation Profile (Pt. aPTT, Platelet)", labRate: 500, mrp: 1000 },
      { name: "Bleeding time (BT) & Clotting time (CT)", labRate: 200, mrp: 300 },
      { name: "Prothrombin Time (PT) & INR", labRate: 200, mrp: 400 },
      { name: "Activated Partial TT (APTT)", labRate: 200, mrp: 400 },
      { name: "Thrombin Time (TT)", labRate: 200, mrp: 400 },
      { name: "D-Dimer", labRate: 800, mrp: 1500 },
      { name: "Blood Grouping and Rh Typing", labRate: 150, mrp: 250 },
      { name: "Direct Coombs/ Indirect Coombs", labRate: 350, mrp: 800 }
    ]
  },
  pathology: {
    title: "Clinical Pathology Tests",
    description: "Comprehensive pathological examinations and analysis",
    tests: [
      { name: "Urine Routine and Microscopy", labRate: 300, mrp: 600 },
      { name: "Urine for Sugar and Protein", labRate: 200, mrp: 400 },
      { name: "Urine, protein (spot)", labRate: 100, mrp: 200 },
      { name: "Urine, protein (24-hours)", labRate: 100, mrp: 200 },
      { name: "Urine for ketone bodies", labRate: 100, mrp: 200 },
      { name: "UPT (Urine Pregnancy Test)", labRate: 100, mrp: 200 },
      { name: "Urine for Bence Jones Proteins", labRate: 200, mrp: 400 },
      { name: "Urine for Dysmorphic RBCs", labRate: 200, mrp: 400 },
      { name: "Hemosiderin in Urine", labRate: 800, mrp: 1500 },
      { name: "Stool for Occult blood", labRate: 100, mrp: 200 },
      { name: "Semen Analysis", labRate: 800, mrp: 1600 },
      { name: "Complete stool analysis", labRate: 150, mrp: 300 }
    ]
  },
  cytology: {
    title: "Cytology Tests",
    description: "Cellular analysis and microscopic examinations",
    tests: [
      { name: "PAP smear - conventional", labRate: 400, mrp: 800 },
      { name: "Body fluid analysis", labRate: 250, mrp: 500 },
      { name: "Body fluid - smear for malignancy", labRate: 250, mrp: 500 },
      { name: "Routine FNAC - site", labRate: 800, mrp: 1200 },
      { name: "Imprint Smear - slide", labRate: 250, mrp: 500 },
      { name: "Urine cytology", labRate: 250, mrp: 500 }
    ]
  },
  histopathology: {
    title: "Histopathology Tests",
    description: "Tissue analysis and biopsy examinations",
    tests: [
      { name: "Small Biopsy", labRate: 600 },
      { name: "Medium Biopsy", labRate: 800 },
      { name: "Large Biopsy", labRate: 1200 },
      { name: "Extra-Large Biopsy", labRate: 1500 },
      { name: "Review slide(s)", labRate: 500 }
    ]
  },
  biochemistry: {
    title: "Biochemistry Tests",
    description: "Blood chemistry and metabolic function tests",
    tests: [
      { name: "Fasting Blood Sugar (FBS)", labRate: 50, mrp: 100 },
      { name: "Post Prandial Blood Sugar (PPBS)", labRate: 50, mrp: 100 },
      { name: "Random Blood Sugar (RBS)", labRate: 50, mrp: 100 },
      { name: "Glucose Tolerance Test (GTT)", labRate: 200, mrp: 400 },
      { name: "Oral Glucose Tolerance Test (OGTT)", labRate: 200, mrp: 400 },
      { name: "Urine Microalbumin", labRate: 300, mrp: 600 },
      { name: "Glycated Hemoglobin (HbA1c)", labRate: 250, mrp: 500 },
      { name: "Lipid Profile", labRate: 400, mrp: 800 },
      { name: "Total Cholesterol", labRate: 150, mrp: 300 },
      { name: "HDL Cholesterol", labRate: 150, mrp: 300 },
      { name: "HDL Cholesterol (Direct)", labRate: 150, mrp: 300 },
      { name: "LDL Cholesterol (Direct)", labRate: 150, mrp: 300 },
      { name: "Liver Function Test", labRate: 500, mrp: 1000 },
      { name: "SGOT", labRate: 100, mrp: 200 },
      { name: "Bilirubin, direct", labRate: 200, mrp: 400 },
      { name: "Bilirubin, indirect", labRate: 200, mrp: 400 },
      { name: "Total Protein", labRate: 200, mrp: 400 },
      { name: "Albumin", labRate: 150, mrp: 350 },
      { name: "ALP", labRate: 150, mrp: 300 },
      { name: "AG Ratio", labRate: 150, mrp: 300 },
      { name: "SGPT", labRate: 100, mrp: 250 },
      { name: "GGT", labRate: 150, mrp: 300 },
      { name: "Alkaline Phosphatase (ALP)", labRate: 150, mrp: 300 },
      { name: "Gamma GT (GGT)", labRate: 150, mrp: 300 },
      { name: "Renal Function Test", labRate: 400, mrp: 800 },
      { name: "Urea", labRate: 150, mrp: 300 },
      { name: "Creatinine", labRate: 150, mrp: 300 },
      { name: "Serum Electrolytes", labRate: 500, mrp: 600 },
      { name: "Sodium (Na+)", labRate: 100, mrp: 200 },
      { name: "Chloride (Cl-)", labRate: 100, mrp: 200 },
      { name: "Potassium (K+)", labRate: 100, mrp: 200 },
      { name: "Bicarbonate (HCO3-)", labRate: 200, mrp: 400 },
      { name: "CRP-dIR", labRate: 250, mrp: 600 },
      { name: "CRP", labRate: 250, mrp: 450 },
      { name: "Troponin T", labRate: 600, mrp: 1500 },
      { name: "Troponin I", labRate: 600, mrp: 1500 },
      { name: "Lipase", labRate: 300, mrp: 600 },
      { name: "Pseudocholinesterase", labRate: 750, mrp: 1350 },
      { name: "Iron Profile", labRate: 500, mrp: 1000 },
      { name: "TIBC", labRate: 250, mrp: 500 },
      { name: "UIBC", labRate: 250, mrp: 500 },
      { name: "Transferrin", labRate: 600, mrp: 1200 },
      { name: "Transferrin saturation", labRate: 500, mrp: 850 },
      { name: "Ferritin", labRate: 450, mrp: 900 },
      { name: "VITAMIN B12", labRate: 800, mrp: 1600 },
      { name: "Folic Acid (Total)", labRate: 800, mrp: 1500 }
    ]
  },
  serology: {
    title: "Serology & Immunology Tests",
    description: "Immune system function and infectious disease testing",
    tests: [
      { name: "HIV", labRate: 200 },
      { name: "HbsAg", labRate: 200 },
      { name: "HCV", labRate: 200 },
      { name: "Syphilis", labRate: 200 },
      { name: "Dengue", labRate: 250 },
      { name: "Montaeux", labRate: 200 },
      { name: "Malaria", labRate: 200 },
      { name: "Weil Felix", labRate: 200 },
      { name: "WIDAL", labRate: 200 }
    ]
  },
  hormones: {
    title: "Hormone Tests",
    description: "Comprehensive hormone level analysis",
    tests: [
      { name: "T3", labRate: 150, mrp: 300 },
      { name: "FT3", labRate: 150, mrp: 300 },
      { name: "T4", labRate: 150, mrp: 300 },
      { name: "FT4", labRate: 150, mrp: 300 },
      { name: "TSH", labRate: 100, mrp: 250 },
      { name: "CRP", labRate: 200, mrp: 350 },
      { name: "HBA1C", labRate: 250, mrp: 500 },
      { name: "BETA HCG", labRate: 600, mrp: 1200 },
      { name: "VIT. D", labRate: 800, mrp: 1500 },
      { name: "TROP I", labRate: 350, mrp: 800 },
      { name: "AMH", labRate: 800, mrp: 2500 },
      { name: "D-DIMER", labRate: 800, mrp: 1500 },
      { name: "FSH", labRate: 250, mrp: 500 },
      { name: "PSA", labRate: 350, mrp: 700 },
      { name: "PROLACTIN", labRate: 200, mrp: 400 },
      { name: "TESTOSTERONE (F)", labRate: 800, mrp: 1500 },
      { name: "TESTOSTERONE (T)", labRate: 450, mrp: 1200 }
    ]
  }
};