export const navigationData = [
  { name: "Home", href: "/" },
  {
    name: "Who We Are",
    href: "/who-we-are",
    children: [
      { name: "Our Story", href: "/who-we-are/our-story" },
      { name: "Leadership Team", href: "/who-we-are/leadership-team" },
      { name: "Our Global Presence", href: "/who-we-are/global-presence" },
    ],
  },
  {
    name: "What We Do", // This will be the mega menu trigger
    href: "/what-we-do",
    isMegaMenu: true,
    children: [
      {
        category: "Artificial Intelligence",
        items: [
          { name: "AI & GenAI Practice", href: "/what-we-do/ai-genai-practice" },
          { name: "GenAI & LLM Integration (GPT, Azure OpenAI)", href: "/what-we-do/genai-llm-integration" },
          { name: "Agentic AI & AI Agents", href: "/what-we-do/agentic-ai" },
          { name: "NLP & Computer Vision", href: "/what-we-do/nlp-computer-vision" },
          { name: "ML Engineering & MLOps", href: "/what-we-do/ml-engineering-mlops" },
          { name: "AI Automation (AI + RPA)", href: "/what-we-do/ai-automation" },
          { name: "AI Advisory & Responsible AI", href: "/what-we-do/ai-advisory" },
        ],
      },
      {
        category: "Cloud & Application Services",
        items: [
          { name: "Azure, AWS, GCP Engineering", href: "/what-we-do/cloud-app-services/cloud-engineering" },
          { name: "DevOps & DevSecOps", href: "/what-we-do/cloud-app-services/devops-devsecops" },
          { name: "App Modernization & Microservices", href: "/what-we-do/cloud-app-services/app-modernization" },
          { name: "API & Integration Services", href: "/what-we-do/cloud-app-services/api-integration" },
        ],
      },
      {
        category: "SAP Services",
        items: [
          { name: "SAP S/4HANA Migration", href: "/what-we-do/sap-services/s4hana-migration" },
          { name: "SAP BTP, ABAP, Fiori Development", href: "/what-we-do/sap-services/btp-abap-fiori" },
          { name: "SAP AMS & Managed Support", href: "/what-we-do/sap-services/ams-managed-support" },
        ],
      },
      {
        category: "Managed IT Services",
        items: [
          { name: "Infra & Network Monitoring (24/7 NOC)", href: "/what-we-do/managed-it-services/infra-monitoring" },
          { name: "Application Support (L1-L3)", href: "/what-we-do/managed-it-services/app-support" },
          { name: "ITSM, Service Desk & CoE", href: "/what-we-do/managed-it-services/itsm-service-desk" },
          {
            name: "Managed Resource Services (TMS)",
            href: "/what-we-do/managed-it-services/managed-resource-services",
          },
        ],
      },
      {
        category: "Data & Analytics",
        items: [
          { name: "Data Engineering & ETL", href: "/what-we-do/data-analytics/data-engineering" },
          { name: "Business Intelligence & Dashboards", href: "/what-we-do/data-analytics/bi-dashboards" },
          { name: "Data Governance & Security", href: "/what-we-do/data-analytics/data-governance" },
          { name: "Azure Data Lake, Snowflake, Power BI", href: "/what-we-do/data-analytics/azure-snowflake-powerbi" },
        ],
      },
      {
        category: "Engineering & Manufacturing IT",
        items: [
          { name: "PLM, CAD/CAE Automation", href: "/what-we-do/engineering-manufacturing-it/plm-cad-automation" },
          { name: "MES Integration & IoT", href: "/what-we-do/engineering-manufacturing-it/mes-iot" },
          { name: "Digital Twins & Smart Factory", href: "/what-we-do/engineering-manufacturing-it/digital-twins" },
          { name: "Industry 4.0 Solutions", href: "/what-we-do/engineering-manufacturing-it/industry-4-solutions" },
        ],
      },
      {
        category: "Healthcare & Life Sciences IT",
        items: [
          { name: "HL7/FHIR Integration", href: "/what-we-do/healthcare-life-sciences-it/hl7-fhir-integration" },
          { name: "Clinical Data Platforms", href: "/what-we-do/healthcare-life-sciences-it/clinical-data-platforms" },
          {
            name: "AI in Imaging & Diagnostics",
            href: "/what-we-do/healthcare-life-sciences-it/ai-imaging-diagnostics",
          },
          {
            name: "Compliance & Regulatory IT",
            href: "/what-we-do/healthcare-life-sciences-it/compliance-regulatory-it",
          },
        ],
      },
      {
        category: "Talent Solutions",
        items: [
          { name: "IT Staff Augmentation", href: "/what-we-do/talent-solutions/it-staff-augmentation" },
          { name: "Healthcare & Life Sciences Staffing", href: "/what-we-do/talent-solutions/healthcare-staffing" },
          { name: "Direct Hire & Contract-to-Hire", href: "/what-we-do/talent-solutions/direct-contract-hire" },
          { name: "Corp-to-Corp & W2", href: "/what-we-do/talent-solutions/corp-to-corp-w2" },
        ],
      },
    ],
  },
  {
    name: "Our Companies",
    href: "/our-companies",
    children: [
      {
        category: "Lumin Inc.",
        items: [
          { name: "About Lumin Inc.", href: "/our-companies/lumin-inc/about" },
          { name: "Healthcare Display Products", href: "/our-companies/lumin-inc/healthcare-display-products" },
          { name: "Consulting & Engineering Services", href: "/our-companies/lumin-inc/consulting-engineering" },
          { name: "Partner Network", href: "/our-companies/lumin-inc/partner-network" },
        ],
      },
      {
        category: "Lumin Innovations",
        items: [
          { name: "About Lumin Innovations", href: "/our-companies/lumin-innovations/about" },
          { name: "Wire Harness Design & Manufacturing", href: "/our-companies/lumin-innovations/wire-harness" },
          { name: "High Voltage & Component Design", href: "/our-companies/lumin-innovations/high-voltage" },
          {
            name: "Automation, Prototyping & Simulation",
            href: "/our-companies/lumin-innovations/automation-prototyping",
          },
        ],
      },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    children: [
      { name: "Healthcare & Life Sciences", href: "/industries/healthcare-life-sciences" },
      { name: "Manufacturing & Automotive", href: "/industries/manufacturing-automotive" },
      { name: "Aerospace & Defense", href: "/industries/aerospace-defense" },
      { name: "Banking & Financial Services", href: "/industries/banking-financial-services" },
      { name: "Retail & Consumer Goods", href: "/industries/retail-consumer-goods" },
      { name: "Energy & Utilities", href: "/industries/energy-utilities" },
    ],
  },
  {
    name: "Insights",
    href: "/insights",
    children: [
      { name: "Blog", href: "/insights/blog" },
      { name: "Whitepapers & Case Studies", href: "/insights/whitepapers-case-studies" },
      { name: "News & Announcements", href: "/insights/news-announcements" },
    ],
  },
  {
    name: "Careers",
    href: "/careers",
    children: [
      { name: "Current Openings", href: "/careers/current-openings" },
      { name: "Life at Intellett", href: "/careers/life-at-intellett" },
      { name: "Join Our Talent Network", href: "/careers/join-talent-network" },
    ],
  },
  {
    name: "Contact Us",
    href: "/contact-us",
    children: [
      { name: "Request a Callback", href: "/contact-us/request-callback" },
      { name: "General Inquiries", href: "/contact-us/general-inquiries" },
      { name: "Office Locations", href: "/contact-us/office-locations" },
    ],
  },
]
