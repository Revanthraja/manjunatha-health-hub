export interface PackageTest {
  name: string;
}

export interface HealthPackage {
  name: string;
  originalPrice: string;
  price: string;
  discount: string;
  popular?: boolean;
  tests: PackageTest[];
  description: string;
}

export const healthPackages: HealthPackage[] = [
  {
    name: "Advanced Diabetes Package",
    originalPrice: "₹2,000",
    price: "₹1,000.00",
    discount: "50%",
    popular: true,
    description: "Comprehensive diabetes monitoring and management package",
    tests: [
      { name: "Complete Blood Count (CBC)" },
      { name: "Blood Urea" },
      { name: "Fasting Blood Sugar (FBS)" },
      { name: "HbA1c (Glycosylated Hb)" },
      { name: "Post Prandial Blood Sugar (PPBS)" },
      { name: "Serum Creatinine" },
      { name: "Urine Microalbumin" },
      { name: "Complete Urine Analysis" }
    ]
  },
  {
    name: "Diabetes Screening Package",
    originalPrice: "₹1,000",
    price: "₹500.00",
    discount: "50%",
    description: "Basic diabetes screening and detection package",
    tests: [
      { name: "Fasting Blood Sugar (FBS)" },
      { name: "HbA1c (Glycosylated Hb)" },
      { name: "Urine Microalbumin" }
    ]
  },
  {
    name: "Healthy Body Package",
    originalPrice: "₹1,700",
    price: "₹850.00",
    discount: "50%",
    description: "Complete body health assessment package",
    tests: [
      { name: "Haemoglobin (Hb)" },
      { name: "Fasting Blood Sugar (FBS)" },
      { name: "Post Prandial Blood Sugar (PPBS)" },
      { name: "Serum Calcium" },
      { name: "Serum Creatinine" },
      { name: "Serum Uric Acid" },
      { name: "Total Cholesterol" },
      { name: "TSH" },
      { name: "Alanine Transaminase (ALT/SGPT)" },
      { name: "Aspartate Aminotransferase (AST/SGOT)" }
    ]
  },
  {
    name: "Healthy Heart Package",
    originalPrice: "₹2,200",
    price: "₹1,100.00",
    discount: "50%",
    description: "Comprehensive cardiovascular health assessment",
    tests: [
      { name: "Complete Blood Count (CBC)" },
      { name: "ESR" },
      { name: "HbA1c (Glycosylated Hb)" },
      { name: "Lipid Profile Test (LPT)" },
      { name: "Complete Urine Analysis" }
    ]
  },
  {
    name: "Healthy Woman Package",
    originalPrice: "₹5,000",
    price: "₹2,500.00",
    discount: "50%",
    description: "Specialized health package for women's wellness",
    tests: [
      { name: "Complete Blood Count (CBC)" },
      { name: "Lipid Profile Test (LPT)" },
      { name: "Serum Calcium" },
      { name: "Serum Phosphorus" },
      { name: "TSH" },
      { name: "Vitamin D3" },
      { name: "ESR" },
      { name: "Complete Urine Analysis" }
    ]
  },
  {
    name: "Liver & Kidney Package",
    originalPrice: "₹2,000",
    price: "₹1,000.00",
    discount: "50%",
    description: "Comprehensive liver and kidney function assessment",
    tests: [
      { name: "Liver Function Test (LFT)" },
      { name: "Renal Function Test (RFT)" },
      { name: "Complete Urine Analysis" }
    ]
  },
  {
    name: "Comprehensive Body Checkup",
    originalPrice: "₹6,000",
    price: "₹3,000.00",
    discount: "50%",
    description: "Most comprehensive health checkup package",
    tests: [
      { name: "Blood Group & Rh Type" },
      { name: "Complete Blood Count (CBC)" },
      { name: "HbA1c (Glycosylated Hb)" },
      { name: "Lipid Profile Test (LPT)" },
      { name: "Liver Function Test (LFT)" },
      { name: "Random Blood Sugar (RBS)" },
      { name: "Renal Function Test (RFT)" },
      { name: "Thyroid Profile (T3, T4, TSH)" },
      { name: "Vitamin D3" },
      { name: "Complete Urine Analysis" }
    ]
  },
  {
    name: "Healthy Child Package",
    originalPrice: "₹1,900",
    price: "₹850.00",
    discount: "55%",
    description: "Essential health monitoring package for children",
    tests: [
      { name: "ESR" },
      { name: "AEC" },
      { name: "Blood Group & Rh Type" },
      { name: "Complete Blood Count (CBC)" },
      { name: "Serum Calcium" },
      { name: "Serum Phosphorus" },
      { name: "Complete Urine Analysis" }
    ]
  },
  {
    name: "Obesity Package",
    originalPrice: "₹4,000",
    price: "₹2,000.00",
    discount: "50%",
    description: "Specialized package for obesity management and metabolic health",
    tests: [
      { name: "Complete Blood Count (CBC)" },
      { name: "Lipid Profile Test (LPT)" },
      { name: "Random Blood Sugar (RBS)" },
      { name: "Serum Cortisol (8 AM)" },
      { name: "Thyroid Profile (T3, T4, TSH)" },
      { name: "Complete Urine Analysis" }
    ]
  },
  {
    name: "Senior Citizen Package (F)",
    originalPrice: "₹4,000",
    price: "₹2,000.00",
    discount: "50%",
    description: "Comprehensive health package for senior citizen women",
    tests: [
      { name: "ESR" },
      { name: "Complete Blood Count (CBC)" },
      { name: "Serum Calcium" },
      { name: "Liver Function Test (LFT)" },
      { name: "Renal Function Test (RFT)" },
      { name: "Total Cholesterol" },
      { name: "TSH" },
      { name: "Complete Urine Analysis" }
    ]
  },
  {
    name: "Senior Citizen Package (M)",
    originalPrice: "₹4,600",
    price: "₹2,300.00",
    discount: "50%",
    description: "Comprehensive health package for senior citizen men",
    tests: [
      { name: "ESR" },
      { name: "Serum Calcium" },
      { name: "Complete Blood Count (CBC)" },
      { name: "Liver Function Test (LFT)" },
      { name: "Renal Function Test (RFT)" },
      { name: "Total Cholesterol" },
      { name: "PSA" },
      { name: "Complete Urine Analysis" }
    ]
  }
];