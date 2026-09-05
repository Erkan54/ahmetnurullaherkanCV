export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES",
    items: ["C", "C++", "Python", "Kotlin", "SQL", "TypeScript"],
  },
  {
    title: "SOFTWARE",
    items: ["Android SDK", "Web Applications", "REST & WebSocket APIs", "PostgreSQL", "Linux Systems"],
  },
  {
    title: "HARDWARE",
    items: ["ESP32 Microcontrollers", "Bluetooth LE (BLE)", "Wi-Fi Direct", "RF Mesh", "Arduino"],
  },
  {
    title: "CONCEPTS",
    items: ["P2P Networking", "Mesh Architectures", "Signal Filtering (Kalman)", "Embedded Systems", "Data Structures"],
  },
];
